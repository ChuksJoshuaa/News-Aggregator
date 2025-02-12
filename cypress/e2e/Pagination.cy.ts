describe("Pagination Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the pagination controls", () => {
    cy.get("[data-testid='pagination']").should("exist");
  });


  it("should disable the 'Previous Page' button on the first page", () => {
    cy.get("[data-testid='previous-page-button']").should("be.disabled");
  });
});
