import type { ConnectionOptions, Job } from "bullmq";
import { Worker } from "bullmq";

const connectionOptions: ConnectionOptions = {
    host: process.env.REDIS_HOST || "localhost",
    port: +(process.env.REDIS_PORT ?? 6379),
    maxRetriesPerRequest: null,
};

export const telegramWorker = new Worker(
    "telegram",
    async (job: Job<{ message: string }>) => {
        const { message } = job.data;
        console.log(`Generating response for Telegram message: ${message}`);
        await Bun.sleep(2000);
        console.log(`Response generated for Telegram message: ${message}`);
        return `Hello, ${message}`;
    },
    {
        connection: connectionOptions,
    },
);

export const instagramWorker = new Worker(
    "instagram",
    async (job: Job<{ message: string }>) => {
        const { message } = job.data;
        console.log(`Generating response for Instagram message: ${message}`);
        await Bun.sleep(2000);
        console.log(`Response generated for Instagram message: ${message}`);
        return `Hello, ${message}`;
    },
    {
        connection: connectionOptions,
    },
);
