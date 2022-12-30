/*
 * Author  hailie.pan
 * Date  2022-12-11 21:43:18
 * LastEditors  hailie.pan
 * LastEditTime  2022-12-11 22:16:30
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
  server: {
    open: true,
  },
});
