import loginPage from "../../pages/loginPage";
import pemesananPage from "../../pages/pemesananPage";
import registrasiPage from "../../pages/registrasiPage";

let jinomData;
before(() => {
  cy.fixture("data.json").then((data) => {
    jinomData = data;
    expect(data).to.have.all.keys(
      "registrasi",
      "location",
      "isStatus",
      "choiceBy"
    );
  });
});

describe("Fitur Autentikasi (Login & Registrasi)", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
    cy.xpath('//a[@href="/login"]').click();
    cy.url().should("include", "/login");
  });
  it("Positif - User success registrasi", () => {
    registrasiPage.successRegistrasi(
      jinomData.registrasi.fullName,
      jinomData.registrasi.email,
      jinomData.registrasi.phoneNumber,
      jinomData.registrasi.password
    );
  });
  it("Negatif - User failed registrasi", () => {
    registrasiPage.failedRegistrasi(
      jinomData.registrasi.fullName,
      jinomData.registrasi.email,
      jinomData.registrasi.phoneNumber,
      jinomData.registrasi.password
    );
  });
  it("Negatif - User failed login", () => {
    loginPage.failedLoginForm(
      jinomData.registrasi.invalidEmail,
      jinomData.registrasi.password
    );
  });
  it("Positif - User success login", () => {
    loginPage.fillLoginForm(
      jinomData.registrasi.email,
      jinomData.registrasi.password
    );
  });
});
describe("Fitur cek lokasi", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
    cy.xpath('//a[@href="/login"]').click();
    cy.url().should("include", "/login");
  });
  it("Negatif - Location Unreachable", () => {
    loginPage.fillLoginForm(
      jinomData.registrasi.email,
      jinomData.registrasi.password
    );
    pemesananPage.checkLocation(
      jinomData.location[0],
      jinomData.isStatus.unReachable
    );
  });
  it("Positif - Location reachable", () => {
    loginPage.fillLoginForm(
      jinomData.registrasi.email,
      jinomData.registrasi.password
    );
    pemesananPage.checkLocation(
      jinomData.location[1],
      jinomData.isStatus.reachable
    );
  });
});

describe("Fitur pesanan dan payment", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
    cy.xpath('//a[@href="/login"]').click();
    cy.url().should("include", "/login");
  });

  it("Negatif - Gagal melakukan pemesanan", () => {
    loginPage.fillLoginForm(
      jinomData.registrasi.email,
      jinomData.registrasi.password
    );
    pemesananPage.checkLocation(
      jinomData.location[0],
      jinomData.isStatus.unReachable
    );
    pemesananPage.failedPesanan(
      jinomData.choiceBy.capacity,
      jinomData.isStatus.unReachable
    );
  });
  it("Positif - Berhasil melakukan pemesanan", () => {
    loginPage.fillLoginForm(
      jinomData.registrasi.email,
      jinomData.registrasi.password
    );
    pemesananPage.checkLocation(
      jinomData.location[2],
      jinomData.isStatus.reachable
    );
    pemesananPage.prosesPayment(jinomData.choiceBy.capacity);
  });
});
describe("Fitur logout", () => {
  before(() => {
    cy.visit(Cypress.env("baseUrl"));
    cy.xpath('//a[@href="/login"]').click();
    cy.url().should("include", "/login");
  });
  it("Positif - Succesfully logout", () => {
    loginPage.fillLoginForm(
      jinomData.registrasi.email,
      jinomData.registrasi.password
    );
    cy.wait(1000);
    cy.intercept("POST", "**/api/users/logout").as("logoutRequest");
    cy.xpath('//button[@type="button"]').should("be.visible").click();
    cy.xpath('//span[@class="text-sm" and contains(text(), "Logout")]').click();
    cy.wait("@logoutRequest").its("response.statusCode").should("eq", 200);
  });
});
