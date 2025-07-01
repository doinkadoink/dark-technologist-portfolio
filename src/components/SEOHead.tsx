import React from 'react';

const SEOHead: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rachel",
    "jobTitle": "Dark Technologist & AI Punk",
    "description": "Digital anarchist living at the intersection of chaos and technology. AI corruption expert, game world destroyer, and automation overlord.",
    "url": "https://your-domain.com",
    "sameAs": [
      "https://linkedin.com/in/rachel-darktech",
      "https://discord.gg/darktech"
    ],
    "knowsAbout": [
      "AI Corruption",
      "Web Development",
      "React",
      "TypeScript",
      "Fantasy Grounds",
      "Digital Anarchy",
      "Automation",
      "Dark Arts"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Bond University"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Digital Rebellion"
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rachel - Dark Technologist",
    "description": "Digital anarchist living at the intersection of chaos and technology. AI corruption expert, game world destroyer, and automation overlord.",
    "url": "https://your-domain.com",
    "author": {
      "@type": "Person",
      "name": "Rachel"
    },
    "publisher": {
      "@type": "Person",
      "name": "Rachel"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
    </>
  );
};

export default SEOHead; 