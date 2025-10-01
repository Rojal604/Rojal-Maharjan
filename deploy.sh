#!/bin/bash

# Cinematic 3D Portfolio - Deployment Script
echo "🚀 Starting deployment process..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not initialized. Run 'git init' first."
    exit 1
fi

# Add all files
echo "📁 Adding files to git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "✅ No changes to commit."
else
    # Commit changes
    echo "💾 Committing changes..."
    git commit -m "Deploy: Update portfolio site"
fi

# Push to GitHub
echo "🌐 Pushing to GitHub..."
git push origin main

echo "✅ Deployment complete!"
echo "🔗 Your site will be available at: https://YOUR_USERNAME.github.io/cinematic-3d-portfolio"
echo "⏱️  It may take a few minutes for GitHub Pages to update."
