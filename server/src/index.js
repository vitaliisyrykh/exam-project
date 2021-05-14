const http = require('http');
require('./server/dbMongo/mongoose');
require('dotenv').config();
const app = require('./app')();

const controller = require('./socketInit');


const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`)
);

controller.createConnection(server); // websockets
