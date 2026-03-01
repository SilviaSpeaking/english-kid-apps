import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { dirname, join } from 'path';

const SRC_ASSETS = './assets';
const DEST_ASSETS = './dist/assets';

function copyDir(src, dest) {
  mkdirSync(dest, { recursive: true });
  const entries = readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
      console.log(`Copied: ${srcPath} → ${destPath}`);
    }
  }
}

console.log('Copying assets to dist folder...');
copyDir(SRC_ASSETS, DEST_ASSETS);
console.log('Assets copied successfully!');
