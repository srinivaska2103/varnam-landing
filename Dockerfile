# ==========================================================
# Landing Page - Next.js Multi-Stage Production Dockerfile
# ==========================================================

# Stage 1: Dependencies installation
FROM node:20-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  else npm install; \
  fi

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set production environment for build
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Build arguments for public endpoints
ARG NEXT_PUBLIC_APP_URL=https://varnam.vexatech.in
ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL

# Build the Next.js landing page application
RUN npm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3002
ENV HOSTNAME="0.0.0.0"

# Install curl for healthcheck
RUN apk add --no-cache curl

# Security: Run as non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules

USER nextjs

EXPOSE 3002

HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 \
  CMD curl -f http://localhost:3002/ || exit 1

CMD ["npm", "start", "--", "-p", "3002"]
