# Build stage
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package.json and install dependencies with reduced network load
COPY package.json ./
RUN npm install --prefer-offline --no-audit --progress=false

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build and export static files
RUN npm run build

# Production stage - nginx to serve static files
FROM nginx:alpine

# Copy the exported static files to nginx html directory
COPY --from=builder /app/out /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3742

CMD ["nginx", "-g", "daemon off;"]