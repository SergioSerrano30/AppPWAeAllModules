/* import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import * as path from 'path';
import sassDts from 'vite-plugin-sass-dts';
import manifest from "./public/manifest.json"; */
console.log("---->>", manifest);
//FIC: imports configuracion VITE
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';
import type { ManifestOptions, VitePWAOptions } from 'vite-plugin-pwa';
import { VitePWA } from 'vite-plugin-pwa';
import replace from '@rollup/plugin-replace';
import manifest from "./swAutoVite/manifest.json";

import * as path from 'path';
//import optimizer from 'vite-plugin-optimizer';
//import commonjsExternals from 'vite-plugin-commonjs-externals';
//import builtinModules from './utils/builtin-modules';

/* // https://vitejs.dev/config/
export default defineConfig({
  server: {
    //host: true,
    port: 5051,
  },
  preview: {
    port:5000,
  },
  
  css: {
    preprocessorOptions: {
      scss: {
        //additionalData: `@use "@/styles" as common;`,
        importer(...args : any) {
          if (args[0] !== '@/styles') {
            return
          }

          return {
            file: `${path.resolve(__dirname, './src/assets/styles')}`,
          }
        },
      },
    },
  },
  
  
  plugins: [
    react(),
    sassDts({
      enabledMode: ['development', 'production'],
      global: {
        generate: true,
        outFile: path.resolve(__dirname, './src/style.d.ts'),
      },
    }), */

/*      VitePWA({
      manifest,
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      // switch to "true" to enable sw on development
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: 'index.html',
      },
      workbox: { */
        //globPatterns: ['**/*.{js,ts,css,html}', '**/*.{svg,png,jpg,gif}'],
/*       },
    }),
  ],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})  */


//********************* */
//FIC: Version VITE
//********************* */

const pwaOptions: Partial<VitePWAOptions> = {
  mode: 'development',
  base: '/',
  includeAssets: ['favicon.svg'],
  manifest,
  devOptions: {
    enabled: process.env.SW_DEV === 'true',
    /* when using generateSW the PWA plugin will switch to classic */
    type: 'module',
    navigateFallback: 'index.html',
  },
}

/* const commonjsPackages = [
  'electron',
  'electron/main',
  'electron/common',
  'electron/renderer',
  //...builtinModules,
] as const; */

const replaceOptions = { __DATE__: new Date().toISOString() }
const claims = process.env.CLAIMS === 'true'
const reload = process.env.RELOAD_SW === 'true'

if (process.env.SW === 'true') {
  pwaOptions.srcDir = 'src'
  pwaOptions.filename = claims ? 'claims-sw.ts' : 'prompt-sw.ts'
  pwaOptions.strategies = 'injectManifest'
  ;(pwaOptions.manifest as Partial<ManifestOptions>).name = 'PWA Inject Manifest'
  ;(pwaOptions.manifest as Partial<ManifestOptions>).short_name = 'PWA Inject'
}

if (claims)
  pwaOptions.registerType = 'autoUpdate'

if (reload) {
  // @ts-expect-error just ignore
  replaceOptions.__RELOAD_SW__ = 'true'
}




export default defineConfig({
  // base: process.env.BASE_URL || 'https://github.com/',
  build: {
    sourcemap: process.env.SOURCE_MAP === 'true',
  },

  plugins: [
    reactRefresh(),
    VitePWA(pwaOptions),
    replace(replaceOptions),
    //commonjsExternals({ externals: commonjsPackages }),
    /* optimizer({
      path: () => ({
          find: /^path$/,
          code: `const path = require('path'); export { path as default }`,
      }),
    }), */
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
