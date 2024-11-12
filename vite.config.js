import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
var rollupOptions = {
    external: ['vue', 'vue-router'], // 将这些模块保留在 bundle 之外
    output: {
        globals: {
            vue: 'Vue',
        },
        exports: 'named',
    },
};
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx(), UnoCSS()],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler',
        },
    },
    test: {
        globals: true,
        environment: 'happy-dom',
        coverage: {
            provider: 'istanbul', // or 'v8',
            reporter: ['text', 'json', 'html'],
            // include: ['src/**/*.ts', 'src/**/*.tsx'], // 指定你要测试的文件路径
            // exclude: ['src/*.ts', 'src/utils/**'],// 指定你要忽略的文件路径
        },
    },
    build: {
        rollupOptions: rollupOptions,
        minify: 'terser', // boolean | 'terser' | 'esbuild'
        sourcemap: false, // 输出单独 source文件
        reportCompressedSize: true, // 生成压缩大小报告
        cssCodeSplit: true,
        // 添加库模式配置
        lib: {
            entry: resolve(__dirname, 'src/entry.ts'),
            name: 'SSYUI',
            fileName: 'ssy-ui',
            // 导出模块格式
            formats: ['es', 'umd'],
        },
    },
});
