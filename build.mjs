import { cp, mkdir, rm } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('src', 'dist', { recursive: true });

// GLOBAL SPARK promotional images are kept in the repository-level assets/spark library.
// Copy them into the static build without moving or renaming the source files.
await mkdir('dist/assets/spark', { recursive: true });
await cp('assets/spark', 'dist/assets/spark', { recursive: true });

console.log('A01 static build complete');
