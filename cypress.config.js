const { defineConfig } = require("cypress");

module.exports = defineConfig({

  experimentalModifyObstructiveThirdPartyCode: true,
  e2e: {

 //   setupNodeEvents(on, config) {
      // implement node event listeners here
  //  },

    pageLoadTimeout: 20000

  },
  
});




