Cypress.on("uncaught:exception", (err, runnable) => {
  // Retornar false impede que o Cypress falhe o teste
  // quando detectar erros no site/aplicação
  return false;
});
describe("Teste de Login InCicle", () => {
  beforeEach(() => {
    cy.visit("https://account.inciclebeta.com/");
    cy.get('#root input[type="email"]').type("incicle@incicle.com");
    cy.get('#root input[type="password"]').type("123");
    cy.get('#root button[type="submit"]').click();

    cy.origin("https://social.inciclebeta.com/", () => {
      cy.contains("Feed", { timeout: 10000 }).should("be.visible");
    });
  });
  it("Deve realizar login e acessar o feed", () => {
    cy.visit("https://account.inciclebeta.com/");
    // Seu código atual de verificação
    cy.contains("Feed", { timeout: 10000 }).should("be.visible");

    // NOVO CÓDIGO: Clicar no botão de Apps
    // O ideal é buscar pelo data-testid que aparece no SVG
    cy.get('[data-testid="AppsIcon"]').click();
  });
});
