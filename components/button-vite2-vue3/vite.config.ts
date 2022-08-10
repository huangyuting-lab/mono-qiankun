import { defineConfig } from 'vite'
// @ts-ignore
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

export default ({ mode }) => {

  const __DEV__ = mode === 'development'

  return defineConfig({
    alias: {
      '@': resolve('src'),
    },
    server: {
      port: 8001,
      origin: '//localhost:8001'
    },
    base: __DEV__ ? '/' : '//localhost:8001',
    plugins: [vue()],
  })
}

