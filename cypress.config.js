// cypress.config.js
module.exports = {
  e2e: {
    baseUrl: 'https://www.saucedemo.com', // (URL base para no repetir en cada test)
    viewportWidth: 1280,
    viewportHeight: 800,
    setupNodeEvents(on, config) {
      // (hooks de Node: por ahora no usamos nada)
      return config;
    },
  },
  video: true, // (graba videos en run headless)
  retries: { runMode: 1, openMode: 0 }, // (reintentos: 1 en CI, 0 en modo interactivo)
};
