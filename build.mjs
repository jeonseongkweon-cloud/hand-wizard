import { cp, mkdir, rm } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('src', 'dist', { recursive: true });

// GLOBAL SPARK promotional images are kept in the repository-level assets/spark library.
// Copy them into the static build without moving or renaming the source files.
await mkdir('dist/assets/spark', { recursive: true });
await cp('assets/spark', 'dist/assets/spark', { recursive: true });

// ACTS NEWSLETTER is distributed through the same deployed site as A01,
// while remaining isolated under /acts so existing academy pages are untouched.
await mkdir('dist/acts', { recursive: true });
await cp('acts', 'dist/acts', { recursive: true });

console.log('A01 + ACTS static build complete');
