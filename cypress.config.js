///  <reference types="Cypress" />


const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://portal.fixpay.com.br:9443',
    setupNodeEvents(on, config) {
      allureWriter(on,config);
      return config;
    },
  },
});
