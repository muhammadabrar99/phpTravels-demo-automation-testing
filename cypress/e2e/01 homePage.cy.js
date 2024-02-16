/// <reference types="cypress" />

describe("template spec", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("https://phptravels.net/");
    cy.wait(2000);
  });

  it("click on cookies button", () => {
    cy.get(".cookies_bg").contains("Hide").click();
  });

  it("logo should be visible to users", () => {
    cy.get(".d-flex").eq(0).should("be.visible");
  });
});
