// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
    cy.request({
        method:"POST",
        url:"https://rahulshettyacademy.com/api/ecom/auth/login",
        body:{
            "userEmail":"sdatir83@gmail.com",
            "userPassword":"Password1!"
        }
    }).then((res)=>{
        expect(res.status).to.equal(200)
        expect(res.body.message).to.eq('Login Successfully')
        Cypress.env('token',res.body.token)
    })
 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

