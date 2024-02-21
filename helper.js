export const login=(username,password)=>
    cy.request({
        method:"POST",
        url:"https://rahulshettyacademy.com/api/ecom/auth/login",
        body:{
            "userEmail":username,
            "userPassword":password
        }
    }).then((res)=>{
        expect(res.status).to.equal(200)
       let token=  res.body.token
       cy.visit("/",{
        onBeforeLoad:()=>{
            window.localStorage.setItem('token',token)
     
        }
       })
        // Cypress.env('token',res.body.token)
    })

    export const visitUrl = (url,token)=>{
        cy.visit(url,{
            onBeforeLoad:(window)=>{
                window.localStorage.setItem('token',token)
            }
        })
    }