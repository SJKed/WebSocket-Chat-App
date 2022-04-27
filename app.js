const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 3000
const io = require('socket.io')(server)
const path = require('path')

app.use(express.static(path.join(__dirname + '/public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

io.on('connection', socket => {
    console.log('Some client connected with the ID: ' + socket.id)
    socket.on('chat', message => {
        console.log('From client: ', message)
        io.emit('chat', message)
    })
    socket.on("setName", name => {
        console.log("name:" + name)
        socket.emit('setName', name)
        //redirect to chat page
        socket.emit('redirect', '/chat.html')
    })
})

server.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})

