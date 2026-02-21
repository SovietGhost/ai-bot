import express from "express";
import { instagramQueue, telegramQueue } from "./queue";

const app = express();
app.use(express.json());

const PORT = +(process.env.PORT ?? 3000);

app.post("/telegram/webhook", async (req, res) => {
    const { message } = req.body;
    await telegramQueue.add("generate", { message });
    res.status(200).send("OK");
});

app.post("/instagram/webhook", async (req, res) => {
    const { message } = req.body;
    await instagramQueue.add("generate", { message });
    res.status(200).send("OK");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
