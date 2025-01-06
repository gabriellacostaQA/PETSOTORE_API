it('Deletar um pet pelo ID', () => {
  const petId = 1; // ID do pet a ser deletado

  cy.request({
    method: "DELETE", // Método
    url: `https://petstore.swagger.io/v2/pet/${petId}`, // Endpoint com o ID do pet
    headers: {
      "Content-Type": "application/json", // Adiciona o tipo de conteúdo
      "accept": "application/json"         // Esperando resposta em JSON
    //"api_key": "chave aqui"
    }
  }).then((response) => {
    // Validações da resposta
    expect(response.status).to.eq(200); // Confirma que o status é 200

    // Validação condicional do corpo da resposta
    if (response.body && response.body.message) {
      expect(response.body.message).to.eq(String(petId)); // A mensagem de resposta deve conter o ID deletado
    } else {
      cy.log("Resposta sem corpo ou propriedade 'message'.");
    }
  });
});



/*it('Deletar um pet pelo ID', () => {
    const petId = 1; // ID do pet a ser deletado
  
    cy.request({
      method: "DELETE", // Método
      url: 'https://petstore.swagger.io/v2/pet/1', // Endpoint com o ID do pet
    
    }).then((response) => {
      // Validações da resposta
      expect(response.status).to.eq(200); // Confirma que o status é 200
      expect(response.body.message).to.eq(String(petId)); // A mensagem de resposta deve conter o ID deletado
    });
  });*/