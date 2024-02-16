/// <refrence types="cypress" />

describe("Test suite to check all the links in the navbar", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("https://phptravels.net/");
    cy.wait(2000);
  });

  it("should be able to click on Flights", () => {
    cy.get(".header_menu").find("li").eq(0).click();

    // Check if the page is redirected to the correct page
    cy.url().should("include", "/flights");
  });

  it("should be able to click on Hotels", () => {
    cy.get(".header_menu").find("li").eq(1).click();

    // Check if the page is redirected to the correct page
    cy.url().should("include", "/hotels");
  });

  it("should be able to click on Tours", () => {
    cy.get(".header_menu").find("li").eq(2).click();

    // Check if the page is redirected to the correct page
    cy.url().should("include", "/tours");
  });

  it("should be able to click on Cars", () => {
    cy.get(".header_menu").find("li").eq(3).click();

    // Check if the page is redirected to the correct page
    cy.url().should("include", "/cars");
  });

  it("should be able to click on Blogs", () => {
    cy.get(".header_menu").find("li").eq(4).click();

    // Check if the page is redirected to the correct page
    cy.url().should("include", "/blogs");
  });

  // Check the language dropdown
  it("should be able to click on the language dropdown", () => {
    cy.get(".nav-item--right")
      .find("[class='nav-item dropdown']")
      .eq(0)
      .click()
      .then(() => {
        cy.get("[data-bs-popper='static']").find("a").eq(1).click();

        // Check if the page is redirected to the correct page
        cy.get(".hero_text > h4").should("have.text", "رحلتك تبدأ هنا!");
      });

      // Click on the language dropdown again and select English
      cy.get(".nav-item--right")
        .find("[class='nav-item dropdown']")
        .eq(0)
        .click()
        .then(() => {
          cy.get("[data-bs-popper='static']").find("a").eq(0).click();

          // Check if the page is redirected to the correct page
          cy.get(".hero_text > h4").should("have.text", "Your Trip Starts Here!");
        });
  });
});