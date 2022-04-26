const {Server} = require('socket.io')
const registerMyHandler = require('./myHandler.js')

module.exports = {
    setupWebSocketServer(server){
        const io = new Server(server);
        io.on('connection', (socket) => {
            console.log('User Connected with ID: ' + socket.id);
        })
        io.on('disconnection', (socket) => {
            console.log('User Disconnected with ID: ' + socket.id);
        })
    }
}