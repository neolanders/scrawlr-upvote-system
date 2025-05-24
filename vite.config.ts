import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@store', replacement: '/src/store' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '__mocks__', replacement: '__mocks__' },  
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables" as *;` // This will now work
      }
    }
  }
})
