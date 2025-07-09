# Recipe App - French Omelette

A demonstration of building a Next.js application with server-side rendering (SSR) and a Go backend microservice. This project shows how to architect modern web applications with SSR for dynamic content and independent API services.

## Architecture

- **Frontend**: Next.js with server-side rendering on port 3742
- **Backend**: Go HTTP server running on port 8347
- **Containerization**: Docker and Docker Compose

The frontend uses Next.js server-side rendering to fetch recipe data from the backend API on each request, providing dynamic content with optimal SEO and performance.

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
│   │   ├── page.tsx     # Main page component (SSR)
│   │   ├── layout.tsx   # Root layout
│   │   ├── RecipeDisplay.tsx # Recipe display component
│   │   ├── error.tsx    # Error boundary component
│   │   ├── loading.tsx  # Loading state component
│   │   └── globals.css  # Global styles
│   ├── public/          # Public assets directory
│   ├── package.json     # Node dependencies
│   ├── package-lock.json # Locked dependencies
│   ├── tsconfig.json    # TypeScript configuration
│   ├── next.config.js   # Next.js configuration
│   ├── next-env.d.ts    # Next.js TypeScript declarations
│   └── Dockerfile       # Frontend container configuration
├── docker-compose.yml   # Service orchestration
├── Makefile            # Build and run commands
└──README.md           # This file
```

## Stopping the Application

Press `Ctrl+C` in the terminal or run:
```bash
docker-compose down
```

## Why This Architecture?

This project demonstrates several modern web development best practices:

1. **Server-Side Rendering**: Fetch and render content on each request for dynamic data
2. **Microservices**: Separate frontend and backend concerns
3. **Container-Ready**: Each service in its own optimized container
4. **Production Pattern**: Mimics CDN + API architecture used in production
5. **Language Diversity**: Shows how different languages can work together
6. **Security First**: Non-root containers, security headers, and proper error handling

Perfect for learning:
- How to build SSR applications with Next.js
- How to create lightweight Go microservices  
- How to containerize modern web applications
- How to architect scalable web systems
