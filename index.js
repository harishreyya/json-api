const jsonServer = require("json-server"); 
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4321;

server.use(middlewares);
server.use(router);

server.listen(port);
// deployed json server "https://json-api-xcvj.onrender.com/"