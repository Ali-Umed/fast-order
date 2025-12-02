
import { Jimp } from 'jimp';
import path from 'path';

const INPUT_IMAGE = '/Users/ali/Desktop/projects/react/fast-order/public/2821801.png';
const OUTPUT_DIR = '/Users/ali/Desktop/projects/react/fast-order/public';

async function processIcon() {
  try {
    console.log('Reading input image...');
    const input = await Jimp.read(INPUT_IMAGE);
    
    // Create a new 512x512 image with white background
    // 0xFFFFFFFF is white (R=255, G=255, B=255, A=255)
    const background = new Jimp({ width: 512, height: 512, color: 0xFFFFFFFF });
    
    // Resize input to fit nicely within the 512x512 box (e.g., 80% size)
    // This ensures the icon isn't touching the edges
    const iconSize = 400;
    input.contain({ w: iconSize, h: iconSize });
    
    // Composite the input icon onto the white background, centered
    const x = (512 - iconSize) / 2;
    const y = (512 - iconSize) / 2;
    
    background.composite(input, x, y);
    
    console.log('Saving icon-512.png...');
    await background.write(path.join(OUTPUT_DIR, 'icon-512.png'));
    
    // Resize for 192x192
    // We clone the 512 version to keep the white background and padding
    const smallIcon = background.clone();
    smallIcon.resize({ w: 192, h: 192 });
    
    console.log('Saving icon-192.png...');
    await smallIcon.write(path.join(OUTPUT_DIR, 'icon-192.png'));
    
    console.log('Done! Icons created with white background.');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

processIcon();
