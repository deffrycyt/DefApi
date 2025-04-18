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
        background-color: #f9fafb;
        font-family: ${inter.className};
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }

      main {
        animation: fadeIn 1.5s ease-in-out;
      }

      @keyframes fadeIn {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .swagger-ui {
        background-color: #ffffff;
        border-radius: 12px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        padding: 30px;
        margin: 30px auto;
        max-width: 90%;
        transition: all 0.5s ease;
      }

      .swagger-ui .info .title {
        font-size: 36px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 15px;
        background: linear-gradient(to right, #00b4db, #0083b0);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradientMove 6s infinite linear;
        background-size: 200% 200%;
      }

      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      .swagger-ui .opblock {
        border-radius: 10px;
        margin-bottom: 20px;
        transition: transform 0.3s ease;
      }

      .swagger-ui .opblock:hover {
        transform: scale(1.01);
        border-color: #a0aec0;
      }

      .swagger-ui .opblock-summary-method {
        border-radius: 6px;
        padding: 6px 10px;
        font-weight: bold;
      }

      .swagger-ui .model-box, .swagger-ui .parameters-col_description {
        font-size: 14px;
        color: #444;
      }

      footer {
        background-color: #edf2f7;
        padding: 20px;
        text-align: center;
        font-size: 14px;
        color: #4a5568;
        margin-top: 40px;
        border-top: 1px solid #e2e8f0;
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