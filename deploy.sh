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

# Push to remote repository
echo "🌐 Pushing to remote repository..."
git push origin main

echo "✅ Deployment complete!"
echo "🔗 Your site has been deployed successfully"
echo "⏱️  It may take a few minutes for the deployment to update."
