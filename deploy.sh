#!/bin/bash
# Deploy Script for webtest1

echo "=== Deploying to GitHub Pages ==="
cd /home/aaron/.picoclaw/workspace/webtest1

echo "Adding deploy workflow changes..."
git add .github/workflows/deploy.yml

echo "Committing..."
git commit -m "Fix npm dependency conflict in GitHub Actions - add --legacy-peer-deps" || echo "No changes to commit"

echo "Pushing to GitHub..."
git push origin main

echo "=== Deploy Complete! ==="
echo "Your updated site will be live at: https://rayantion26.github.io/webtest1"
echo ""
echo "Check deployment status at: https://github.com/Rayantion26/webtest1/actions"