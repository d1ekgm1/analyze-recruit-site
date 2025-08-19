import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    
  },
  plugins: [
    react(),
    base: '/analyze-recruit-site/'
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  // 여기 반드시! repo 이름과 동일
  base: '/analyze-recruit-site/',
  // Pages가 읽기 편하도록 빌드 산출물을 docs로 바로 뽑기
  build: { outDir: 'docs' },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
