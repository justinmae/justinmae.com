import { favicons } from 'favicons';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// SVG for the favicon: black background, white text
const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="100" ry="100" fill="#000000"/>
  <text x="256" y="344" font-family="Verdana, Arial, sans-serif" font-size="250" font-weight="bold" text-anchor="middle" fill="#ffffff">JM</text>
</svg>
`;

// Write the SVG temporarily
fs.writeFileSync('jm-logo.svg', svgContent);

// Favicon configuration
const configuration = {
  path: '/icons', // Where icons will be served
  appName: 'Justin Mae | Building AI',
  appShortName: 'Justin Mae',
  appDescription: 'Personal portfolio of Justin Mae',
  background: '#000000',
  theme_color: '#000000',
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: false,
    favicons: true,
    windows: false,
    yandex: false,
  }
};

(async () => {
  try {
    const response = await favicons('jm-logo.svg', configuration);

    // Create a public directory if it doesn’t exist
    if (!fs.existsSync('public')) {
      fs.mkdirSync('public');
    }

    // Write all generated icons
    response.images.forEach(image => {
      fs.writeFileSync(path.join('public', image.name), image.contents);
    });

    // Ensure favicon.ico is saved
    const faviconFile = response.images.find(img => img.name === 'favicon.ico');
    if (faviconFile) {
      fs.writeFileSync(path.join('public', 'favicon.ico'), faviconFile.contents);
      console.log('Successfully created favicon.ico');
    }

    // Clean up temporary SVG
    fs.unlinkSync('jm-logo.svg');

    console.log('Favicon generation complete!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
})();