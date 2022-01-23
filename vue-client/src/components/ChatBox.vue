<template>
  <div class="container">
    <div class="alert-success">Logged in as {{ selectedUser }}</div>
    <div id="chat" class="chat-box card">
      <span v-if="hasMessages" class="card-body">
        <Message
          v-for="message in messages"
          class="message-container my-1"
          :class="{
            'sent float-end text-end': message.user == selectedUser,
            'received float-start text-start': message.user != selectedUser,
          }"
          :key="message.id"
          :messageData="message"
        >
          <span
            v-if="message.user"
            class="user-initial"
            :class="{
              sent: message.user == selectedUser,
              received: message.user != selectedUser,
            }"
            >{{ message.user.charAt(0).toUpperCase() }}</span
          >
        </Message>
      </span>
      <div v-else class="no-messages">
        <Message :messageData="{ message: 'No messages yet' }"></Message>
      </div>
    </div>
    <div id="footer" class="card-footer">
      <UserInput @send-message="sendMessageToServer"></UserInput>
    </div>
  </div>
</template>

<script>
import Message from "./Message.vue";
import UserInput from "./UserInput.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "ChatBox",
  components: {
    Message,
    UserInput,
  },
  props: {
    selectedUser: String,
  },
  data() {
    return {
      messages: [],
      ws: null,
      serverUrl: "ws://localhost:3001/ws",
    };
  },
  computed: {
    hasMessages() {
      return this.messages.length > 0;
    },
  },
  mounted() {
    this.connectToWebsocket();
  },
  methods: {
    connectToWebsocket() {
      this.ws = new WebSocket(this.serverUrl);
      this.ws.addEventListener("message", (event) => {
        let incomingMessage = JSON.parse(event.data).data;
        console.log(incomingMessage);
        if (incomingMessage.user !== this.selectedUser) {
          this.updateChatBodyScroll();
          this.messages.push(incomingMessage);
        }
      });
    },
    sendMessageToServer(message) {
      let messageData = {
        user: this.selectedUser,
        message: message,
        id: uuidv4(),
        created_on: Date.now(),
      };
      const messagePayload = {
        type: "send_message",
        data: messageData,
      };
      this.messages.push(messageData);
      this.updateChatBodyScroll();
      this.ws.send(JSON.stringify(messagePayload));
    },
    updateChatBodyScroll() {
      setTimeout(() => {
        var objDiv = document.getElementById("chat");
        objDiv.scrollTo({ top: objDiv.scrollHeight });
      });
    },
  },
};
</script>

<style>
.card-header {
  position: sticky;
}
.chat-box {
  min-height: 10vh;
  max-height: 35vh;
  overflow-y: scroll;
}
.message-container {
  height: auto;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
}

.message-container.sent {
  justify-content: flex-end;
}

.message-container.received {
  justify-content: flex-start;
}

.message-container.sent p {
  margin-left: 25%;
  width: auto;
  background-color: aqua;
  padding: 8px;
  border-radius: 6px;
}

.message-container.received p {
  margin-right: 25%;
  width: auto;
  background-color: darkgray;
  padding: 8px;
  border-radius: 6px;
}

.chat-box input {
  margin: 5px;
  position: static;
}
.card-footer {
  text-align: end;
}
.user-initial {
  position: absolute;
  top: 8px;
  font-weight: 700;
}
.user-initial.sent {
  right: -6px;
}
.user-initial.received {
  left: -6px;
}
</style>
