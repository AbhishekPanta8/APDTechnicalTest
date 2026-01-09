# APD Technical Test Setup Script

Write-Host "APD Weather Forecast Application Setup" -ForegroundColor Green
Write-Host "=======================================" -ForegroundColor Green
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
if (Get-Command node -ErrorAction SilentlyContinue) {
    $nodeVersion = node --version
    Write-Host "Node.js version: $nodeVersion" -ForegroundColor Green
} else {
    Write-Host "Node.js is not installed. Please install Node.js first." -ForegroundColor Red
    exit 1
}

# Check if Redis is running
Write-Host ""
Write-Host "Checking Redis..." -ForegroundColor Yellow
Write-Host "Please ensure Redis server is running on localhost:6379" -ForegroundColor Cyan

# Install backend dependencies
Write-Host ""
Write-Host "Installing backend dependencies..." -ForegroundColor Yellow
Set-Location backend
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "Backend installation failed!" -ForegroundColor Red
    exit 1
}
Set-Location ..

# Install frontend dependencies
Write-Host ""
Write-Host "Installing frontend dependencies..." -ForegroundColor Yellow
Set-Location frontend
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "Frontend installation failed!" -ForegroundColor Red
    exit 1
}
Set-Location ..

Write-Host ""
Write-Host "Setup completed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "To start the application:" -ForegroundColor Cyan
Write-Host "1. Ensure Redis is running: redis-server" -ForegroundColor White
Write-Host "2. Start backend: cd backend && npm start" -ForegroundColor White
Write-Host "3. Start frontend: cd frontend && npm start" -ForegroundColor White

