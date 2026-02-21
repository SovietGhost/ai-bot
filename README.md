# AI Bot (gateway + queue + worker)

Multi-channel chatbot: webhooks enqueue messages to Redis; a worker processes them.

## Prerequisites

- Docker & Docker Compose

## Run (demo)

1. **Start all services**
   ```bash
   docker compose up -d
   ```

2. **Watch logs in separate terminals** (so you can see gateway and worker output)
   - Terminal 1 – gateway:
     ```bash
     docker compose logs gateway -f
     ```
   - Terminal 2 – generation worker:
     ```bash
     docker compose logs generation -f
     ```

3. **Trigger a job**
   ```bash
   curl -X POST http://localhost:3000/telegram/webhook -H "Content-Type: application/json" -d '{"message":"hi"}'
   curl -X POST http://localhost:3000/instagram/webhook -H "Content-Type: application/json" -d '{"message":"hello"}'
   ```
   You should see the gateway log the request and the generation worker log the job after ~2s.

## Env (optional)

Set in `docker-compose.yml` or when running with Bun locally:

- `PORT` – gateway port (default 3000)
- `REDIS_HOST` – default `redis` in Compose, `localhost` locally
- `REDIS_PORT` – default `6379`
