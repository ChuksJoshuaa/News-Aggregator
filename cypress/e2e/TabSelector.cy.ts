describe('TabSelector Component', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('should render the tab selector with tabs', () => {
    cy.get('[data-testid="tab-selector"]').should('exist');
    cy.get('[data-testid="tab-button"]').should('have.length', 3);
  });

  it('should switch tabs when a tab is clicked', () => {
    cy.get('[data-testid="tab-button"]').eq(1).click();
  });
});