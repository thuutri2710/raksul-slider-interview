import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
import linaria from '@linaria/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    linaria({
      sourceMap: process.env.NODE_ENV !== 'production',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
