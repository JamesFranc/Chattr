<template>
    <input v-model="input" @keydown.enter="sendMessage" />
</template>

<script>
export default {
  name: 'UserInput',
  data() {
      return {
          input: ''
      }
  },
  methods: {
      sendMessage() {
          console.log("sending message");
          this.$emit('send-message', this.input);
          this.input = '';
      }
  }
}
</script>

<style scoped>
.message {
    color: red;
}
</style>
