import { jinomLocators } from "../locators/jinomLocators";

const registrasiPage = {
  failedRegistrasi(fullName, email, phoneNumber, password) {
    cy.xpath(jinomLocators.register.registrasiPage)
      .first()
      .should("be.visible")
      .click();
    cy.xpath(jinomLocators.register.name).should("be.visible").type(fullName);
    cy.xpath(jinomLocators.register.email).should("be.visible").type(email);
    cy.xpath(jinomLocators.register.phoneNumber)
      .should("be.visible")
      .type(phoneNumber);
    cy.xpath(jinomLocators.register.password)
      .first()
      .should("be.visible")
      .type(password);
    cy.xpath(jinomLocators.register.password)
      .last()
      .should("be.visible")
      .type(password);

    cy.xpath(jinomLocators.register.buttonRegistrasi).click();
    cy.contains("The email has already been taken.").should("be.visible");
  },
  successRegistrasi(fullName, password) {
    // 1. Buat ID unik dari timestamp
    const randomId = Date.now();
    // 2. Buat email dan no unik
    const uniqueEmail = `dio_tester_${randomId}@example.com`;
    const uniquePhone = `8${randomId.slice(-9)}`;
    cy.xpath(jinomLocators.register.registrasiPage)
      .first()
      .should("be.visible")
      .click();
    cy.xpath(jinomLocators.register.name).should("be.visible").type(fullName);
    cy.xpath(jinomLocators.register.email)
      .should("be.visible")
      .type(uniqueEmail);
    cy.xpath(jinomLocators.register.phoneNumber)
      .should("be.visible")
      .type(uniquePhone);
    cy.xpath(jinomLocators.register.password)
      .first()
      .should("be.visible")
      .type(password);
    cy.xpath(jinomLocators.register.password)
      .last()
      .should("be.visible")
      .type(password);

    cy.xpath(jinomLocators.register.buttonRegistrasi).click();

    cy.xpath(jinomLocators.register.successRegister).should(
      "contain.text",
      "Registrasi Berhasil!"
    );

    cy.xpath(jinomLocators.register.buttonVerifikasi).should("be.visible");
  },
};
export default registrasiPage;
