// scripts/generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { writeFileSync } = require('fs');
const { resolve } = require('path');

// list your routes here
const links = [
  { url: '/',        changefreq: 'weekly',  priority: 1.0 },
  { url: '/projects',changefreq: 'monthly', priority: 0.8 },
];

async function buildSitemap() {
  // create the stream
  const sitemapStream = new SitemapStream({
    hostname: 'https://novruzoff.github.io'
  });

  // write each link
  links.forEach(link => sitemapStream.write(link));

  // signal that you’re done
  sitemapStream.end();

  // wait for the XML to be generated
  const xml = await streamToPromise(sitemapStream);

  // write it into public/sitemap.xml
  writeFileSync(
    resolve(__dirname, '../public/sitemap.xml'),
    xml.toString()
  );

  console.log('sitemap.xml written to public/');
}

buildSitemap().catch(err => {
  console.error('Error generating sitemap:', err);
  process.exit(1);
});
