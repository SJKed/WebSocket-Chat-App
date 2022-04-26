const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { setupWebSocketServer } = require('./websockets/index.js');
const {reqHandlers} = require('./controllers/reqHandlers.js');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

setupWebSocketServer(server)

app.post('/setname', (req, res) => {
    reqHandlers.setName(req, res);
});
server.listen(8080, () => console.log('wowie'))