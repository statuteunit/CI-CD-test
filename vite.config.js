import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/CI-CD-test/',
  // 禁用自动注入crossorigin
  build: {
    crossOrigin: false, // 直接关闭跨域标识，比手动配置Rollup更简单,
    cache:false
  }
})
