///  <reference types="Cypress" />

class loginLocators {


    //os elementos vão ficar aqui:
    FIELD_EMAIL = () => {return "//*[@placeholder='Email']"}
    FIELD_SENHA = () => {return "//*[@placeholder='Senha']"}
    FIELD_BTN = () => {return "//*[@type='submit']"}
    FIELD_ERRO = () => {return "//*[@class='alert rounded alert-danger']"}
}

export default loginLocators