Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("Fluxo de Criação de Política", () => {
  beforeEach(() => {
    cy.visit("https://account.inciclebeta.com/");
    cy.get('#root input[type="email"]').type("incicle@incicle.com");
    cy.get('#root input[type="password"]').type("123");
    cy.get('#root button[type="submit"]').click();

    cy.origin("https://social.inciclebeta.com/", () => {
      Cypress.on("uncaught:exception", () => false);
      cy.contains("Feed", { timeout: 10000 }).should("be.visible");
    });
  });
  it("Navegar até políticas e preencher os campos obrigatórios", () => {
    cy.origin("https://social.inciclebeta.com/", () => {
      Cypress.on("uncaught:exception", () => false);
      cy.wait(2500);
      cy.get(".incicleheader-desktopmodules-label")
        .should("be.visible")
        .click();
      cy.wait(2500);
      cy.contains("Políticas e Procedimentos", { timeout: 10000 })
        .should("be.visible")
        .click();
    });
    cy.origin("https://policies.inciclebeta.com/", () => {
      Cypress.on("uncaught:exception", () => false);
      cy.contains("Políticas e Procedimentos", { timeout: 15000 }).should(
        "be.visible"
      );
      cy.wait(1000);
      cy.contains("Criar Política").should("be.visible").click();
      cy.get('input[name="title"]')
        .should("be.visible")
        .clear() // Limpa caso tenha algo
        .type("Política de Teste Automatizado");

      cy.get("textarea")
        .first() // Garante que é o primeiro, caso existam outros escondidos
        .should("exist")
        .click({ force: true }) // Clica forçado para garantir o foco
        .type("Descrição preenchida com sucesso via Cypress.", { force: true });

      cy.get('input[type="file"]')
        .first() // Boa prática caso haja outro upload na página (como o de anexos abaixo)
        .selectFile("cypress/fixtures/avatar.png", { force: true });
    });
  });
});
