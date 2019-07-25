### Automation for Stars Wars API using Cypress

##### Cypress (https://www.cypress.io/)

----
##### Endpoints
`https://swapi.co/api/people/1/`

`https://swapi.co/api/planets/1/`


### Validations
##### Status Code: 200

##### Response:
People:
```javascript
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male"
```

Planet:
```javascript
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male"
```

##### Run Tests
`npm run cypress:open`