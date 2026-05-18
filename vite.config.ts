import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'next/link': path.resolve(__dirname, './stubs/next-link.tsx'),
      'next/navigation': path.resolve(__dirname, './stubs/next-navigation.tsx'),
      'next/font/google': path.resolve(__dirname, './stubs/next-font.tsx'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
