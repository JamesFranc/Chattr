<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ChatBox/>
</template>

<script>
import ChatBox from './components/ChatBox.vue'

export default {
  name: 'App',
  components: {
    ChatBox
  },
  data(){
    return {
      ws: null,
      serverUrl: "ws://localhost:3000/ws"
    }
  },
  mounted() {
    this.connectToWebsocket()
  },
  methods: {
    connectToWebsocket() {
      this.ws = new WebSocket(this.serverUrl);
      this.ws.addEventListener('open', (event) => {
        console.log('data from websocket:', event)
      })
      this.ws.addEventListener('message', (event) => {
        console.log('data from websocket-message:', event)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
