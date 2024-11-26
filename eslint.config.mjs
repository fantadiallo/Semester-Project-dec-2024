/** @type {import('eslint').Linter.Config[]} */
import pluginJs from "eslint-plugin-js";
import globals from "globals";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        describe: true,
        test: true,
        it: true,
        expect: true,
        require: true,
        module: true,
        process: true,
      },
    },
  },
  pluginJs.configs.recommended,
];
