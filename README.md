# AI Bot (gateway + queue + worker)

Multi-channel chatbot: webhooks enqueue messages to Redis; a worker processes them.

## Prerequisites

- [Bun](https://bun.sh)
- Docker (for Redis)

## Run (demo)

1. **Start Redis**
   ```bash
   docker compose up -d
   ```

2. **Start the gateway** (receives Telegram/Instagram webhooks, enqueues jobs)
   ```bash
   cd apps/gateway && bun run src/main.ts
   ```
   Listens on http://localhost:3000

3. **Start the worker** (processes jobs; run in another terminal)
   ```bash
   cd apps/generation && bun run src/main.ts
   ```

4. **Trigger a job**
   ```bash
   curl -X POST http://localhost:3000/telegram/webhook -H "Content-Type: application/json" -d '{"message":"hi"}'
   curl -X POST http://localhost:3000/instagram/webhook -H "Content-Type: application/json" -d '{"message":"hello"}'
   ```
   You should see the worker log and respond after ~2s.

## Env (optional)

- `PORT` – gateway port (default 3000)
- `REDIS_HOST` – default `localhost`
- `REDIS_PORT` – default `6379`
