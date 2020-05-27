const request = require('supertest');
const server = require('../server.js');

// DEFINING TEST VARS
const registered = {
  username: 'TheBlob',
  password: 'thegreatblob'
};

describe('users-router.js', () => {
// GET USERS
  describe('GET /', () => {
    it('should return a status 200 when logged in user gets users', () => {
     return request(server)
       .post('/api/auth/login')
       .send(registered)
       .then(res => {
         return request(server)
           .get('/api/users')
           .set('authorization', res.body.token)
           .then(res => {
             expect(res.status).toBe(200);
           });
       });
   });
  });
// GET USER BY ID
  describe('GET /:id', () => {
    it('should return a status 200 when logged in user gets a user by ID', () => {
     return request(server)
       .post('/api/auth/login')
       .send(registered)
       .then(res => {
         return request(server)
           .get('/api/users/1')
           .set('authorization', res.body.token)
           .then(res => {
             expect(res.status).toBe(200);
           });
       });
   });
  });
// GET PLANTS BY USER
  describe('GET /:id/plants', () => {
    it('should return a status 200 when logged in user gets a user by ID', () => {
     return request(server)
       .post('/api/auth/login')
       .send(registered)
       .then(res => {
         return request(server)
           .get('/api/users/1/plants')
           .set('authorization', res.body.token)
           .then(res => {
             expect(res.status).toBe(200);
           });
       });
   });
  });
});
