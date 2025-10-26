import { jinomLocators } from "../locators/jinomLocators";

const pemesananPage = {
  checkLocation(location, isStatus) {
    cy.xpath(jinomLocators.buttonCekLokasi).should("be.visible").click();
    cy.url().should("include", "/pemesanan-jinix");
    cy.xpath('//div[@role="button"]').should("be.visible");
    cy.xpath(jinomLocators.searchLocation).type(location);
    cy.wait(1000);
    cy.get(".w-full > ul > :nth-child(1)").click();
    cy.wait(1000);
    cy.xpath(jinomLocators.location).contains(isStatus).should("be.visible");
    cy.xpath(jinomLocators.buttonSelanjutnya).click();
  },
  prosesPayment(capacity) {
    cy.xpath(jinomLocators.pilihKapasitas).should("be.visible").click();
    cy.xpath(jinomLocators.inputKapasitas).type(capacity);
    cy.xpath(jinomLocators.buttonSelanjutnya).click();
    cy.xpath(jinomLocators.buttonPilihLayanan).first().click();
    cy.xpath(jinomLocators.layanan).first().click();
    cy.xpath(jinomLocators.buttonProsesPembayaran).should("be.visible");
    cy.url().should("include", "/detail");
  },
  failedPesanan(capacity, isStatus) {
    cy.xpath(jinomLocators.pilihKapasitas).should("be.visible").click();
    cy.xpath(jinomLocators.inputKapasitas).type(capacity);
    cy.xpath(jinomLocators.buttonSelanjutnya).click();
    cy.xpath(jinomLocators.buttonPilihLayanan).first().click();
    cy.wait(1000);
    cy.xpath(jinomLocators.location).first().contains(isStatus);
  },
};
export default pemesananPage;
