# 🎯 CodeMentor AI - Landing Page

Modern, responsive landing page for **CodeMentor AI** - an AI-powered training assistant for competitive programmers.

![Angular](https://img.shields.io/badge/Angular-19.1-red)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- 🎨 **Modern Dark Theme** - Clean, professional design with purple/cyan gradients
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ⚡ **Smooth Animations** - Fade-in, slide-up, and hover effects throughout
- 🔥 **7 Section Landing Page**:
  - Hero with CTA and dashboard mockup
  - Problem section highlighting training issues
  - Features showcase
  - How it works (4-step process)
  - Benefits with stats
  - Pricing (Free, Pro, Team)
  - CTA and footer
- 🚀 **Production Ready** - Optimized for deployment

## 🛠️ Tech Stack

- **Angular 19** - Standalone components
- **TypeScript 5.7**
- **CSS3** - Custom animations and responsive design
- **Google Fonts** - Inter font family

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Angular CLI 19+

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/codementor-ai.git
cd codementor-ai
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm start
```

Navigate to `http://localhost:4200/`

## 📦 Building for Production

Build the project:
```bash
npm run build:prod
```

Build output will be in `dist/codementor-ai/browser/`

## 🌐 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `codementor-ai`
2. **DO NOT** initialize it with README, .gitignore, or license

### Step 2: Initialize Git and Push

```bash
# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: CodeMentor AI landing page"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/codementor-ai.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Deploy to GitHub Pages

#### Option A: Using npm script (Recommended)

1. **Install deployment tool**:
```bash
npm install --save-dev angular-cli-ghpages
```

2. **Deploy**:
```bash
npm run deploy
```

This will:
- Build the project for production
- Deploy to `gh-pages` branch
- Your site will be available at: `https://YOUR_USERNAME.github.io/codementor-ai/`

#### Option B: Manual deployment

1. **Build the project**:
```bash
npm run build:prod
```

2. **Install gh-pages globally**:
```bash
npm install -g angular-cli-ghpages
```

3. **Deploy**:
```bash
npx angular-cli-ghpages --dir=dist/codementor-ai/browser
```

### Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select branch: `gh-pages`
4. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/codementor-ai/`

### ⚠️ Important Notes

- If your repository name is different from `codementor-ai`, update the `--base-href` in `package.json`:
  ```json
  "deploy": "ng build --configuration production --base-href /YOUR_REPO_NAME/ && npx angular-cli-ghpages --dir=dist/codementor-ai/browser"
  ```

- For custom domain, add a `CNAME` file in the `public` folder with your domain name

## 📁 Project Structure

```
codementor-ai/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── hero/           # Hero section
│   │   │   ├── problem/        # Problem section
│   │   │   ├── features/       # Features section
│   │   │   ├── how-it-works/   # How it works
│   │   │   ├── benefits/       # Benefits section
│   │   │   ├── pricing/        # Pricing section
│   │   │   └── cta/            # CTA & Footer
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.config.ts
│   ├── styles.css              # Global styles
│   └── index.html
├── angular.json
├── package.json
└── README.md
```

## 🎨 Customization

### Colors

Update colors in component CSS files or `src/styles.css`:
- Primary: `#8b5cf6` (Purple)
- Secondary: `#06b6d4` (Cyan)
- Background: `#0f172a` (Dark Blue)

### Content

Edit component HTML files to change text, stats, features, etc.

## 📝 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run build:prod` - Build with base-href for GitHub Pages
- `npm run deploy` - Build and deploy to GitHub Pages
- `npm test` - Run unit tests

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

This project is licensed under the MIT License.

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

Built with ❤️ using Angular 19
