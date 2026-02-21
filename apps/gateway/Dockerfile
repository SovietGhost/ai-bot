FROM oven/bun
WORKDIR /app
COPY package.json .
RUN bun install
COPY src ./src
EXPOSE 3000
CMD ["bun", "run", "src/main.ts"]
