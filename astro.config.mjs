import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://rasekdk.github.io',
  integrations: [
    icon({
      iconDir: "src/assets/icons",
    }),
  ],
  redirects: {
    "/projects": "/",
  },
});
