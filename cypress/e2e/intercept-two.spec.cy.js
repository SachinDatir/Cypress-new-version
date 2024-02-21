describe('Intercept',()=>{
    // beforeEach(()=>{
    //     cy.intercept({
    //         method: "GET",
    //         url: "https://jsonplaceholder.typicode.com/posts"
    //     }, {
    //         body: {
    //             "postId": 2,
    //             "id": 1,
    //             "language": "marathi",
    //             "name": "sachin datir",
    //             "email": "sdatir83@gmail.com",
    //             "body": "i am learning javascript cypress"
    //         }
    //     }).as('getUsers')
    // })

    it('Validate the intercept functionality in cypress',()=>{
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts"
        }, {
            body: {
                "postId": 2,
                "id": 1,
                "language": "marathi",
                "name": "sachin datir",
                "email": "sdatir83@gmail.com",
                "body": "i am learning javascript cypress"
            }
        }).as('getUsers')
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.contains('/posts').click()
        // cy.wait(2000)
        cy.get('@getUsers').then((res)=>{
            cy.log(res)
        })
    })
})