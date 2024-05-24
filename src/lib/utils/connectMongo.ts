import mongoose, { type ConnectOptions } from "mongoose";
import { MONGO_URI } from "$env/static/private";

const cached: { connection?: typeof mongoose; promise?: Promise<typeof mongoose>} = {};
export const connectMongo = async () => {
    if (cached.connection) return cached.connection;

    if (!cached.promise) {
        const opts= {
            dbName: 'spotify',
            bufferCommands: false,
        } as ConnectOptions;
        cached.promise = mongoose.connect(MONGO_URI, opts);
    }

    try {
        cached.connection = await cached.promise;
    } catch (e) {
        cached.promise = undefined;
        throw(e);
    }

    return cached.connection;
}

export default connectMongo;