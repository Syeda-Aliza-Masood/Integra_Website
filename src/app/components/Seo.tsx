// components/SEO.tsx - Yeh file banao
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  pageUrl?: string;
}

export default function SEO({ title, description, keywords, ogImage, pageUrl }: SEOProps) {
  const siteTitle = `${title} | Integra Electric & Construction`;
  const defaultImage = 'https://integraelectric.com/hero.jpg';
  const url = pageUrl || 'https://integraelectric.com';

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage || defaultImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Head>
  );
}