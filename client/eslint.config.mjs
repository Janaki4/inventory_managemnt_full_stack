import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Disable unused variables error
      "@typescript-eslint/no-explicit-any": "off", // Allow 'any' type
      "@typescript-eslint/no-empty-object-type": "off", // Allow empty object types
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off", // Allow non-null assertions
      "react-hooks/exhaustive-deps": "warn", // Make missing dependencies a warning instead of an error
    },
  },
];

export default eslintConfig;
