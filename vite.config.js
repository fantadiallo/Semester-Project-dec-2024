import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  appType: "mpa",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),         
        login: path.resolve(__dirname, "auth/login/index.html"), 
        register: path.resolve(__dirname, "auth/register/index.html"), 
        profile: path.resolve(__dirname, "profile/index.html"),
        homepage: path.resolve(__dirname, "homepage/index.html"),
        about: path.resolve(__dirname, "about/index.html"),
        contact: path.resolve(__dirname, "contact/index.html"),
        details: path.resolve(__dirname, "details/index.html"),
        notFound: path.resolve(__dirname, "notFound/index.html"),
        createListing: path.resolve(__dirname, "createListing/index.html"),
      },
    },
    
  },
  server: {
    open: "/index.html", 
    port: 3000, 
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), 
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "src/scss/base/variables" as *; // Make variables globally available
          @use "src/scss/layout/mixins" as *; // Make mixins globally available
        `,
      },
    },
  },
  
});
