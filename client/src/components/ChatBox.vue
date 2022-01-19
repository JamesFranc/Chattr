<template>
    <div class="chat-box">
        <div v-if="hasMessages">
            <Message v-for="message in messages" :key="message.id" :messageData="message">
            </Message>
        </div>
        <div v-else class="no-messages">
            <Message :messageData="{message:'No messages yet'}"></Message>
        </div>
        <UserInput @send-message="sendMessageToServer"></UserInput>
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
        this.messages.push(messagePayload);
        this.ws.send('SEND_MESSAGE', messagePayload)
    }
  }
}
</script>

<style scoped>
.message {
    color: red;
}
</style>
