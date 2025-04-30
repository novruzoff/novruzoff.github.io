// scripts/generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { writeFileSync } = require('fs');
const { resolve } = require('path');

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
];

async function buildSitemap() {
  const sitemapStream = new SitemapStream({
    hostname: 'https://novruzoff.github.io'
  });

  // collect XML
  const xml = await streamToPromise(
    sitemapStream.write(links).end()
  );

  // write to public/
  writeFileSync(
    resolve(__dirname, '../public/sitemap.xml'),
    xml.toString()
  );
  console.log('sitemap.xml written to public/');
}

buildSitemap().catch(console.error);
