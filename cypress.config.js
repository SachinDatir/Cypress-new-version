const { defineConfig } = require("cypress");
const fs = require('fs')
const excelToJson = require('covert-json-to-excel')
module.exports = defineConfig({
  e2e: {
    baseUrl:"https://rahulshettyacademy.com/client",
    setupNodeEvents(on, config) {
      // on('task',task)
      on('task',{
        excelToJsonConverter(filePath){
          const result=excelToJson({
            source:fs.readFileSync(filePath)
          })
          return result
        }
      })
      
    },
  },
  pageLoadTimeout:60000,
  failOnStatusCode: false
});

