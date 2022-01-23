<template>
  <label>Type here:</label>
  <input
    v-model="input"
    class="search-bar"
    ref="input"
    tabindex="0"
    @keydown.enter="sendMessage"
  />
</template>

<script>
export default {
  name: "UserInput",
  emits: ["sendMessage"],
  data() {
    return {
      input: "",
    };
  },
  updated() {
    this.$refs.input.focus();
  },
  methods: {
    sendMessage() {
      console.log("sending message");
      this.$emit("send-message", this.input);
      this.input = "";
    },
  },
};
</script>

<style scoped>
.message {
  color: red;
}
.search-bar {
  margin: 10px;
}
</style>
