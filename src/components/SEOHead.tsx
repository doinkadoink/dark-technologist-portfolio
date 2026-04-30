import React from 'react';

const SEOHead: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rachel Frappell",
    "jobTitle": "Creative Arts Student (Unreal Engine Environments)",
    "description": "Emerging creative arts practitioner focused on Unreal Engine environments, photogrammetry workflows, and virtual production.",
    "url": "https://doink.github.io/dark-technologist-portfolio/",
    "knowsAbout": [
      "Unreal Engine",
      "Virtual Production",
      "Photogrammetry",
      "Digital Locations",
      "3D Modelling",
      "Maya",
      "Sequencer",
      "Scene Lighting",
      "Web Design",
      "UI/UX"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Bond University"
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rachel Frappell - Portfolio",
    "description": "Portfolio featuring Unreal Engine environments, photogrammetry workflows, virtual production, and digital design.",
    "url": "https://doink.github.io/dark-technologist-portfolio/",
    "author": {
      "@type": "Person",
      "name": "Rachel Frappell"
    },
    "publisher": {
      "@type": "Person",
      "name": "Rachel Frappell"
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