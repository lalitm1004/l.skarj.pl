import { json } from "@sveltejs/kit";
import { LASTFM_API_KEY, LASTFM_USERNAME } from "$env/static/private";

export const GET = async () => {
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&nowplaying=true`;

    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
        return json(data);
    } else {
        return json({ error: data.message }, { status: response.status });
    }
}