/// <reference types="Cypress" />

context('IncrementDecrement', () => {
	beforeEach(() => {
		cy.visit('localhost:3000')
	})

	it('Increment', async () => {
		cy.get('.count').should('have.text', '0');
		cy.get('.increment').click();
		cy.get('.count').should('have.text', '1');
	});

	it('Decrement', async () => {
		cy.get('.count').should('have.text', '0');
		cy.get('.decrement').click();
		cy.get('.count').should('have.text', '-1');
	});
});
