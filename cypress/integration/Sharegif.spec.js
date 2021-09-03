describe('Giphy Tests 2', () => {
it.only('Share GIF', () => {
    // Given I visit http://giphy.com
    cy.visit('http://giphy.com');

    // When I click on a "Share"
    cy.get('[class="giphy-gif  css-16k37tz"]').eq(0).click();
    cy.get('[class="Button-sc-1m41keg eYFesC"]').eq(1).click();

    //Then link to the GIF should appear
    const textToCopy = cy.get('[class="CopyWrapper-sc-dmgjjj jVBvwj"]').click()
    cy.get('#copyText').invoke('val', textToCopy)
    cy.get('button').click()
    cy.task('getClipboard').should('eq', textToCopy)
    
    })
    

    //And the GIF link can be pasted unto the google search bar
})

  