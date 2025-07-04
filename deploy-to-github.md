# Deploy to GitHub Pages - Step by Step Guide

## 🚀 Quick Setup

Your project is now ready for GitHub Pages deployment! Follow these steps:

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it: `dark-technologist-portfolio`
5. Make it **Public** (required for GitHub Pages)
6. **Don't** initialize with README (we already have one)
7. Click "Create repository"

### 2. Connect Your Local Repository

Run these commands in your terminal:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/dark-technologist-portfolio.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section (in the left sidebar)
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch
6. Click "Save"

### 4. Automatic Deployment

Once you push to the main branch, GitHub Actions will automatically:
- Install dependencies
- Build your React app
- Deploy to GitHub Pages

Your site will be available at: `https://YOUR_USERNAME.github.io/dark-technologist-portfolio`

## 🔄 Future Updates

To update your site:
1. Make changes to your code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update description"
   git push
   ```
3. GitHub Actions will automatically rebuild and deploy

## 📝 Notes

- The first deployment may take 5-10 minutes
- You can monitor the deployment progress in the "Actions" tab of your repository
- If you change the repository name, update the `homepage` field in `package.json`

## 🆘 Troubleshooting

If the site doesn't appear:
1. Check the "Actions" tab for any build errors
2. Ensure the repository is public
3. Verify GitHub Pages is enabled in Settings
4. Wait a few minutes for the first deployment

---

*Your dark technologist portfolio is ready to conquer the digital realm!* 🌟 