import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, 'dist');
const SITEMAP_PATH = path.resolve(__dirname, 'public', 'sitemap.xml');
const PORT = 54321;
const BASE_URL = `http://localhost:${PORT}`;

async function getRoutes() {
  try {
    const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
    const matches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
    if (!matches) return ['/'];
    
    return matches.map(match => {
      const url = match.replace(/<\/?loc>/g, '');
      // Extract the path from the URL
      const urlObj = new URL(url);
      return urlObj.pathname;
    });
  } catch (error) {
    console.error('Error reading sitemap.xml:', error);
    return ['/'];
  }
}

async function startServer() {
  const app = express();
  
  // Serve static files from dist
  app.use(express.static(DIST_DIR));
  
  // For any other request, serve index.html (SPA fallback)
  app.get('*', (req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });

  return new Promise((resolve) => {
    const server = app.listen(PORT, () => {
      console.log(`Local server started on ${BASE_URL} for prerendering...`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log('Starting prerender process...');
  const routes = await getRoutes();
  console.log(`Found ${routes.length} routes to prerender.`);

  const server = await startServer();
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  for (const route of routes) {
    console.log(`Prerendering ${route} ...`);
    try {
      await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Move canonical URL tag to the very first position inside <head> for strict SEO compliance
      await page.evaluate(() => {
        const canonical = document.head.querySelector('link[rel="canonical"]');
        if (canonical) {
          document.head.insertBefore(canonical, document.head.firstChild);
        }
      });
      
      const html = await page.content();
      
      const filePath = route === '/' 
        ? path.join(DIST_DIR, 'index.html') 
        : path.join(DIST_DIR, route, 'index.html');
      
      const dirPath = path.dirname(filePath);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      
      fs.writeFileSync(filePath, html);
      console.log(`Saved ${route} successfully.`);
    } catch (err) {
      console.error(`Failed to prerender ${route}:`, err);
    }
  }

  await browser.close();
  server.close();
  console.log('Prerendering complete!');
}

prerender().catch(console.error);
