import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import monkey, { cdn, util } from "vite-plugin-monkey";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Vuetify from 'vite-plugin-vuetify'

import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
    Vuetify({
      styles: {
        configFile: 'src/styles/settings.scss'
      },
      autoImport: true
    }),
    AutoImport({
      imports: ["vue", util.unimportPreset],
      dts: "types/auto-imports.d.ts",
    }),
    Components({
      dts: "types/components.d.ts",
    }),
    monkey({
      entry: "src/main.ts",
      userscript: {
        icon: "https://vitejs.dev/logo.svg",
        namespace: "npm/vite-plugin-monkey",
        match: ["https://*.onlyfans.com/*"],
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr("Vue", "dist/vue.global.prod.js"),
          // vuetify: cdn.jsdelivr("Vuetify", "dist/vuetify.min.js"),
        },
        externalResource: {
          // vuetify: cdn.jsdelivr("Vuetify", "dist/vuetify.min.css"),
        },
      },
    }),
  ],
});
