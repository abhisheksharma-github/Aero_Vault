import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const srcVault = path.join(root, 'src/data/vault');
const distVault = path.join(root, 'dist/src/data/vault');

if (fs.existsSync(srcVault)) {
  fs.mkdirSync(path.dirname(distVault), { recursive: true });
  fs.cpSync(srcVault, distVault, { recursive: true });
  console.log(`✅ Copied vault data from src/data/vault to dist/src/data/vault`);
} else {
  console.warn(`⚠️ Source vault directory not found: ${srcVault}`);
}
