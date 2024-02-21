const neatCSV =require('neat-csv')
describe('Validate the session storage by api call',async()=>{
    let pName
    it('TC-01 session storage',()=>{
        cy.login().then(()=>{
            cy.visit("https://rahulshettyacademy.com/client",{
                onBeforeLoad:(window)=>{
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })
        cy.get('.card-body b').eq(1).then((el)=>{
            pName=el.text()
        })
        cy.get('[class="card-body"]>button').eq(3).click()
        cy.get('[routerlink="/dashboard/cart"]').click()
        cy.contains('button','Buy Now').click()
        cy.get('[placeholder="Select Country"]').type('Ind')
        cy.get('.ta-item>span').each(($el)=>{
            if($el.text()===' India'){
                cy.wrap($el).click()
            }
        })
        cy.get('div>.btnn').click()
        cy.contains('button','CSV').click()
        // cy.readFile(Cypress.config('fileServerFolder')+'/cypress/downloads/order-invoice_sdatir83.csv').then(async(text)=>{
        //     const csv = await neatCSV(text)
        //     const productName=csv[0]['Product Name']
        //     expect(pName).to.equal(productName)
        // })
        cy.task(Cypress.config('fileServerFolder')+'/cypress/downloads/order-invoice_sdatir83.csv').then(async(text)=>{
            const csv = await neatCSV(text)
            console.log(csv)
        })
    })
})