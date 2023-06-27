import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'persian-components',
      fileName: 'persian-components'
    },

    rollupOptions: {
      external: ['vue'],
      input: resolve(__dirname, 'packages/index.ts'),
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
