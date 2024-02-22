/// <reference types="cypress" />

describe("template spec", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("https://phptravels.net/");
    cy.wait(2000);
  });

  it("logo should be visible to users", () => {
    cy.get(".d-flex").eq(0).should("be.visible");
  });

  it("click on links in Tablist in Hero section", () => {
    // Flights
    cy.get(".nav > :nth-child(1) > .nav-link").should("have.class", "active");
    cy.get(".nav > :nth-child(2) > .nav-link").should(
      "not.have.class",
      "active"
    );
    cy.get(".nav > :nth-child(3) > .nav-link").should(
      "not.have.class",
      "active"
    );
    cy.get(".nav > :nth-child(4) > .nav-link").should(
      "not.have.class",
      "active"
    );

    // click on hotels link
    cy.get(".nav > :nth-child(2) > .nav-link").click();
    cy.get(".nav > :nth-child(2) > .nav-link").should("have.class", "active");
    cy.get(".nav > :nth-child(1) > .nav-link").should(
      "not.have.class",
      "active"
    );
    cy.get(".nav > :nth-child(3) > .nav-link").should(
      "not.have.class",
      "active"
    );
    cy.get(".nav > :nth-child(4) > .nav-link").should(
      "not.have.class",
      "active"
    );

    // Click on Tours
    cy.get(".nav > :nth-child(3) > .nav-link").click();
    cy.get(".nav > :nth-child(3) > .nav-link").should("have.class", "active");
    cy.get(".nav > :nth-child(1) > .nav-link").should(
      "not.have.class",
      "active"
    );
    cy.get(".nav > :nth-child(2) > .nav-link").should(
      "not.have.class",
      "active"
    );
    cy.get(".nav > :nth-child(4) > .nav-link").should(
      "not.have.class",
      "active"
    );

    // Click on Cars
    cy.get(".nav > :nth-child(4) > .nav-link").click();
    cy.get(".nav > :nth-child(4) > .nav-link").should("have.class", "active");
    cy.get(".nav > :nth-child(1) > .nav-link").should(
      "not.have.class",
      "active"
    );
    cy.get(".nav > :nth-child(2) > .nav-link").should(
      "not.have.class",
      "active"
    );
    cy.get(".nav > :nth-child(3) > .nav-link").should(
      "not.have.class",
      "active"
    );
  });

  it.only("Check flights Tab", () => {
    // click on Round Trip
    cy.get("#round-trip").click();
    cy.get("#return_date").should("be.visible");

    // Click on One Way
    cy.get("#one-way").click();
    cy.get("#return_date").should("not.be.visible");

    // Click on Flight type
    cy.get("#flight_type")
      .select("Economy Premium")
      .should("have.value", "economy_premium");

    cy.get("#flight_type").select("Business").should("have.value", "business");

    cy.get("#flight_type").select("First").should("have.value", "first");

    // Select Flying From
    cy.get(".select2-selection__arrow").eq(0).click({ force: true });
    // Click on Lahore
    cy.get(":nth-child(2) > .mx-2").click();
    cy.get("[name='city']")
      .eq(0)
      .select("Select City", { force: true })
      .should("have.value", "LHE");

    // Select Destination To
    cy.get(".select2-selection__arrow").eq(1).click({ force: true });
    // Click on Dubai
    cy.get(":nth-child(2) > .mx-2").click();
    cy.get("[name='city']")
      .eq(1)
      .select("Select City", { force: true })
      .should("have.value", "DXB");

    // Click on Swap
    cy.get(".swap-places ").click();

    cy.get("[name='city']")
      .eq(0)
      .select("DXB", { force: true })
      .should("have.value", "DXB");

    cy.get("[name='city']")
      .eq(1)
      .select("LHE", { force: true })
      .should("have.value", "LHE");

    // Select Date
    cy.get("#departure").click().clear().type("01-03-2024");

    // Select travellers
    cy.get("[data-toggle='dropdown']")
      .eq(0)
      .click()
      .then(() => {
        cy.get(".qtyInc").eq(0).click();
        cy.get("#fadults").should("have.value", "2");
      });

    // Click on Search
    cy.get("#onereturn > .col-lg-1").click();
    // Chreck if redirected to correct page
    // cy.url().should("include", "oneway/");

    // cy.get(".mt-5").click();
  });
});
