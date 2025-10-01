# GitHub Pages deployment script
Write-Host "Starting GitHub Pages deployment..." -ForegroundColor Green

# Build the project
Write-Host "Building the project..." -ForegroundColor Yellow
npm run build

# Create or switch to gh-pages branch
Write-Host "Setting up gh-pages branch..." -ForegroundColor Yellow
git checkout --orphan gh-pages

# Remove all files except out directory
Write-Host "Cleaning up files..." -ForegroundColor Yellow
git rm -rf .

# Copy contents from out directory to root
Write-Host "Copying build files..." -ForegroundColor Yellow
Copy-Item -Path "out\*" -Destination "." -Recurse -Force

# Add all files to git
Write-Host "Adding files to git..." -ForegroundColor Yellow
git add .

# Commit the changes
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
Write-Host "Pushing to GitHub Pages..." -ForegroundColor Yellow
git push origin gh-pages

# Switch back to main branch
Write-Host "Switching back to main branch..." -ForegroundColor Yellow
git checkout main

Write-Host "Deployment complete!" -ForegroundColor Green
Write-Host "Your site should be available at: https://rojal604.github.io/Rojal-Maharjan/" -ForegroundColor Cyan
