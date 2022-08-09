import { defineConfig } from 'vite'
import qiankun from 'vite-plugin-qiankun';
import reactRefresh from '@vitejs/plugin-react-refresh'

// useDevMode 开启时与热更新插件冲突
const useDevMode = true

export default ({ mode }) => {

  const __DEV__ = mode === 'development'

  return defineConfig({
    server: {
      port: 3003,
      origin: '//localhost:3003'
    },
    base: __DEV__ ? '/' : '//localhost:3003',
    plugins: [
      ...(
        useDevMode ? [] : [
          reactRefresh()
        ]
      ),
      qiankun('sub-vite2-react', {
        useDevMode: true
      })
    ],
  })
}