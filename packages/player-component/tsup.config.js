/**
 * Copyright 2023 Design Barn Inc.
 */

import { defineConfig } from 'tsup';

import pkg from './package.json';

export default defineConfig({
  bundle: true,
  clean: true,
  dts: true,
  sourcemap: true,
  minify: true,
  treeshake: true,
  module: 'ESNext',
  format: ['esm', 'umd'],
  tsconfig: 'tsconfig.json',
  outDir: 'dist',
  platform: 'browser',
  target: ['ESNext'],
  entry: ['./src/*.ts'],
  globalName: 'DotLottiePlayer',
  noExternal: Object.keys(pkg.dependencies ?? []),
});
