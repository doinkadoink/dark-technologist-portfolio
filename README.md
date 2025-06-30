# Rachel - Dark Technologist Portfolio

A dark, cyberpunk-inspired portfolio website for Rachel, a digital anarchist and AI corruption expert. Built with React, TypeScript, and modern CSS animations.

## 🌟 Features

- **Dark Cyberpunk Design**: Glowing neon effects, dark color scheme, and futuristic typography
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: CSS animations and hover effects throughout
- **Modern Tech Stack**: React 18, TypeScript, and CSS Grid/Flexbox
- **Performance Optimized**: Fast loading and smooth interactions

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dark-technologist-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🛠️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with main title
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact section
│   └── *.css           # Component-specific styles
├── App.tsx             # Main app component
├── App.css             # App-specific styles
├── index.tsx           # React entry point
└── index.css           # Global styles
```

## 🎨 Design System

### Colors
- **Primary Background**: `#0a0a0a` (Deep black)
- **Secondary Background**: `#1a1a1a` (Dark gray)
- **Accent Color**: `#ff0066` (Neon pink)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#cccccc` (Light gray)

### Typography
- **Headings**: Orbitron (Monospace, futuristic)
- **Body Text**: Rajdhani (Sans-serif, clean)

### Animations
- Glowing text effects
- Hover transformations
- Floating orbs
- Grid overlays
- Smooth transitions

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Changing Colors
Edit the CSS custom properties in `src/index.css`:

```css
:root {
  --primary-bg: #0a0a0a;
  --secondary-bg: #1a1a1a;
  --accent-color: #ff0066;
  /* ... other variables */
}
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Add corresponding CSS file
3. Import and add to `App.tsx`
4. Update navigation in `Header.tsx`

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure custom domain if needed

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect and deploy the React app

### GitHub Pages
1. Add `"homepage": "https://username.github.io/repo-name"` to `package.json`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Run: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

For questions or collaboration opportunities:
- **Email**: rachel@darktech.com
- **LinkedIn**: [Rachel Dark Tech](https://linkedin.com/in/rachel-darktech)
- **Discord**: [Dark Tech Underground](https://discord.gg/darktech)

---

*Built with AI-powered rebellion and dark passion.* 