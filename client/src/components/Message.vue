<template>
    <div class="container">
        <p class="message">
            {{ messageData?.message }}
        </p>
    </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
      messageData: Object
  }
}
</script>

<style scoped>
/* .message {
    color: red;
} */
</style>
