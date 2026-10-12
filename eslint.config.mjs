import eslint from "@eslint/js";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals.js";
import nextPlugin from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [ "out/**", "build/**", "dist/**",
      ".next/**",
      "node_modules/**",
      "coverage/**",
      "tsconfig.tsbuildinfo",
      // Next.js regenerates this file on every build; it must keep its
      // triple-slash references, so it is not lintable source.
      "next-env.d.ts",
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // eslint-config-next ships eslintrc-style shareable configs, so the
    // equivalent flat config is assembled from its plugin's rule sets.
    plugins: { "@next/next": nextPlugin },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextCoreWebVitals.rules,
    },
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      globals: {
        process: "readonly",
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
  },
);
