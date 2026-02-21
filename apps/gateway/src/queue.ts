import { Queue, type ConnectionOptions } from "bullmq";

const connectionOptions: ConnectionOptions = {
    host: process.env.REDIS_HOST || "localhost",
    port: +(process.env.REDIS_PORT ?? 6379),
    maxRetriesPerRequest: null,
};

export const telegramQueue = new Queue(
    "telegram",
    {
        connection: connectionOptions,
    },
);

export const instagramQueue = new Queue(
    "instagram",
    {
        connection: connectionOptions,
    },
);