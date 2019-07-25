describe('Stars Wars', () => {
    it('GET First People', () => {

        cy.request('api/people/1/')        
        .then((response) => {
          expect(response.status).to.eq(200),
          expect(response.body).to.have.property("name", "Luke Skywalker")
          expect(response.body).to.have.property("height", "172"),
          expect(response.body).to.have.property("mass", "77"),
          expect(response.body).to.have.property("hair_color", "blond"),
          expect(response.body).to.have.property("skin_color", "fair"),
          expect(response.body).to.have.property("eye_color", "blue"),
          expect(response.body).to.have.property("birth_year", "19BBY"),
          expect(response.body).to.have.property("gender", "male")          
         })

    }),

    it('GET First Planet', () => {

        cy.request('api/planets/1/')        
        .then((response) => {
          expect(response.status).to.eq(200),
          expect(response.body).to.have.property("name", "Tatooine"),
          expect(response.body).to.have.property("rotation_period", "23"),
          expect(response.body).to.have.property("orbital_period", "304"),
          expect(response.body).to.have.property("diameter", "10465"),
          expect(response.body).to.have.property("climate", "arid"),
          expect(response.body).to.have.property("gravity", "1 standard"),
          expect(response.body).to.have.property("terrain", "desert"),
          expect(response.body).to.have.property("surface_water", "1"),
          expect(response.body).to.have.property("population", "200000")      
         })

    })

  })