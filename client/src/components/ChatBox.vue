<template>
    <div class="container">
        <div id="chat" class="chat-box card">
            <span v-if="hasMessages" class="card-body">
                <Message :class="{'message-container sent float-end my-1 text-end':message.user == user, 'message-container received float-start my-1 text-start': message.user != user}" v-for="message in messages" :key="message.id" :messageData="message">
                </Message>
            </span>
            <div v-else class="no-messages">
                <Message :messageData="{message:'No messages yet'}"></Message>
            </div>
        </div>
        <div id="footer" class="card-footer">
            <UserInput @send-message="sendMessageToServer"></UserInput>
        </div>
    </div>
</template>

<script>
import Message from './Message.vue'
import UserInput from './UserInput.vue'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'ChatBox',
  components: {
    Message,
    UserInput
  },
  data() {
      return {
        user: 'Nemo',
        messages: [],
        ws: null,
        serverUrl: "ws://localhost:3000/ws"
      }
  },
  computed: {
    hasMessages() { 
        console.log(this.messages);
        return this.messages.length > 0; 
    }
  },
mounted() {
    this.connectToWebsocket()
  },
  methods: {
    connectToWebsocket() {
      this.ws = new WebSocket(this.serverUrl)
      this.ws.addEventListener('open', (event) => {
        console.log('data from websocket:', event)
      })
      this.ws.addEventListener('message', (event) => {
        console.log('data from websocket-message:', event)
      })
    },
    sendMessageToServer(message) {
        const messagePayload = {
            user: this.user,
            message: message,
            id: uuidv4(),
            created_on: Date.now()
        };
        // const responsePayload = {
        //     user: 'Pierre',
        //     message: message,
        //     id: uuidv4(),
        //     created_on: Date.now()
        // };
        this.messages.push(messagePayload);
        setTimeout(()=> {
            var objDiv = document.getElementById("chat");
            objDiv.scrollTo({top: objDiv.scrollHeight})
        })
        this.ws.send('SEND_MESSAGE', messagePayload)
    }
  }
}
</script>

<style>
.chat-box {
    min-height: 10vh;
    max-height: 35vh;
    overflow-y: scroll;
}
.message-container {
    height: auto; 
    width: 100%;
    display: block;
    position: relative;
}
.message-container.sent p {
    margin-left:25%;
    width: auto;
    background-color: aqua;
    padding: 8px;
    border-radius: 6px;
}

.message-container.received p {
    margin-right:25%;
    width: auto;
    background-color: darkgray;
    padding: 8px;
    border-radius: 6px;
}

.chat-box input {
    margin: 5px;
    position: static;
}
</style>
