// Descre o  bloco de testes, onde o título 'Meu Primeiro Teste com Cypress' é dado para o conjunto de testes
describe('Meu Primeiro Teste com Cypress', () => {

    // Define um caso de teste, com o título 'Acessa a página do Google'
    it('Acessa a página do Google', () => {

        // Comando 'cy.visit' é usado para acessar a URL fornecida
        // Neste caso, ele abre a página do Google
        cy.visit('https://www.google.com'); // Acessa o site
    });
});