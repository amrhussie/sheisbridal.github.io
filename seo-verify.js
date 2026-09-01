node seo-verify.js --google=YOUR_GOOGLE_TOKEN --bing=YOUR_BING_TOKENnode seo-verify.js --google=YOUR_GOOGLE_TOKEN --bing=YOUR_BING_TOKENconst fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname);
const indexPath = path.join(root, 'index.html');
const html = fs.readFileSync(indexPath, 'utf8');

const args = process.argv.slice(2);
const options = {};
args.forEach((arg) => {
  const [key, value] = arg.split('=');
  if (!key || value === undefined) return;
  options[key.replace(/^--/, '')] = value;
});

function setMeta(htmlContent, name, content) {
  const metaTag = `<meta name="${name}" content="${content}">`;
  const regex = new RegExp(`<meta\\s+name=["']${name}["'][^>]*>`, 'i');
  if (regex.test(htmlContent)) {
    return htmlContent.replace(regex, metaTag);
  }
  const titleRegex = /<title>[\s\S]*?<\/title>/i;
  if (titleRegex.test(htmlContent)) {
    return htmlContent.replace(titleRegex, (match) => `${match}\n  ${metaTag}`);
  }
  return htmlContent.replace('<head>', `<head>\n  ${metaTag}`);
}

function usage() {
  console.log('Usage: node seo-verify.js [--google=GOOGLE_TOKEN] [--bing=BING_TOKEN]');
  console.log('Example: node seo-verify.js --google=abc123 --bing=def456');
}

if (!options.google && !options.bing) {
  usage();
  process.exit(0);
}

let updatedHtml = html;
if (options.google) {
  updatedHtml = setMeta(updatedHtml, 'google-site-verification', options.google);
  console.log(`Added Google Search Console verification meta tag.`);
}
if (options.bing) {
  updatedHtml = setMeta(updatedHtml, 'msvalidate.01', options.bing);
  console.log(`Added Bing Webmaster Tools verification meta tag.`);
}

fs.writeFileSync(indexPath, updatedHtml, 'utf8');
console.log('index.html updated successfully.');
