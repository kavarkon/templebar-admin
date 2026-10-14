import { playwright } from "@vitest/browser-playwright"
import { defineConfig } from "vite"

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      headless: true,
      instances: [
        {
          browser: "chromium",
        },
      ],
      provider: playwright({
        launchOptions: {
          executablePath: process.env.CHROMIUM_PATH,
        },
      }),
    },
  },
})
