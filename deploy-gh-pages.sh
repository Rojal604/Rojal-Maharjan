#!/bin/bash

# GitHub Pages deployment script
echo "🚀 Starting GitHub Pages deployment..."

# Build the project
echo "📦 Building the project..."
npm run build

# Create or switch to gh-pages branch
echo "🌿 Setting up gh-pages branch..."
git checkout --orphan gh-pages

# Remove all files except out directory
echo "🧹 Cleaning up files..."
git rm -rf .

# Copy contents from out directory to root
echo "📋 Copying build files..."
cp -r out/* .

# Add all files to git
echo "📝 Adding files to git..."
git add .

# Commit the changes
echo "💾 Committing changes..."
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
echo "🚀 Pushing to GitHub Pages..."
git push origin gh-pages

# Switch back to main branch
echo "🔄 Switching back to main branch..."
git checkout main

echo "✅ Deployment complete!"
echo "🌐 Your site should be available at: https://rojal604.github.io/Rojal-Maharjan/"
