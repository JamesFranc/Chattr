<template>
    <div class="message">
        {{ msg }}
    </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.message {
    color: red;
}
</style>
