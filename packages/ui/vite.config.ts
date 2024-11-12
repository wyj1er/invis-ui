import path from 'node:path'
import createUnocss from '@unocss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

console.log('Loading UnoCSS plugin...')

export default defineConfig({
  plugins: [
    vue(),
    createUnocss({
      // 可以在这里配置 UnoCSS 的选项
      presets: [
        // 例如，使用默认预设
        // eslint-disable-next-line ts/no-require-imports
        require('@unocss/preset-mini')(),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: './src/entry.ts', // 确保入口文件路径正确
      external: ['virtual:uno.css'], // 将 virtual:uno.css 标记为外部模块
      onwarn: (warning, rollupWarn) => {
        if (warning.code === 'UNRESOLVED_IMPORT' && warning.message.includes('virtual:uno.css')) {
          return
        }
        rollupWarn(warning)
      },
    },
  },
})
