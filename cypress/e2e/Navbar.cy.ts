describe("Navbar Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the navbar with the correct title", () => {
    cy.get('[data-testid="navbar-title"]').should("contain", "Innoscripta");
  });
});
