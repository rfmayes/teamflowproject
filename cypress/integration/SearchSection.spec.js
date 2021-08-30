describe('Giphy Tests', () => {
    it('Search Section Works', () => {
        // Given I visit http://giphy.com
        cy.visit('http://giphy.com');

        // And the Search Section exists
        cy.get('[class="Input-sc-w75cdz tdeeo"]')
        // When I type “dog” into the search section 
        .type("dog")

        // And I press "Submit"
        .type('{enter}');
        
        // Then at least one dog GIF image should load
        cy.wait(6000);
        cy.get('[class="giphy-gif-img giphy-img-loaded"]').eq(4).should('have.attr', 'alt')
        .then(alttext => {
        expect(alttext).to.include('Dog');
      })
      
    })

});