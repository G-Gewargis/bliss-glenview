import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = '/og-image.jpg', 
  url, 
  canonical 
}) => {
  // Build default title if none provided
  const siteTitle = "Bliss Salon of Glenview";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  
  // Use current URL if none provided
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://blissglenview.com');
  const canonicalUrl = canonical || currentUrl;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph tags */}
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;