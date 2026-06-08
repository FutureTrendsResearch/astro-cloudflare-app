import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import remarkReadingTime from "remark-reading-time";

export default defineConfig({
  site: "https://cloudflare-workers-autoconfig-futuretrendsresearch-astro.futuretrendsresearch.workers.dev",
  output: "static",
  integrations: [sitemap(), icon(), mdx()],
  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      () => {
        return function (_tree, file) {
          file.data.astro.frontmatter.minutesRead =
            file.data.readingTime.minutes;
        };
      },
    ],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
    logLevel: "warn",
    build: {
      chunkSizeWarningLimit: Infinity,
      rollupOptions: {
        onwarn(warning, warn) {
          if (
            warning.code === "UNUSED_EXTERNAL_IMPORT" ||
            (warning.message && warning.message.includes("@astrojs/internal-helpers/remote"))
          ) {
            return;
          }
          warn(warning);
        },
      },
    },
  },
});
