///<reference types="cypress" />
it.only('verify the checkbox',()=>{
    cy.visit('https://www.google.com')
    // cy.get('.n3VNCb.KAlRDb').click('bottomLeft',{force:true})
    cy.get('.lnXdpd').should('be.visible')
})