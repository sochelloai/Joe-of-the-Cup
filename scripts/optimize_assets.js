const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Paths
const LOGO_DIR = 'C:\\Users\\soche\\OneDrive\\Desktop\\Joe of the Cup\\Logo';
const PACKAGING_DIR = 'C:\\Users\\soche\\OneDrive\\Desktop\\Joe of the Cup\\Packaging renders';
const CHARACTERS_DIR = 'C:\\Users\\soche\\OneDrive\\Desktop\\Joe of the Cup\\Character Images';

const PUBLIC_BRAND_DIR = path.join(__dirname, '..', 'public', 'brand');
const PUBLIC_PRODUCTS_DIR = path.join(__dirname, '..', 'public', 'products');
const PUBLIC_CHARACTERS_DIR = path.join(__dirname, '..', 'public', 'characters');
const PUBLIC_FAVICON_PATH = path.join(__dirname, '..', 'public', 'favicon.ico');
const APP_FAVICON_PATH = path.join(__dirname, '..', 'src', 'app', 'favicon.ico');

async function processLogo() {
  console.log('--- Processing Logo ---');
  const logoSrc = path.join(LOGO_DIR, 'Joe of the Cup logo.png');
  
  if (!fs.existsSync(logoSrc)) {
    console.error(`Logo not found at: ${logoSrc}`);
    return;
  }

  // 1. Save optimized logo for header
  console.log('Optimizing logo for header...');
  await sharp(logoSrc)
    .resize({ width: 250 }) // Resizes width to 250px, maintains aspect ratio
    .png({ quality: 85, compressionLevel: 8 })
    .toFile(path.join(PUBLIC_BRAND_DIR, 'logo.png'));
  console.log('Saved public/brand/logo.png');

  // 2. Save favicon (32x32 png)
  console.log('Creating favicons...');
  await sharp(logoSrc)
    .resize({ width: 32, height: 32 })
    .png({ quality: 90 })
    .toFile(PUBLIC_FAVICON_PATH);
  
  // Also copy/save to app/favicon.ico
  if (fs.existsSync(APP_FAVICON_PATH)) {
    fs.unlinkSync(APP_FAVICON_PATH);
  }
  await sharp(logoSrc)
    .resize({ width: 32, height: 32 })
    .png()
    .toFile(APP_FAVICON_PATH);

  console.log('Saved favicon.ico to public/ and src/app/');
}

async function processPackaging() {
  console.log('--- Processing Packaging Renders ---');
  const files = [
    { src: 'Damn Daniel.png', dest: 'damn_daniel.png' },
    { src: 'Dapper Dan.png', dest: 'dapper_dan.png' },
    { src: 'Drop Dead Fred.png', dest: 'drop_dead_fred.png' },
    { src: 'Keurig pod.png', dest: 'keurig_pod.png' }
  ];

  for (const file of files) {
    const srcPath = path.join(PACKAGING_DIR, file.src);
    const destPath = path.join(PUBLIC_PRODUCTS_DIR, file.dest);

    if (fs.existsSync(srcPath)) {
      console.log(`Resizing packaging: ${file.src} -> ${file.dest}`);
      await sharp(srcPath)
        .resize({ width: 500 }) // Web friendly width
        .png({ quality: 80, compressionLevel: 7 })
        .toFile(destPath);
    } else {
      console.error(`Packaging render not found: ${srcPath}`);
    }
  }
}

async function processCharacters() {
  console.log('--- Processing Character Images ---');
  if (!fs.existsSync(CHARACTERS_DIR)) {
    console.error(`Characters directory not found: ${CHARACTERS_DIR}`);
    return;
  }

  const files = fs.readdirSync(CHARACTERS_DIR);
  for (const file of files) {
    if (file.toLowerCase().endsWith('.png')) {
      const srcPath = path.join(CHARACTERS_DIR, file);
      const destPath = path.join(PUBLIC_CHARACTERS_DIR, file);

      console.log(`Resizing character: ${file}`);
      await sharp(srcPath)
        .resize({ width: 400 }) // Web friendly size for floating cards
        .png({ quality: 80, compressionLevel: 7 })
        .toFile(destPath);
    }
  }
}

async function run() {
  try {
    await processLogo();
    await processPackaging();
    await processCharacters();
    console.log('All image assets processed successfully!');
  } catch (error) {
    console.error('Error processing assets:', error);
  }
}

run();
