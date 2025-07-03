# Recipe App - French Omelette

A demonstration of building a Next.js static site with a Go backend microservice. This project shows how to architect modern web applications with static site generation (SSG) and independent API services.

📖 **See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed architecture explanation and best practices.**

## Architecture

- **Frontend**: Next.js static export served by nginx on port 3742
- **Backend**: Go HTTP server running on port 8347
- **Containerization**: Docker and Docker Compose

The frontend is built as static HTML/CSS/JS files at build time and served by nginx. This architecture mimics serving static files from a GCS bucket behind a load balancer.

## Prerequisites

- Docker and Docker Compose installed
- Ports 3742 and 8347 available

## Running the Application

1. Start Docker Desktop (ensure Docker daemon is running)

2. Build and run the services using the Makefile:
   ```bash
   cd recipe-app
   make run      # Build and start services
   # OR
   make dev      # Run with live logs
   ```

3. Access the application:
   - Frontend: http://localhost:3742
   - Backend API: http://localhost:8347/api/recipe

## Makefile Commands

- `make help` - Show all available commands
- `make build` - Build Docker images
- `make up` - Start all services
- `make down` - Stop all services
- `make restart` - Restart all services
- `make logs` - View logs from all services
- `make clean` - Remove containers, images, and volumes
- `make dev` - Run services with live logs
- `make health` - Check service health
- `make ps` - Show running containers

## Project Structure

```
recipe-app/
├── backend/
│   ├── main.go          # Go server with recipe API
│   ├── go.mod           # Go module file
│   └── Dockerfile       # Backend container configuration
├── frontend/
│   ├── app/             # Next.js app directory
│   │   ├── page.tsx     # Main page component
│   │   ├── layout.tsx   # Root layout
│   │   └── globals.css  # Global styles
│   ├── nginx.conf       # Nginx configuration
│   ├── package.json     # Node dependencies
│   ├── tsconfig.json    # TypeScript configuration
│   ├── next.config.js   # Next.js configuration
│   ├── next-env.d.ts    # Next.js TypeScript declarations
│   └── Dockerfile       # Frontend container configuration
├── docker-compose.yml   # Service orchestration
├── Makefile            # Build and run commands
├── README.md           # This file
└── ARCHITECTURE.md     # Detailed architecture guide
```

## Stopping the Application

Press `Ctrl+C` in the terminal or run:
```bash
docker-compose down
```

## Why This Architecture?

This project demonstrates several modern web development best practices:

1. **Static Site Generation**: Pre-render pages at build time for optimal performance
2. **Microservices**: Separate frontend and backend concerns
3. **Container-Ready**: Each service in its own optimized container
4. **Production Pattern**: Mimics CDN + API architecture used in production
5. **Language Diversity**: Shows how different languages can work together
6. **Security First**: Non-root containers, security headers, and proper error handling

Perfect for learning:
- How to build static sites with Next.js
- How to create lightweight Go microservices  
- How to containerize modern web applications
- How to architect scalable web systems
