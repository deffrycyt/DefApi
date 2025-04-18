import Head from 'next/head';
import Script from 'next/script';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import swaggerConfig from './swagger-config.json';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const swaggerUIConfig = {
    defaultModelRendering: 'model',
  };

  useEffect(() => {
  const style = document.createElement('style');
  style.innerHTML = `
  body {
    background-color: #f9f9f9 !important;
    font-family: ${inter.className}, sans-serif;
    color: #1a1a1a !important;
  }

  .swagger-ui .topbar {
    background-color: #ffffff !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.06);
    border-bottom: 1px solid #e0e0e0;
  }

  .swagger-ui .info .title {
    font-size: 32px;
    font-weight: 600;
    color: #222 !important;
    text-transform: uppercase;
  }

  .swagger-ui .opblock {
    border-radius: 12px;
    margin-bottom: 15px;
    border: 1px solid #e0e0e0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  }

  .swagger-ui .opblock-summary {
    background: #ffffff !important;
    color: #333 !important;
  }

  .swagger-ui .opblock .opblock-section-header {
    background: #fafafa;
    font-weight: 500;
  }

  .swagger-ui .btn {
    border-radius: 6px !important;
    background-color: #0057d9 !important;
    color: #fff !important;
    border: none !important;
  }

  .swagger-ui .btn:hover {
    background-color: #0041a8 !important;
  }

  .swagger-ui input,
  .swagger-ui textarea,
  .swagger-ui select {
    border-radius: 6px !important;
    border: 1px solid #ccc !important;
    padding: 8px !important;
    background-color: #fff !important;
  }

  .swagger-ui .model-title {
    font-weight: 600;
    color: #444 !important;
  }

  .swagger-ui .response-col_status {
    font-weight: bold;
    color: #2a7c2a !important;
  }

  footer {
    background-color: #ffffff;
    padding: 20px;
    text-align: center;
    color: #888;
    font-size: 14px;
    border-top: 1px solid #e0e0e0;
    margin-top: 40px;
  }
`;
  document.head.appendChild(style);

  const theme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);

  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'theme-toggle';
  toggleBtn.innerText = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    toggleBtn.innerText = next === 'dark' ? 'Light Mode' : 'Dark Mode';
  });

  return () => {
    document.head.removeChild(style);
    toggleBtn.remove();
  };
}, []);

  return (
    <>
      <Head>
        <title>NoXXuS - API Documentation</title>
        <meta name="title" content="NoXXuS - REST API Documentation" />
        <meta name="description" content="NoXXuS is a free, simple REST API modified and customized by Deff. Feel free to use it, but please avoid DDoS attacks." />
        <meta name="keywords" content="REST API, Deff, API by Deff, free API, API documentation, bot wa, open API" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English, Indonesian" />

        <meta property="og:title" content="NoXXuS - REST API Documentation" />
        <meta property="og:description" content="NoXXuS is a free, simple REST API modified and customized by Deff." />
        <meta property="og:url" content="https://apideffrigans.callmeayinn.my.id" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://files.catbox.moe/pv6uhn.jpg" />

        <meta name="twitter:title" content="NoXXuS - REST API Documentation" />
        <meta name="twitter:description" content="NoXXuS is a free, simple REST API modified and customized by Deff." />
        <meta name="twitter:image" content="https://files.catbox.moe/pv6uhn.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebSite",
            "name": "NoXXuS",
            "url": "https://apideffrigans.callmeayinn.my.id",
            "description": "NoXXuS is a free, simple REST API modified and customized by Deff.",
            "sameAs": []
          })
        }}
      />
      <main className={inter.className}>
        <Analytics />
        <SpeedInsights />
        <SwaggerUI
          spec={swaggerConfig}
          {...swaggerUIConfig}
        />
        <footer>
           © {new Date().getFullYear()} Created by <strong>Deff</strong> — All rights reserved.
        </footer>
      </main>
    </>
  );
}