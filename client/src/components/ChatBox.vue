<template>
    <div class="chat-box">
        <div v-if="hasMessages">
            <Message v-for="message in messages" :key="message.id">
                {{ message.msg }}
            </Message>
        </div>
        <div v-else class="no-messages">
            <Message msg="No messages yet"></Message>
        </div>
        <UserInput></UserInput>
    </div>
</template>

<script>
import Message from './Message.vue'
import UserInput from './UserInput.vue'
export default {
  name: 'ChatBox',
  components: {
    Message,
    UserInput
  },
  props: {
    user: undefined
  },
  data() {
      return {
        messages: [],
        input: ''
      }
  },
  computed: {
    hasMessages() { 
        return this.messages.length > 0; 
    }
  }
}
</script>

<style scoped>
.message {
    color: red;
}
</style>
