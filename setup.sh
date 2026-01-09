#!/bin/bash

# APD Technical Test Setup Script

echo "APD Weather Forecast Application Setup"
echo "======================================="
echo ""

# Check if Node.js is installed
echo "Checking Node.js installation..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo "Node.js version: $NODE_VERSION"
else
    echo "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if Redis is running
echo ""
echo "Checking Redis..."
echo "Please ensure Redis server is running on localhost:6379"

# Install backend dependencies
echo ""
echo "Installing backend dependencies..."
cd backend
npm install
if [ $? -ne 0 ]; then
    echo "Backend installation failed!"
    exit 1
fi
cd ..

# Install frontend dependencies
echo ""
echo "Installing frontend dependencies..."
cd frontend
npm install
if [ $? -ne 0 ]; then
    echo "Frontend installation failed!"
    exit 1
fi
cd ..

echo ""
echo "Setup completed successfully!"
echo ""
echo "To start the application:"
echo "1. Ensure Redis is running: redis-server"
echo "2. Start backend: cd backend && npm start"
echo "3. Start frontend: cd frontend && npm start"

