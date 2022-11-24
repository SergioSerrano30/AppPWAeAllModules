import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
//import * as path from 'path';
import { format, resolve } from 'path';
import manifest from "./manifest.json";
//import { config } from 'process';

/*import react from '@vitejs/plugin-react';
import sassDts from 'vite-plugin-sass-dts';
*/

//FIC: este archivo se utiliza en dos ocasiones
//cuando se ejecuta npm run dev/build.
export default defineConfig(({command, mode}) => {
    
    const env = loadEnv(mode, process.cwd());
    console.log("<<FIC>> Mode:", mode, "<<FIC>> Command:", command);
    interface envConfig {
      port: number
    }
     const defineEnvConfig : envConfig = {
      port: parseInt(env.VITE_PORT) 
    }

    //console.log(env);
    //console.log(env.VITE_PORT);
    //FIC: Para lanzar las variables de entorno
    //correspondientes.
    if (mode === "development") {}
    else if (mode === 'production') {}

    return {    
        server: {
            //host: true,
            //port: defineEnvConfig.port,
            port: parseInt(env.VITE_PORT),
        },
        preview: {
            port: 5000,
        },
        //FIC: cuando se ejecuta en modo "productivo" indicamos que puede
        //tener multiples sitios independientes usando el mismo proyecto VITE.
        build: {
          rollupOptions: {
            input: {
              main: resolve(__dirname, "index.html"),
              //help: resolve(__dirname, "src", "commerce", "index.html")
            }
          },
        /*  //FIC: para cuando se requiere exportar librerias 
          lib:{
            entry: resolve(__dirname, 'lib', 'main.js'),
            name: 'demo',
            fileName:(format)=>`demo.${format}.js`
          } */
        },

        plugins: [
            react(),
            VitePWA({
              manifest,
              registerType: 'autoUpdate',
              includeAssets: ['favicon.svg', "apple-touch-icon.png", "vite.svg"],
              workbox: {
                globPatterns: ["**/*.{js,ts,css,html,ico,png,svg}"],
                //globPatterns: ['**/*.{js,ts,css,html}', '**/*.{svg,png,jpg,gif}'],
              },
            }),
        ],

        resolve: {
            alias: {
              '@': resolve(__dirname, './src'),
            },
        }
    }
});









//console.log("---->>", manifest);
//FIC: imports configuracion VITE
/* import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';
import type { ManifestOptions, VitePWAOptions } from 'vite-plugin-pwa';
import { VitePWA } from 'vite-plugin-pwa';
import replace from '@rollup/plugin-replace';
import manifest from "./swAutoVite/manifest.json";
import * as path from 'path'; */
//import optimizer from 'vite-plugin-optimizer';
//import commonjsExternals from 'vite-plugin-commonjs-externals';
//import builtinModules from './utils/builtin-modules';

 // https://vitejs.dev/config/
/* export default defineConfig({
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
    }),

     VitePWA({
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
/*      },
    }),
  ],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});  

*/


//********************* */
//FIC: Version VITE
//********************* */

/* const pwaOptions: Partial<VitePWAOptions> = {
  mode: 'development',
  base: '/',
  includeAssets: ['favicon.svg'],
  manifest,
  devOptions: {
    enabled: process.env.SW_DEV === 'true',
    // when using generateSW the PWA plugin will switch to classic
    type: 'module',
    navigateFallback: 'index.html',
  },
} */

/* const commonjsPackages = [
  'electron',
  'electron/main',
  'electron/common',
  'electron/renderer',
  //...builtinModules,
] as const; */

/* const replaceOptions = { __DATE__: new Date().toISOString() }
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
 */



/* export default defineConfig({
  // base: process.env.BASE_URL || 'https://github.com/',
  build: {
    sourcemap: process.env.SOURCE_MAP === 'true',
  },

  plugins: [
    reactRefresh(),
    VitePWA(pwaOptions),
    replace(replaceOptions),
    //commonjsExternals({ externals: commonjsPackages }),
    // optimizer({
    //      find: /^path$/,
    //      code: `const path = require('path'); export { path as default }`,
    //  }),
    //}),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
 */