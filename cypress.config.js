const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    //timeout padrão de 30 segundos pra tudo
    defaultCommandTimeout: 30000,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
