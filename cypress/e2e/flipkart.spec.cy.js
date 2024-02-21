describe('Validate the flipkart',()=>{
    it('Test_01',()=>{
     cy.visit('https://www.flipkart.com/')
     cy.get('[type="text"]').clear().type('nose ring above 1000').type('{enter}')
     cy.get('[class="_3bPFwb"]>div>._30jeq3').each((el)=>{
        let text = el.text()
        const price = parseFloat(text.replace('₹', '').replace(',', '')); 
        if(price>1000&&price<1200){
            cy.log(price)
        }
     })
    })

    it.only('Test_2',()=>{
     cy.visit('https://www.flipkart.com/')

        cy.get('[type="text"]').clear().type('Ikea sofa').type('{enter}')
        cy.get('._4ddWXP').each((el)=>{
            let offer = el.find('._3Ay6Sb').text().replace('%','').replace('off','')
            let price = el.find('._30jeq3').text().replace('₹','').replace(',','')
            if(price>10000 && offer>40){
                cy.log(el.find('.s1Q9rs').text())
            }
 
        })
    })
})