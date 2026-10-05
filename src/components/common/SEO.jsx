import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_TITLE = "S.K Associates | Chartered Accountants & Tax Advisory Consultants Noida NCR";
const DEFAULT_DESC = "S.K Associates is a premier Chartered Accountancy & Tax Advisory firm in Noida NCR. We specialize in Income Tax, GST, Statutory Audits, MCA ROC Compliances, and Virtual CFO services across India.";
const BASE_URL = "https://skassociates.in";

const setMetaTag = (attributeName, attributeValue, content) => {
  if (!content) return;
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const setCanonical = (url) => {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
};

const setBreadcrumbJsonLd = (items, currentUrl) => {
  const scriptId = 'breadcrumb-jsonld';
  let script = document.getElementById(scriptId);
  if (!script) {
    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  const breadcrumbsData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": BASE_URL
      },
      ...items.map((crumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 2,
        "name": crumb.name,
        "item": crumb.url ? `${BASE_URL}${crumb.url}` : currentUrl
      }))
    ]
  };

  script.textContent = JSON.stringify(breadcrumbsData);
};

export const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalPath, 
  ogImage = `${BASE_URL}/logo.jpeg`,
  breadcrumbs = []
}) => {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const fullCanonicalUrl = `${BASE_URL}${currentPath === '/' ? '' : currentPath}`;
  const fullTitle = title ? `${title} | S.K Associates` : DEFAULT_TITLE;
  const metaDescription = description || DEFAULT_DESC;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Update Primary Meta
    setMetaTag('name', 'description', metaDescription);
    if (keywords) setMetaTag('name', 'keywords', keywords);

    // 3. Update Canonical URL
    setCanonical(fullCanonicalUrl);

    // 4. Update Open Graph
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', metaDescription);
    setMetaTag('property', 'og:url', fullCanonicalUrl);
    setMetaTag('property', 'og:image', ogImage);

    // 5. Update Twitter
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', metaDescription);
    setMetaTag('name', 'twitter:url', fullCanonicalUrl);
    setMetaTag('name', 'twitter:image', ogImage);

    // 6. Update Breadcrumbs JSON-LD if provided
    if (breadcrumbs.length > 0) {
      setBreadcrumbJsonLd(breadcrumbs, fullCanonicalUrl);
    }
  }, [fullTitle, metaDescription, keywords, fullCanonicalUrl, ogImage, breadcrumbs]);

  return null;
};

export default SEO;
