/** @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions} */
export default {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["cn"],
  tailwindStylesheet: "./src/app/globals.css",
};
