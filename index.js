const express = require('express');
const session = require('express-session');
const helmet = require('helmet');
const cors = require('cors');

const server = express();
      server.use(express.json());
      server.use(cors());
      server.use(helmet());

server.get('/', (req, res) => {
  res.send(`
    <h1 style="text-align:center;">Welcome to the server!</h1>
  `);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`\n == SERVER LISTENING ON PORT: ${PORT} ==`);
});
