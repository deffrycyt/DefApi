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
    :root {
      --bg: #f9f9f9;
      --text: #1a1a1a;
      --box: #ffffff;
      --border: #e0e0e0;
      --primary: #0057d9;
      --primary-hover: #0041a8;
    }

    [data-theme="dark"] {
      --bg: #1e1e1e;
      --text: #f0f0f0;
      --box: #2a2a2a;
      --border: #444;
      --primary: #3399ff;
      --primary-hover: #227acc;
    }

    body {
      background-color: var(--bg) !important;
      color: var(--text) !important;
      font-family: ${inter.className}, sans-serif;
      transition: background 0.3s, color 0.3s;
    }

    .swagger-ui .topbar {
      background-color: var(--box) !important;
      border-bottom: 1px solid var(--border);
      box-shadow: 0 2px 4px rgba(0,0,0,0.06);
      transition: background 0.3s, border 0.3s;
    }

    .swagger-ui .info .title {
      font-size: 32px;
      font-weight: 600;
      color: var(--text) !important;
      text-transform: uppercase;
    }

    .swagger-ui .opblock {
      border-radius: 12px;
      margin-bottom: 15px;
      border: 1px solid var(--border);
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
      background: var(--box) !important;
      transition: background 0.3s;
    }

    .swagger-ui .opblock-summary,
    .swagger-ui .opblock .opblock-section-header {
      background: var(--box) !important;
      color: var(--text) !important;
    }

    .swagger-ui .btn {
      border-radius: 6px !important;
      background-color: var(--primary) !important;
      color: #fff !important;
      border: none !important;
      transition: background 0.3s;
    }

    .swagger-ui .btn:hover {
      background-color: var(--primary-hover) !important;
    }

    .swagger-ui input,
    .swagger-ui textarea,
    .swagger-ui select {
      border-radius: 6px !important;
      border: 1px solid var(--border) !important;
      padding: 8px !important;
      background-color: var(--box) !important;
      color: var(--text) !important;
    }

    .swagger-ui .model-title {
      font-weight: 600;
      color: var(--text) !important;
    }

    .swagger-ui .response-col_status {
      font-weight: bold;
      color: #2a7c2a !important;
    }

    footer {
      background-color: var(--box);
      padding: 20px;
      text-align: center;
      color: var(--text);
      font-size: 14px;
      border-top: 1px solid var(--border);
      margin-top: 40px;
    }

    #theme-toggle {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      background: var(--primary);
      color: white;
      border: none;
      padding: 8px 14px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      transition: background 0.3s;
    }

    #theme-toggle:hover {
      background: var(--primary-hover);
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