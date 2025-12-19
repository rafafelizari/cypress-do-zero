Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe.skip("Unlink collaborator", () => {
  it("Unlink collaborator via company account", () => {
    cy.visit("https://account.inciclebeta.com/");
    cy.get('#root input[type="email"]').type("incicle@incicle.com");
    cy.get('#root input[type="password"]').type("123");
    cy.get('#root button[type="submit"]').click();


    cy.origin("https://social.inciclebeta.com/", () => {

      //cy.visit("https://social.inciclebeta.com/");

      //exceção a erros//
      Cypress.on("uncaught:exception", () => false);

      cy.contains("Feed", { timeout: 30000 }).should("be.visible");
      cy.wait(1000);
      cy.get(".incicleheader-desktopmodules-label", { timeout: 30000 }).should("be.visible").click();
    cy.contains("Departamento Pessoal", { timeout: 30000 }).should("be.visible").click();
  });

  cy.origin("https://department.inciclebeta.com/", () => {

    //cy.visit("https://department.inciclebeta.com/");

    //exceção a erros//
    Cypress.on("uncaught:exception", () => false);

    cy.contains("Dashboard", { timeout: 30000 }).should("be.visible");
    //cy.wait(1000);
    cy.contains("Colaboradores", { timeout: 30000 }).should("be.visible").click();
    cy.get('[data-cy="InputBase-ActiveCollaborators"]', { timeout: 30000 })
      .should("be.visible")
      .type("Erling Haaland");

    //cy.wait(500);
    cy.contains("Erling Haaland", { timeout: 30000 }).should("be.visible").click();
    //cy.wait(1000);
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
///////////////////////////////////////////////////////////////////////////////////
describe.skip("Hire collaborator", () => {
  it("Hire collaborator via company account", () => {
    cy.visit("https://account.inciclebeta.com/");
    cy.get('#root input[type="email"]').type("incicle@incicle.com");
    cy.get('#root input[type="password"]').type("123");
    cy.get('#root button[type="submit"]').click();

    cy.origin("https://social.inciclebeta.com", () => {
      //exceção a erros//
      Cypress.on("uncaught:exception", () => false);

      cy.contains("Feed", { timeout: 30000 }).should("be.visible");
      cy.wait(5000);

      //Clicando no menu de módulos
      cy.get(".incicleheader-desktopmodules-label" ,{ timeout: 30000 }).should("be.visible").click();
      //cy.wait(1000);

      //Clicando no botão Departamento Pessoal
      cy.contains("Departamento Pessoal", { timeout: 30000 }).should("be.visible").click();
    });

    //Acessando Depto Pessoal
    cy.origin("https://department.inciclebeta.com/", () => {

      //exceção a erros//
      Cypress.on("uncaught:exception", () => false);

      cy.contains("Dashboard", { timeout: 30000 }).should("be.visible");

      //cy.wait(1000);

      cy.contains("Colaboradores", { timeout: 30000 }).should("be.visible").click();
      cy.contains("Cadastrar Colaborador").click();
      cy.contains("Adicionar individualmente").click();
      cy.contains("Nome do colaborador")
        .parent()
        .find("input")
        .type("Erling Haaland");
      cy.contains("E-mail").parent().find("input").type("samyhyko@fxzig.com");
      cy.contains("Enviar convite").click();

      cy.contains(
        "Os convites de vinculação foram enviados com sucesso"
      ).should("be.visible");
    });
  });
});
///////////////////////////////////////////////////////////////////////////////////
describe.skip("Accept hiring", () => {
  it("Accept hiring via person account", () => {
    cy.visit("https://account.inciclebeta.com/");
    cy.get('#root input[type="email"]').type("samyhyko@fxzig.com");
    cy.get('#root input[type="password"]').type("1234567890");
    cy.get('#root button[type="submit"]').click();
    cy.wait(1000)

    cy.origin("https://social.inciclebeta.com", () => {
      //exceção a erros//
      Cypress.on("uncaught:exception", () => false);

      cy.contains("Feed", { timeout: 15000 }).should("be.visible");
      cy.wait(5000);

      cy.contains("Responda a solicitação de vinculação da empresa").click()
      cy.wait(5000)
    });

    cy.contains("Confirmar vínculo").click()
    cy.contains("Voltar para o sistema").click()

  })
})