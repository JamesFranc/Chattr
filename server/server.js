const express = require('express')
const http = require('http')
const WebSocket = require('ws')

const app = express()

const server = http.createServer(app)

const socketServer = new WebSocket.Server({ server })

const port = process.env.PORT ? process.env.port : 3000

app.get('/', (req, res) => {
    console.log(`Route hit: /`);
    res.send('Hello!');
})

socketServer.on('connection', (webSocket) => {
    webSocket.on('message', (message) => {
        console.log(`message received: `, message);
        webSocket.send(`We got your message`);
    })
    webSocket.send('Connection to WebSocket Server established!');
})

server.listen(port, () => {
    console.log(`Server listening on port ${server.address().port}`)
})
