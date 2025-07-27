# Stage 1: Build
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm ci

# Copy rest of the app and build
COPY . .
RUN npm run build

# Stage 2: Serve
FROM node:20-alpine

# Install a lightweight static file server
RUN npm install -g serve

# Copy built files from the builder stage
COPY --from=builder /app/dist /app/dist

# Set working directory
WORKDIR /app/dist

# Expose port
EXPOSE 3000

# Serve the built files
CMD ["serve", "-s", ".", "-l", "3000"]
