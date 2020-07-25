describe("Inputs, toppings, submit", () => {
  it("Can nav to site", () => {
    cy.visit("http://localhost:3000/pizza");
    cy.url().should("include", "localhost");
  });
  it("can add text", () => {
    cy.get("#nameInput").type("Sam").should("have.value", "Sam");
  });
  it("can select multiple toppings", () => {
    cy.get(".toppings > :nth-child(2) > input").click();
    cy.get(".toppings > :nth-child(4) > input").click();
    cy.get(".toppings > :nth-child(6) > input").click();
  });
  it("can submit", () => {
    cy.get("button").click();
  });
});
