FROM node:24.18.0-bookworm-slim AS dependencies

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

FROM node:24.18.0-bookworm-slim AS builder

WORKDIR /app

ARG SITE_URL
ARG YANDEX_METRICA_ID
ARG SOURCE_COMMIT

ENV BUILD_PROFILE=release \
    SITE_URL=${SITE_URL} \
    YANDEX_METRICA_ID=${YANDEX_METRICA_ID} \
    SOURCE_COMMIT=${SOURCE_COMMIT} \
    NEXT_TELEMETRY_DISABLED=1

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

RUN test -n "$SOURCE_COMMIT" && \
    test -n "$SITE_URL" && \
    test -n "$YANDEX_METRICA_ID" && \
    npm run build:release

FROM node:24.18.0-bookworm-slim AS runner

WORKDIR /app

ARG SOURCE_COMMIT

ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0 \
    SOURCE_COMMIT=${SOURCE_COMMIT} \
    NEXT_TELEMETRY_DISABLED=1

LABEL org.opencontainers.image.source-commit=${SOURCE_COMMIT}

RUN groupadd --system --gid 1001 nodejs && \
    useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/healthz').then((response) => process.exit(response.ok ? 0 : 1)).catch(() => process.exit(1))"

CMD ["node", "server.js"]
