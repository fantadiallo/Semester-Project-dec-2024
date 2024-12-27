module.exports = {
  env: {
    browser: true,               
    es2021: true,                
    node: true,                 
  },
  extends: [
    "eslint:recommended",         
    "plugin:import/recommended",  
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 12,          
    sourceType: "module",       
  },
  rules: {

    "prettier/prettier": "error", 


    "no-unused-vars": "warn",     
    "no-console": "off",          
    "consistent-return": "error", 
    "arrow-spacing": ["error", { before: true, after: true }], 
    "prefer-const": "error",      

    "import/no-unresolved": "error", 
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "always",             
        scss: "always"           
      }
    ],
  },
};
