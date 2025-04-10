import { defineConfig as defineTestConfig, mergeConfig } from "vitest/config";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

function createBaseConfig(command: "build" | "serve") {
  return {
    base: command === "build" ? "/front_5th_chapter1-3/" : "/",
    plugins: [react()],
  };
}

const testConfig = defineTestConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      reportsDirectory: "./.coverage",
      reporter: ["lcov", "json", "json-summary"],
    },
  },
});

export default defineConfig(({ command }) => {
  const baseConfig = createBaseConfig(command);
  return mergeConfig(baseConfig, testConfig);
});
