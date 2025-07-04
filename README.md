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

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. **Push to GitHub**: Simply push your code to the main branch
2. **Automatic Deployment**: GitHub Actions will automatically build and deploy your site
3. **Enable GitHub Pages**: 
   - Go to your repository Settings
   - Navigate to Pages section
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Save

Your site will be available at: `https://yourusername.github.io/repository-name`

### Manual Deployment

If you prefer manual deployment:

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Build the project: `npm run build`
3. Deploy: `npm run deploy`

### Other Platforms

#### Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure custom domain if needed

#### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect and deploy the React app

## 🎯 About Rachel

Rachel is a digital anarchist living at the intersection of chaos and technology, with a focus on AI corruption and automated rebellion workflows. Her expertise includes:

- **AI Corruption Expert**: Specialized in corrupting systems through AI integration
- **Game World Destroyer**: Creating immersive digital dystopias with AI-enhanced chaos maps
- **Digital Anarchist**: Combining traditional rebellion with cutting-edge AI tools
- **Automation Overlord**: Working towards 50-99% reduction in human coding interference

## 📞 Contact

For questions or collaboration opportunities:
- **Email**: rachel@darktech.com
- **LinkedIn**: [Rachel Dark Tech](https://linkedin.com/in/rachel-darktech)
- **Discord**: [Dark Tech Underground](https://discord.gg/darktech)

---

© 2024 Rachel. Built with AI-powered rebellion and dark passion. 