describe("SelectDropdown Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the select dropdown", () => {
    cy.get('[data-testid="select-dropdown"]').should("exist");
  });

  it("should update the selected value when an option is selected", () => {
    cy.get('[data-testid="select-dropdown"]').first().select("Technology"); 
    cy.get('[data-testid="select-dropdown"]').first().should("have.value", "technology");
  });

});
