import mongoose, { Model, mongo } from "mongoose";
import { type SpotifyCredentialsType } from "$lib/types/types";

const SpotifyCredentialsSchema = new mongoose.Schema(
    {
        access_token: {
            type: String,
            required: true,
        },
        refresh_token: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        toJSON: {
            versionKey: false,
            virtuals: false,
            transform: (_, ret) => {
                delete ret._id;
            },
        },
    },
);

export const SpotifyCredentials: Model<SpotifyCredentialsType> = mongoose.models.SpotifyCredentials ?? mongoose.model<SpotifyCredentialsType>("SpotifyCredentials", SpotifyCredentialsSchema);  