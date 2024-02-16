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

  it("should be able to click on Flights", () => {
    cy.get(".header_menu").find("li").eq(0).click();

    // Check if the page is redirected to the correct page
    cy.url().should("include", "/flights");
  });

  it.only("should be able to click on Hotels", () => {
    cy.get(".header_menu").find("li").eq(1).click();

    // Check if the page is redirected to the correct page
    cy.url().should("include", "/hotels");
  });
});
