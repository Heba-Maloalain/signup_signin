///<reference types="Cypress" />
describe('test for signup and login', () => {
    it('test one ', () => {
        let emailSignIn;
function genarateEmail (){
    const domain=["gmail.com","yahoo.com","hotmail.com"]
    const randomnumfordomain=domain[Math.floor(Math.random()*domain.length)]
    const usernamelength=Math.floor(Math.random()*10)+5; // between 5 and 15
    let username='';
    const char='abcdefghijklmnopqrstuvwxyz0123456789'
    for(let i=0;i< usernamelength;i++)
    {
        username+= char.charAt(Math.floor(Math.random()*char.length))


    }
    return username+ "@"+ randomnumfordomain;


}



const randomEmail=genarateEmail()
        const firstnamelist=["heba","jafer","eslam"]
        const lastnamelist=["maloalain","shreem","albhlool"]
        let randomnum=Math.floor(Math.random()*3)
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
        cy.get('.field-name-firstname').type(firstnamelist[randomnum])
        cy.get('#lastname').type(lastnamelist[randomnum])
cy.get('#email_address').type(randomEmail);
cy.get('#password').type("ASDasd!@#")
cy.get('#password-confirmation').type("ASDasd!@#")
cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
emailSignIn=randomEmail
cy.visit("https://magento.softwaretestingboard.com/customer/account/logout/")
cy.get('.panel > .header > .authorization-link > a').click()
cy.get('#email').type(emailSignIn)
cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("ASDasd!@#")
cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    });
});