import moment from 'moment'
describe('Validate the rest api',()=>{
    it('Get request',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2",
            failOnStatusCode: false
        }).then((res)=>{
            // cy.log(res.body)
            res.body.data.forEach(el => {
            expect(el).to.have.keys(['id','email','first_name',"last_name",'avatar']) 
            });
        })
    })
    it.only('POST request',()=>{
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            failOnStatusCode:false,
            body:{
                "name":"Sachin Datir",
                "address":"Mahaashtra",
                "country":"India",
                "countrycode":"+91"
            }
        }).then((res)=>{
            const todayDate = moment().format("YYYY-MM-DD");
            let createdAt = moment(res.body.createdAt).format("YYYY-MM-DD")
            // cy.log(res.body.createdAt)
            // cy.log(createdAt)
            expect(createdAt).to.eql(todayDate)


        })
    })
})