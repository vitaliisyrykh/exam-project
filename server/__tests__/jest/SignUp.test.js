const { ExpectationFailed } = require('http-errors');
const request = require('supertest');
const app = require('../../src/app')();
const db = require('../../src/server/models');

describe('Sign up test', () => {
  test('user must be created', async done => {
    const response =  await app.post('/api/sign-up').send({
      firstName: 'test',
      lastName:'testovich',
      displayName: 'test',
      password:'kajssbfkjabf',
      email:'sajkfgb@mail.com',
      role:'customer'
    });
    expect(response.statusCode).toBe()
  });
  
  
});

