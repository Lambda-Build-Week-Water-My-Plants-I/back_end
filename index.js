const express = require('express');
const session = require('express-session');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router.js');
const usersRouter = require('./api/users/users-router.js');
const plantsRouter = require('./api/plants/plants-router.js');
const restricted = require('./auth/restricted-middleware.js');

const server = express();
      server.use(express.json());
      server.use(cors());
      server.use(helmet());
      server.use('/api/auth', authRouter);
      server.use('/api/users', restricted, usersRouter);
      server.use('/api/plants', restricted, plantsRouter);

server.get('/', (req, res) => {
  res.send(`
    <h1 style="text-align:center;">Welcome to the server!</h1>
  `);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`\n == SERVER LISTENING ON PORT: ${PORT} ==`);
});
