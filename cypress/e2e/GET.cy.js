it('Consultar o pet por STATUS', () => {
 
  cy.request({
          method: "GET", //Método
          url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=pending'

  }).then((response) => { 
      expect(response.status).to.eq(200)
  })

})

it('Consultar o pet por ID', () => {

  cy.request({
          method: "GET", //Método
          url: 'https://petstore.swagger.io/v2/pet/9223372036854742000'

  }).then((response) => { 
      expect(response.status).to.eq(200)
  })

})