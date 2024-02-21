describe('Validate intercept request in cypress',()=>{
    it('TC_01 Intercept GET call',()=>{
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as("GetRequest")

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click({force:true})
        cy.wait('@GetRequest').then(({response})=>{
            cy.log(response)
        })
    })

    it('POST Call',()=>{
        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments",
            headers:{
                Accept:"*/*"
            },
        
        }).as('PostRequest')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click({force:true})
        cy.wait('@PostRequest').then(({response})=>{
            cy.log(response)
        })

    })

    it('Stubbing',()=>{
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        },{
            body:{
                "name": "Sachin Datir",
                "email": "Skd@gmail.com",
                "body": "I am learning Intercept"
            }
        }).as('StubData')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click({force:true})
        cy.wait('@StubData').then(({response})=>{
            // cy.log(response.body)
            expect(response.body.body).to.contain('Intercept')
        })
    })

    it.only('Stubbing status code 404',()=>{
        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments"
        },{
            body: {
                "postId": 1,
                "id": 1,
                "name": "Sachin Datir",
                "email": "sachin@gmail.com",
                "body": "I am learning Cypress Intercept"
            }
        }).as('Intecept')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@Intecept').then((res)=>{
            expect(res.response.body.email).to.eq('sachin@gmail.com')
        })
    })
})