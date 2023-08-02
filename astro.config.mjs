import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import prefetch from "@astrojs/prefetch";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })],
  experimental: {
    viewTransitions: true
  },
  build: {
  }
});