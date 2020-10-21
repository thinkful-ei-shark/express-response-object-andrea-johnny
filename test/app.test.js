const supertest = require('supertest')
const app = require('../app')

describe('GET /app', () => {
    it('should return an array of apps as json', () => {
       return supertest(app)
       .get('/apps')
       .expect(200)
       .expect('content-type', /json/)
    })
})
