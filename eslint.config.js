import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import * as depend from "eslint-plugin-depend";
import { importX } from "eslint-plugin-import-x";
import * as perfectionist from "eslint-plugin-perfectionist";
import security from "eslint-plugin-security";
import * as sonarjs from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  depend.configs["flat/recommended"],
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  perfectionist.configs["recommended-natural"],
  security.configs.recommended,
  sonarjs.configs.recommended,
  unicorn.configs.recommended,
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "import-x/no-default-export": "error",
      "import-x/order": "off",
      "security/detect-object-injection": "off",
      "unicorn/logical-assignment-operators": "off",
      "unicorn/name-replacements": [
        "error",
        {
          replacements: {
            env: false,
            param: false,
            params: false,
            props: false,
            ref: false,
          },
        },
      ],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          vars: "all",
          varsIgnorePattern: "^_",
        },
      ],
    },
    settings: {
      "import-x/resolver": {
        node: true,
        typescript: { project: "tsconfig.json" },
      },
    },
  },
  {
    files: [
      "eslint.config.*",
      "next.config.*",
      "commitlint.config.*",
      "postcss.config.*",
      "prettier.config.*",
      "**/page.tsx",
      "**/layout.tsx",
      "**/not-found.tsx",
      "**/error.tsx",
      "**/loading.tsx",
    ],
    rules: { "import-x/no-default-export": "off" },
  },
  prettier,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "src/types/mathml.d.ts",
  ]),
]);
