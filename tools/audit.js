#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Static Site Analyzer for A2 Compliance
 * Reads built output and generates compliance reports without modifying source files
 */

class SiteAuditor {
  constructor() {
    this.report = {
      timestamp: new Date().toISOString(),
      siteUrl: 'https://doinkadoink.github.io/dark-technologist-portfolio/',
      analysis: {}
    };
  }

  async analyzeSite() {
    console.log('🔍 Starting static site analysis...');
    
    try {
      // Check for build directory first, fallback to root
      const sourcePath = fs.existsSync('build') ? 'build' : '.';
      console.log(`📁 Analyzing source from: ${sourcePath}`);
      
      await this.analyzeHTMLStructure(sourcePath);
      await this.analyzeAccessibility(sourcePath);
      await this.analyzeSEO(sourcePath);
      await this.analyzePerformance(sourcePath);
      await this.analyzeFileNaming(sourcePath);
      
      this.generateReport();
      console.log('✅ Analysis complete! Check tools/audit-report.json');
      
    } catch (error) {
      console.error('❌ Analysis failed:', error.message);
      process.exit(1);
    }
  }

  async analyzeHTMLStructure(sourcePath) {
    console.log('📄 Analyzing HTML structure...');
    
    const htmlFiles = this.findHTMLFiles(sourcePath);
    let totalImages = 0;
    let missingAltText = 0;
    let missingLazyLoading = 0;
    let landmarks = 0;
    let h1Count = 0;
    
    for (const file of htmlFiles) {
      const content = fs.readFileSync(file, 'utf8');
      
      // Count images and check attributes
      const imgRegex = /<img[^>]*>/gi;
      const images = content.match(imgRegex) || [];
      totalImages += images.length;
      
      images.forEach(img => {
        if (!img.includes('alt=')) missingAltText++;
        if (!img.includes('loading="lazy"') && !img.includes('.svg')) missingLazyLoading++;
      });
      
      // Check landmarks and headings
      if (content.includes('<nav')) landmarks++;
      if (content.includes('<main')) landmarks++;
      if (content.includes('<header')) landmarks++;
      if (content.includes('<footer')) landmarks++;
      if (content.includes('<aside')) landmarks++;
      if (content.includes('<section')) landmarks++;
      if (content.includes('<article')) landmarks++;
      
      // Count H1 tags
      const h1Matches = content.match(/<h1[^>]*>/gi) || [];
      h1Count += h1Matches.length;
    }
    
    this.report.analysis.htmlStructure = {
      totalImages,
      missingAltText,
      missingLazyLoading,
      landmarks,
      h1Count,
      singleH1: h1Count === 1,
      htmlFiles: htmlFiles.length
    };
  }

  async analyzeAccessibility(sourcePath) {
    console.log('♿ Analyzing accessibility features...');
    
    const htmlFiles = this.findHTMLFiles(sourcePath);
    let ariaLabels = 0;
    let semanticTags = 0;
    let formLabels = 0;
    
    for (const file of htmlFiles) {
      const content = fs.readFileSync(file, 'utf8');
      
      // Count ARIA attributes
      const ariaMatches = content.match(/aria-[^=]+=/gi) || [];
      ariaLabels += ariaMatches.length;
      
      // Count semantic HTML tags
      const semanticMatches = content.match(/<(nav|main|header|footer|aside|section|article|time|mark|figure|figcaption)[^>]*>/gi) || [];
      semanticTags += semanticMatches.length;
      
      // Count form labels
      const labelMatches = content.match(/<label[^>]*>/gi) || [];
      formLabels += labelMatches.length;
    }
    
    this.report.analysis.accessibility = {
      ariaLabels,
      semanticTags,
      formLabels,
      landmarksPresent: this.report.analysis.htmlStructure.landmarks > 0
    };
  }

  async analyzeSEO(sourcePath) {
    console.log('🔍 Analyzing SEO elements...');
    
    const htmlFiles = this.findHTMLFiles(sourcePath);
    let hasTitle = false;
    let hasMetaDescription = false;
    let hasCanonical = false;
    let hasOpenGraph = false;
    let hasRobots = false;
    let metaDescriptionLength = 0;
    
    for (const file of htmlFiles) {
      const content = fs.readFileSync(file, 'utf8');
      
      if (content.includes('<title>')) hasTitle = true;
      if (content.includes('name="description"')) hasMetaDescription = true;
      if (content.includes('rel="canonical"')) hasCanonical = true;
      if (content.includes('property="og:')) hasOpenGraph = true;
      if (content.includes('name="robots"')) hasRobots = true;
      
      // Extract meta description length
      const descMatch = content.match(/name="description"[^>]*content="([^"]*)"/i);
      if (descMatch) {
        metaDescriptionLength = descMatch[1].length;
      }
    }
    
    this.report.analysis.seo = {
      hasTitle,
      hasMetaDescription,
      hasCanonical,
      hasOpenGraph,
      hasRobots,
      metaDescriptionLength,
      metaDescriptionOptimal: metaDescriptionLength >= 120 && metaDescriptionLength <= 160
    };
  }

  async analyzePerformance(sourcePath) {
    console.log('⚡ Analyzing performance indicators...');
    
    const htmlFiles = this.findHTMLFiles(sourcePath);
    let inlineStyles = 0;
    let inlineScripts = 0;
    let linkedCSS = 0;
    let linkedJS = 0;
    
    for (const file of htmlFiles) {
      const content = fs.readFileSync(file, 'utf8');
      
      // Count inline styles and scripts
      const styleMatches = content.match(/<style[^>]*>/gi) || [];
      inlineStyles += styleMatches.length;
      
      const scriptMatches = content.match(/<script[^>]*>/gi) || [];
      inlineScripts += scriptMatches.length;
      
      // Count linked resources
      const cssMatches = content.match(/<link[^>]*rel="stylesheet"[^>]*>/gi) || [];
      linkedCSS += cssMatches.length;
      
      const jsMatches = content.match(/<script[^>]*src=/gi) || [];
      linkedJS += jsMatches.length;
    }
    
    this.report.analysis.performance = {
      inlineStyles,
      inlineScripts,
      linkedCSS,
      linkedJS,
      separationOfConcerns: linkedCSS > 0 && linkedJS > 0,
      inlineStyleRatio: inlineStyles / Math.max(htmlFiles.length, 1)
    };
  }

  async analyzeFileNaming(sourcePath) {
    console.log('📝 Analyzing file naming conventions...');
    
    const violations = [];
    const allowedExtensions = ['.html', '.css', '.js', '.tsx', '.ts', '.jsx', '.json', '.md', '.txt', '.svg', '.png', '.jpg', '.jpeg', '.gif', '.ico', '.xml'];
    
    const checkDirectory = (dirPath) => {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          checkDirectory(fullPath);
        } else {
          const ext = path.extname(item).toLowerCase();
          const baseName = path.basename(item, ext);
          
          // Check for naming violations
          if (baseName.includes(' ')) {
            violations.push({
              file: fullPath,
              issue: 'Contains spaces',
              recommendation: 'Use hyphens or underscores instead of spaces'
            });
          }
          
          if (baseName.includes('_') && baseName.includes('-')) {
            violations.push({
              file: fullPath,
              issue: 'Mixed separators',
              recommendation: 'Use consistent separator (either hyphens or underscores)'
            });
          }
          
          if (!allowedExtensions.includes(ext) && !item.startsWith('.')) {
            violations.push({
              file: fullPath,
              issue: 'Unusual file extension',
              recommendation: 'Verify file type is appropriate for web'
            });
          }
        }
      }
    };
    
    checkDirectory(sourcePath);
    
    this.report.analysis.fileNaming = {
      violations,
      totalViolations: violations.length,
      recommendations: violations.map(v => v.recommendation)
    };
  }

  findHTMLFiles(sourcePath) {
    const htmlFiles = [];
    
    const findHTML = (dirPath) => {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          findHTML(fullPath);
        } else if (item.endsWith('.html')) {
          htmlFiles.push(fullPath);
        }
      }
    };
    
    findHTML(sourcePath);
    return htmlFiles;
  }

  generateReport() {
    const reportPath = path.join(__dirname, 'audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.report, null, 2));
    
    // Generate summary markdown
    const summaryPath = path.join(__dirname, 'audit-summary.md');
    const summary = this.generateSummaryMarkdown();
    fs.writeFileSync(summaryPath, summary);
  }

  generateSummaryMarkdown() {
    const analysis = this.report.analysis;
    
    return `# Static Site Analysis Summary

Generated on: ${this.report.timestamp}
Site URL: ${this.report.siteUrl}

## HTML Structure
- **Total Images**: ${analysis.htmlStructure.totalImages}
- **Missing Alt Text**: ${analysis.htmlStructure.missingAltText}
- **Missing Lazy Loading**: ${analysis.htmlStructure.missingLazyLoading}
- **Landmarks Present**: ${analysis.htmlStructure.landmarks}
- **H1 Tags**: ${analysis.htmlStructure.h1Count} ${analysis.htmlStructure.singleH1 ? '✅' : '❌'}
- **HTML Files Analyzed**: ${analysis.htmlStructure.htmlFiles}

## Accessibility
- **ARIA Labels**: ${analysis.accessibility.ariaLabels}
- **Semantic Tags**: ${analysis.accessibility.semanticTags}
- **Form Labels**: ${analysis.accessibility.formLabels}
- **Landmarks Present**: ${analysis.accessibility.landmarksPresent ? '✅' : '❌'}

## SEO
- **Title Tag**: ${analysis.seo.hasTitle ? '✅' : '❌'}
- **Meta Description**: ${analysis.seo.hasMetaDescription ? '✅' : '❌'}
- **Canonical URL**: ${analysis.seo.hasCanonical ? '✅' : '❌'}
- **Open Graph**: ${analysis.seo.hasOpenGraph ? '✅' : '❌'}
- **Robots Meta**: ${analysis.seo.hasRobots ? '✅' : '❌'}
- **Meta Description Length**: ${analysis.seo.metaDescriptionLength} characters ${analysis.seo.metaDescriptionOptimal ? '✅' : '❌'}

## Performance
- **Inline Styles**: ${analysis.performance.inlineStyles}
- **Inline Scripts**: ${analysis.performance.inlineScripts}
- **Linked CSS**: ${analysis.performance.linkedCSS}
- **Linked JS**: ${analysis.performance.linkedJS}
- **Separation of Concerns**: ${analysis.performance.separationOfConcerns ? '✅' : '❌'}

## File Naming
- **Total Violations**: ${analysis.fileNaming.totalViolations}
- **Issues Found**: ${analysis.fileNaming.violations.map(v => `${v.file}: ${v.issue}`).join('\n- ')}

## Recommendations
${analysis.fileNaming.recommendations.map(rec => `- ${rec}`).join('\n')}

---
*This report was generated automatically by tools/audit.js*
`;
  }
}

// Run the analysis
if (require.main === module) {
  const auditor = new SiteAuditor();
  auditor.analyzeSite();
}

module.exports = SiteAuditor; 