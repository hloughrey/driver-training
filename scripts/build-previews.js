import esbuild from 'esbuild';
import { resolve } from 'path';
import fs from 'fs';

// Ensure the admin directory exists
const adminDir = resolve('public/admin');
if (!fs.existsSync(adminDir)) {
  fs.mkdirSync(adminDir, { recursive: true });
}

// Build the preview bundle
esbuild.build({
  entryPoints: ['src/previews/index.ts'],
  bundle: true,
  outfile: 'public/admin/previews.js',
  format: 'iife',
  platform: 'browser',
  target: ['es2015'],
  external: ['react', 'react-dom'],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  minify: true,
}).catch(() => process.exit(1));

console.log('Preview bundle built successfully!');
