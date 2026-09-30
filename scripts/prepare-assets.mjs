// Copies original source-site images (downloaded to _source/img) and design-pack
// assets into src/assets so Astro can optimise them. Filenames are kept as on the
// live site so every asset can be traced back to its source record.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..');
const src = path.join(root, '_source', 'img');
const pack = path.join(root, 'Nebenkams_Design_Pack', 'assets');
const out = path.join(root, 'src', 'assets');

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const f of fs.readdirSync(from)) fs.copyFileSync(path.join(from, f), path.join(to, f));
}

for (const dir of ['services', 'projects', 'blog', 'clients', 'testimonials', 'gallery']) {
  copyDir(path.join(src, dir), path.join(out, dir));
}
fs.mkdirSync(path.join(out, 'company'), { recursive: true });
fs.copyFileSync(path.join(src, 'logo', '1565338589.jpg'), path.join(out, 'company', 'who-we-are-1565338589.jpg'));
copyDir(path.join(pack, 'carousel'), path.join(out, 'carousel'));

fs.mkdirSync(path.join(out, 'brand'), { recursive: true });
const logo = path.join(pack, 'brand', 'nebenkams-logo-original.png');
fs.copyFileSync(logo, path.join(out, 'brand', 'nebenkams-logo-original.png'));
// Trim only the transparent padding; artwork pixels are untouched.
await sharp(logo).trim({ threshold: 1 }).png().toFile(path.join(out, 'brand', 'nebenkams-logo-trimmed.png'));
fs.mkdirSync(path.join(root, 'public'), { recursive: true });
fs.copyFileSync(logo, path.join(root, 'public', 'favicon.png'));

console.log('Assets prepared in', out);
