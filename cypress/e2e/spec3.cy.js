Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Pendencia_Depto_Pessoal", () => {
  it("Desvincular colab pela conta empresa", () => {
    cy.visit("https://account.inciclebeta.com/");
    cy.get('#root input[type="email"]').type("incicle@incicle.com");
    cy.get('#root input[type="password"]').type("123");
    cy.get('#root button[type="submit"]').click();

    cy.origin("https://social.inciclebeta.com/", () => {
      //exceção a erros//
      Cypress.on("uncaught:exception", () => false);

      cy.contains("Feed", { timeout: 10000 }).should("be.visible");
      cy.wait(1000);
      cy.get(".incicleheader-desktopmodules-label").click();
      cy.contains("Departamento Pessoal").click();
    });

    cy.origin("https://department.inciclebeta.com/", () => {
      //exceção a erros//
      Cypress.on("uncaught:exception", () => false);
      cy.contains("Dashboard", { timeout: 10000 }).should("be.visible");
      cy.wait(1000);
      cy.contains("Colaboradores").click();
      cy.get('[data-cy="InputBase-ActiveCollaborators"]').type(
        "Erling Haaland"
      );
      cy.wait(500);
      cy.contains("Erling Haaland").click();
      cy.wait(1000);
      cy.contains("Desvincular").click();
      cy.get('[data-cy="TextareaBase"]').type("Teste");
      cy.contains("Não").click();
      cy.contains("Desvincular colaborador").click();
      cy.contains("Confirmar").click();
      cy.wait(1000);
      cy.contains("O colaborador foi desvinculado com sucesso").should(
        "be.visible"
      );
    });
  });
});
