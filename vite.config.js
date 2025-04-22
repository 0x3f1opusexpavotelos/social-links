

import { defineConfig } from "vite"


export default defineConfig({
  base: '/',
  build: {
    target: ["firefox89", "chrome89", "safari13"],
    outDir: "static",
  }
})
