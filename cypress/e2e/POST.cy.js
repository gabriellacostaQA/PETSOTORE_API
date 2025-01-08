it('Criar um novo petID', () => {
    const petData = {
      id: 3,
      name: "Buddy",
      status: "available"
    };

    cy.api({
      method: "POST", //Método 
      url: 'https://petstore.swagger.io/v2/pet', // Endpoint para criar um novo pet
      body: petData, // Corpo da requisição com os dados do pet
      headers: {
        'Content-Type': 'application/json', // Configuramos o tipo de conteúdo como JSON
      },
    }).then((response) => { // Validamos a resposta
      
      expect(response.status).to.eq(200); // Status esperado
      expect(response.body).to.have.property('id', petData.id); // Confirmamos que o ID foi retornado
      expect(response.body).to.have.property('name', petData.name); // Confirmamos que o nome foi retornado
      expect(response.body).to.have.property('status', petData.status); // Confirmamos que o status foi retornado
    });
});