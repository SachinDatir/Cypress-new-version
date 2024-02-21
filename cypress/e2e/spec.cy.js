import {login, visitUrl} from '../../helper'
describe('template spec', () => {
  it('passes', () => {
    login("sdatir83@gmail.com","Password1!").then((token)=>{
    //   cy.visit("https://rahulshettyacademy.com/client",{
    //     onBeforeLoad:(window)=>{
    //         window.localStorage.setItem('token',token)
    //     }
    // })
    // visitUrl("https://rahulshettyacademy.com/client",token)
  })
  })
})