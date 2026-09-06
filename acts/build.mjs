import { cp, mkdir, rm } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });

for (const file of ['index.html','styles.css','app.js','config.js','card-store.js']) {
  await cp(file, `dist/${file}`);
}

await cp('assets', 'dist/assets', { recursive: true });

console.log('ACTS NEWSLETTER 01 standalone build complete');
