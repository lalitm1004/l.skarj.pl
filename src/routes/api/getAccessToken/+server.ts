import { json } from "@sveltejs/kit";
import connectMongo from "$lib/utils/connectMongo";
import { SpotifyCredentials } from "$lib/models/SpotifyCredentials";
import { type SpotifyCredentialsType } from "$lib/types/types";

import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from "$env/static/private";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token"
const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1"

export const GET = async () => {
    await connectMongo();

    const spotifyCredentials: SpotifyCredentialsType | null = await SpotifyCredentials.findOne({});

    if (!spotifyCredentials) return json({ error: "Initialization required"})
    
    let accessToken = spotifyCredentials.access_token;
    let refreshToken = spotifyCredentials.refresh_token;

    const testUrl = `${SPOTIFY_API_BASE_URL}/me`;
    const testResponse = await fetch(testUrl, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    });

    if (testResponse.status === 401) {
        // Token expired
        const refreshPayload = new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: refreshToken,
            client_id: SPOTIFY_CLIENT_ID,
            client_secret: SPOTIFY_CLIENT_SECRET,
        })

        const refreshResponse = await fetch(SPOTIFY_TOKEN_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: refreshPayload
        })
        const refreshJson = await refreshResponse.json();

        accessToken = refreshJson.access_token;
        refreshToken = refreshJson.refresh_token;

        await SpotifyCredentials.updateOne({}, {access_token:accessToken, refresh_token:refreshToken});
    }

    return json({"access_token": accessToken})
}