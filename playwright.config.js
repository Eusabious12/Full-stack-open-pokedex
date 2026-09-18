const { defineConfig, devices } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  timeout: 120 * 1000,
  use: {
    baseURL: 'http://localhost:5000',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  webServer: {
    command: 'npm run start-prod',
    url: 'http://localhost:5000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
})
