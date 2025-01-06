describe('Atualização do nome do Pet via API', () => {
  it('Deve atualizar com sucesso o nome do pet', () => {
    // URL da API
    const apiUrl = 'https://petstore.swagger.io/v2/pet';

    // Corpo da requisição com o novo nome do pet
    const petData = {
      id: 0,
      category: {
        id: 0,
        name: 'string'
      },
      name: 'Charly', // Novo nome do pet
      photoUrls: ['string'],
      tags: [
        {
          id: 0,
          name: 'string'
        }
      ],
      status: 'available'
    };

    // Enviando a requisição PUT
    cy.request({
      method: 'PUT',
      url: apiUrl,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: petData
    }).then((response) => {
      // Validações da resposta
      expect(response.status).to.eq(200); // Verifica se o status HTTP é 200
      expect(response.body).to.have.property('name', 'Charly'); // Confirma que o nome foi atualizado
    });
  });
});
