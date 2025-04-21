

import { defineConfig } from "vite"


export default defineConfig({
  base: '/social-links',
  server: {
    port: 1234
  },
  build: {
    target: ["firefox89", "chrome89", "safari13"],
    outDir: "static",
  }
})
