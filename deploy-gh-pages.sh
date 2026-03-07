#!/bin/bash
# Deploy build to gh-pages branch

cd /home/aaron/.picoclaw/workspace/webtest1

# Create a temporary directory for gh-pages content
rm -rf /tmp/gh-pages-deploy
mkdir -p /tmp/gh-pages-deploy
cp -r build/* /tmp/gh-pages-deploy/

# Initialize git repo in temp directory
cd /tmp/gh-pages-deploy
git init
git checkout -b gh-pages
git add .
git commit -m "Deploy to GitHub Pages - $(date)"

# Push to remote gh-pages branch
git remote add origin https://github.com/Rayantion26/webtest1.git
git push origin gh-pages --force

echo "Deployed successfully to gh-pages branch!"