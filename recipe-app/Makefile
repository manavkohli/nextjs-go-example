.PHONY: help build up down restart logs clean install-deps dev

# Default target
help:
	@echo "Available commands:"
	@echo "  make build       - Build Docker images"
	@echo "  make up          - Start all services"
	@echo "  make down        - Stop all services"
	@echo "  make restart     - Restart all services"
	@echo "  make logs        - View logs from all services"
	@echo "  make clean       - Remove containers, images, and volumes"
	@echo "  make install-deps - Install frontend dependencies locally"
	@echo "  make dev         - Run services in development mode"

# Build Docker images
build:
	docker-compose build

# Start all services
up:
	docker-compose up -d

# Stop all services
down:
	docker-compose down

# Restart all services
restart: down up

# View logs
logs:
	docker-compose logs -f

# Clean up everything
clean:
	docker-compose down -v --rmi all

# Install frontend dependencies locally (for development)
install-deps:
	cd frontend && npm install

# Run in development mode with live logs
dev:
	docker-compose up --build

# Build and run
run: build up

# Check service health
health:
	@echo "Checking backend health..."
	@curl -s http://localhost:8347/health || echo "Backend is not responding"
	@echo "\nChecking frontend..."
	@curl -s http://localhost:3742 > /dev/null && echo "Frontend is running" || echo "Frontend is not responding"

# Show running containers
ps:
	docker-compose ps