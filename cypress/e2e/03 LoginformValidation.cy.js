/// <refrence types="cypress" />

describe("Test suite for form validation", () => {
  beforeEach(() => {
    cy.visit("https://phptravels.net/login");
    cy.wait(2000);
  });

  it("Shoud be able to successfully submit form", () => {
    cy.get("#email").type("user@phptravels.com");
    cy.get("#password").type("demouser");
    // Click on remember me
    cy.get("#rememberchb").click();
    cy.get("#submitBTN").click();

    // check if user is redirected to Dashboard
    cy.url().should("include", "/dashboard");
  });

  it("Should display error message when form is submitted with empty fields", () => {
    cy.get("#submitBTN").click();
    // check if error message is displayed
    cy.get(".vt-card").find("h4").should("have.text", "Invalid Login");
  });

  it("Should not sumbit form with invalid email", () => {
    cy.get("#email").type("userphptravels");
    cy.get("#password").type("demouser");
    cy.get("#submitBTN").click();
  });

  it("show error message if password is field is empty", () => {
    cy.get("#email").type("user@phptravels");
    cy.get("#submitBTN").click();
    // check if error message is displayed
    cy.get(".vt-card").find("h4").should("have.text", "Invalid Login");
  });

  it("Should not submit form with invalid email and password", () => {
    cy.get("#email").type("demo@com");
    cy.get("#password").type("abc123");
    cy.get("#submitBTN").click();
    // check if error message is displayed
    cy.get(".vt-card").find("h4").should("have.text", "Invalid Login");
  });

  it("Show alert on clicking forgot password", () => {
    cy.get("[data-bs-target='#reset']").click();
    // check if alert is displayed
    cy.get("#modal").should("be.visible");

    // close alert
    cy.get(".modal-footer > .btn-outline-primary").click();
  });

  it("Should be able to type email and click on reset email", () => {
    cy.get("[data-bs-target='#reset']").click();
    // check if alert is displayed
    cy.get("#modal").should("be.visible");

    // type email
    cy.get("#reset_mail").type("abc@com");
    // click on reset email
    cy.get(".submit_buttons").click();
    // check if the alert is closed
    cy.get("#modal").should("not.be.visible");
  });

  it("Should be able to click on sign up", () => {
    cy.get(".col-md-12 > .d-flex").click();
    // check if user is redirected to sign up page
    cy.url().should("include", "/signup");
  });
});
