<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <UserSelect v-show="user == null" @user-selected="setUser" />
  <ChatBox v-show="user !== null" :selectedUser="user"/>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import ChatBox from './components/ChatBox.vue'
import UserSelect from './components/UserSelect.vue'
export default {
  name: 'App',
  components: {
    ChatBox,
    UserSelect
  },
  data() {
    return {
      user: null
    }
  },
  methods: {
    setUser(user) {
      this.user = user;
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
