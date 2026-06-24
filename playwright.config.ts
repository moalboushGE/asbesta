import { defineConfig } from '@playwright/test';

// E2E-/A11y-Tests gegen den produktionsnahen Node-Server (server.mjs, Port 4321).
// Der Server startet ohne DB; der /api/anfrage-Happy-Path wird in den Tests gemockt.
// Voraussetzung: dist/ ist gebaut – das npm-Script `test:e2e` baut zuerst.
export default defineConfig({
  testDir: 'e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:4321',
    viewport: { width: 1280, height: 800 },
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'node server.mjs',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
