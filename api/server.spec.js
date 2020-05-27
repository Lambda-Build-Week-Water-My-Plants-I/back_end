const request = require('supertest');
const server = require('./server.js');

describe('server in index.js', () => {
  // it('should return with the testing env', () => {
  //   expect(process.env.DB_ENV).toBe('testing');
  //   return;
  // });
  describe('GET /', () => {
    it('should return welcome message: Welcome to the Server!', () => {
      return request(server).get('/')
        .then(res => {
          expect(res.text).toMatch('<h1 style="text-align:center;">Welcome to the server!</h1>');
        });
    });
    it('should return a status code of 200', () => {
      return request(server).get('/')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
