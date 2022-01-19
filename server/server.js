const express = require('express')
const http = require('http')
const WebSocket = require('ws')

// import models, {connectDb} from './models'
// const eraseDbOnSync = true
const app = express()

const server = http.createServer(app)

const socketServer = new WebSocket.Server({ server })

const port = process.env.PORT ? process.env.port : 3000

socketServer.on('connection', (webSocket) => {
    webSocket.binaryType = "blob";
    webSocket.on('message', (message) => {
        const messageJSON = JSON.parse(message)
        webSocket.send(`message recieved`)
        socketServer.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(messageJSON))
            }
        });
    });

    webSocket.send('Connection to WebSocket Server established!');
})

server.listen(port, () => {
    console.log(`Server listening on port ${server.address().port}`)
});
