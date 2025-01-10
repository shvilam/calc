import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {ghPages} from 'vite-plugin-gh-pages';

// https://vite.dev/config/
export default defineConfig({
  base: "/calc/",
  plugins: [react(), ghPages(
    {
      onBeforePublish: ({ outDir}: any) => {
        console.log(`📦 Starting deployment from ${outDir}...`);
      },
      onPublish: ({ branch}: any) => {
        console.log(`🎉 Successfully deployed to ${branch}!`);
      },
      onError: (error: any) => {
        console.error("❌ Deployment failed:", error);
      },
    }
  )],
})
