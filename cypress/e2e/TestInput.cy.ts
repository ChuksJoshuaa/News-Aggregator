describe("TextInput Component", () => {
  beforeEach(() => {
    cy.visit("/"); 
  });

  it("should render the text input field", () => {
    cy.get('[data-testid="text-input"]').should("exist");
  });

  it("should update the input value when text is entered", () => {
    cy.get('[data-testid="text-input"]').type("Test Input");
    cy.get('[data-testid="text-input"]').should("have.value", "Test Input");
  });
});
