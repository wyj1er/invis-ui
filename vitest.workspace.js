import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  "./vite.config.ts",
  "./vite.config.js",
  "./packages/ui/vite.config.ts",
  "./packages/ui/vite.config.js",
  "./packages/docs/vite.config.ts",
  "./packages/docs/vite.config.js"
])
