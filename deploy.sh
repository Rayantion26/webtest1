#!/bin/bash
# Deploy Script for webtest1

echo "=== Deploying to GitHub Pages ==="
cd /home/aaron/.picoclaw/workspace/webtest1

echo "Adding all changes..."
git add -A

echo "Committing..."
git commit -m "✨ Updated with language dropdown, smooth animations, and enhanced UX

Features:
- Language dropdown with flags (USA 🇺🇸, Taiwan 🇹🇼, Indonesia 🇮🇩)
- Smooth scroll animations for header text
- Hover underline effects on nav links  
- Clicking web人 logo smooth scrolls to hero
- Checkmark animation when selecting language
- Enhanced CSS animations (fadeIn, slideUp, bounceIn)" || echo "No changes to commit"

echo "Pushing to GitHub..."
git push origin main

echo "=== Deploy Complete! ==="
echo "Your updated site will be live at: https://rayantion26.github.io/webtest1"
echo ""
echo "To enable GitHub Pages:"
echo "  1. Go to: https://github.com/Rayantion26/webtest1"
echo "  2. Click Settings > Pages"
echo "  3. Under 'Branch', select 'main' and folder '/ (root)'"
echo "  4. Click Save"