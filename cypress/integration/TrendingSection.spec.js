describe('Giphy Tests', () => {
    it('Trending section exists', () => {
        // Given I visit http://giphy.com
        cy.visit('http://giphy.com');

        // When I click the trending element
        cy.contains('Trending').click();

        // Then I am directed to the Trending GIF Page
        cy.url().should('include', '/trending-gifs');
        
      })
    
    it('Clicks Trending GIF', () => {
        // Given I visit http://giphy.com
        cy.visit('http://giphy.com');

        // When I click on a trending gif
        cy.wait(1600);
        cy.get('[class="giphy-gif-img giphy-img-loaded"]').eq(0).should('have.attr', 'alt')
        .then(alttext => {
        cy.get('[class="giphy-gif  css-16k37tz"]').eq(0).click();

        // Then the GIF that I clicked on should load on the next page
        cy.get('[class="_2UR91XUlAgSU4ZwhD-hyNs _1KuKUOaTOA-MDxUbnxAF0-"]')
        .invoke('text')
        .should((GIFheadertext) => {
        expect(alttext).to.eq(GIFheadertext);
    })
})
it.only('Share GIF', () => {
    // Given I visit http://giphy.com
    cy.visit('http://giphy.com');

    // When I click on a "Share"
    cy.wait(1600);
    cy.get('[class="Button-sc-1m41keg eYFesC"]').eq(1)
  

    // Then the GIF url for the GIF clicked should load on the next page
//     cy.get('[class="_2UR91XUlAgSU4ZwhD-hyNs _1KuKUOaTOA-MDxUbnxAF0-"]')
//     .invoke('text')
//     .should((GIFheadertext) => {
//     expect(alttext).to.eq(GIFheadertext);
// })
    })


    })

});
//})
