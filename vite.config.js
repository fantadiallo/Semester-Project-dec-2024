import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist", 
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),         
        login: path.resolve(__dirname, "auth/login/index.html"), 
        register: path.resolve(__dirname, "auth/register/index.html"), 
        profile: path.resolve(__dirname,"profile/index.html"),
        hompage: path.resolve(__dirname, "homepage/index.html"),
        about: path.resolve(__dirname,"about/index.html"),
        contact: path.resolve(__dirname, "contact/index.html"),
        details: path.resolve(__dirname, "details/index.html"),
        notFound: path.resolve(__dirname, "notFound/index.html"),
        createListing: path.resolve(__dirname, "createListing/index.html")
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
          @import "src/scss/_variables.scss"; // Include global SCSS variables
          @import "bootstrap/scss/bootstrap"; // Include Bootstrap SCSS
        `,
      },
    },
  },
});
