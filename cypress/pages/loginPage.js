import { jinomLocators } from "../locators/jinomLocators";

const loginPage = {
  fillLoginForm(email, password) {
    cy.xpath(jinomLocators.email).should("be.visible").type(email);
    cy.xpath(jinomLocators.password).should("be.visible").type(password);
    cy.xpath(jinomLocators.buttonLogin).click();

    cy.xpath(jinomLocators.successLogin).should(
      "contain.text",
      "Login Berhasil"
    );

    cy.xpath(jinomLocators.buttonBeranda).click();
    cy.url().should("include", "/");
  },
  failedLoginForm(email, password) {
    cy.xpath(jinomLocators.email).should("be.visible").type(email);
    cy.xpath(jinomLocators.password).should("be.visible").type(password);

    cy.xpath(jinomLocators.buttonLogin).should("be.disabled");

    cy.contains("p", "Harap isikan email dengan lengkap").should("be.visible");
  },
};
export default loginPage;
