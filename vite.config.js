/*
 * Author  hailie.pan
 * Date  2022-12-11 21:43:18
 * LastEditors  hailie.pan
 * LastEditTime  2023-03-02 21:09:24
 * Description  file content
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import '@/assets/styles/common.less';`,
        javascriptEnabled: true,
      },
    },
  },
  server: {
    open: true,
  },
});
