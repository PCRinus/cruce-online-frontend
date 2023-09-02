import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@@routes": path.resolve(__dirname, "src/routes"),
      "@@components": path.resolve(__dirname, "src/components"),
    }
  },
})
