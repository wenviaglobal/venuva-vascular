import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),
        ViteImageOptimizer({
      /* 1. JPG/JPEG: Best for photographs */
      jpeg: {
        quality: 50, // Balance between size and clarity
      },
      jpg: {
        quality: 50,
      },
      /* 2. PNG: Best for icons/graphics with transparency */
      png: {
        quality: 50,
        palette: true, // Reduces number of colors to save space
      },
      /* 3. WebP: The modern standard for web images */
      webp: {
        lossless: false, // Set to true if you need pixel-perfect quality
        quality: 50,
      },
      /* 4. AVIF: Next-gen format (even smaller than WebP) */
      avif: {
        lossless: false,
        quality: 50, // AVIF stays sharp even at lower quality settings
      },
      /* 5. GIF: For animations */
      gif: {
        // optimizationLevel is not supported by sharp's gif output
      },
      /* 6. SVG: For vector icons and illustrations */
      svg: {
        multipass: true,
        plugins: [
          'preset-default',
          'sortAttrs',
          'removeDimensions', // Removes width/height so CSS can control size
        ],
      },
      // Optional: Log results to terminal
      logStats: true,
    }),
  ],
  server: {
    port: 5174,
    strictPort: true,
  },
})
