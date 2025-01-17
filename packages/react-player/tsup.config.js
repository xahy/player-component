/**
 * Copyright 2023 Design Barn Inc.
 */

import { defineConfig } from 'tsup';

import pkg from './package.json';

export default defineConfig({
  bundle: true,
  clean: true,
  dts: {
    entry: './src/index.ts',
    resolve: true,
  },
  minify: true,
  sourcemap: true,
  treeshake: true,
  module: 'ESNext',
  format: ['esm'],
  tsconfig: 'tsconfig.json',
  outDir: 'dist',
  platform: 'browser',
  target: ['ESNext'],
  entry: ['./src/*.ts', './src/*.tsx', './src/*.css'],
  noExternal: Object.keys(pkg.dependencies ?? []),
});
