<template>
    <div class="message">
        {{ messageData?.message }}
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
.message {
    color: red;
}
</style>
