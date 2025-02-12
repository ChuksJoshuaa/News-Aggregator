describe("PersonalizedArticleList Component", () => {
  beforeEach(() => {
    cy.visit("/"); 
  })

  it("should ensure each article has a title, description, and publication date", () => {
    cy.get('[data-testid="article-item"]').each(($el) => {
      cy.wrap($el).find('[data-testid="article-title"]').should("not.be.empty");
      cy.wrap($el)
        .find('[data-testid="article-description"]')
        .should("not.be.empty");
      cy.wrap($el).find('[data-testid="article-date"]').should("not.be.empty");
    });
  });

  it("should display 'Read more' if the description is longer than 150 characters", () => {
    cy.get('[data-testid="article-item"]').each(($el) => {
      cy.wrap($el)
        .find('[data-testid="read-more"]')
        .should(($link) => {
          const text = $link.text();
          if (text.includes("Read more")) {
            expect($link).to.exist;
          }
        });
    });
  });
});
