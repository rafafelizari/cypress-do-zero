describe("Teste de login", () => {
it("Acessar projeto específico e criar tarefas", () => {
    cy.visit("https://projects.inciclebeta.com/views/kanban/a08bf18c-febb-4ad4-8956-a5de6cafa7b5");
    cy.get('#root input[type="email"]').type("tedagaw982@reifide.com");
    cy.get('#root input[type="password"]').type("123");
   cy.get('#root button[type="submit"]');
});
});