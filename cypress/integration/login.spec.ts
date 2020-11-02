describe('Login specs', () => {
    it('visit the login page', () => {
        cy.visit('/');
    });

    it('should user input has the focus when it clicks on it', () => {
        // Act
        cy.visit('/');
        cy.get('input[name="user"]').click();

        // Assert
        cy.get('input[name="user"]').should('have.focus');
    });

    it('should password input has the focus when it clicks on it', () => {
        // Act
        cy.visit('/');
        cy.get('input[name="password"]').click();

        // Assert
        cy.get('input[name="password"]').should('have.focus');
    });

    it('should show an alert with a message when type invalid credentials', () => {
        // Arrange
        const user = 'admin';
        const password = '1234';
        const errorMessage = 'Usuario y/o password no válidos';

        // Act
        cy.visit('/');
        cy.get('input[name="user"]').as('userInput');
        cy.get('input[name="password"]').as('passwordInput');

        cy.get('@userInput').type(user);
        cy.get('@passwordInput').type(password);
        cy.findByRole('button', { name: 'Login' }).click();

        // Assert
        cy.get('@userInput').should('have.value', user);
        cy.get('@passwordInput').should('have.value', password);
        cy.findByRole('alert').should('include.html', errorMessage);
    });

    it('should navigate to submodel list when type valid credentials', () => {
        // Arrange
        const user = 'admin';
        const password = 'test';

        // Act
        cy.visit('/');
        cy.get('input[name="user"]').as('userInput');
        cy.get('input[name="password"]').as('passwordInput');

        cy.get('@userInput').type(user);
        cy.get('@passwordInput').type(password);
        cy.findByRole('button', { name: 'Login' }).click();

        // Assert
        cy.url().should('eq', 'http://localhost:8080/#/submodule-list');

    });
})