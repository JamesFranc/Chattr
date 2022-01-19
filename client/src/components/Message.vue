<template>
    <div class="container">
        <p class="message">
            {{ messageData?.message }}
        </p>
        <slot></slot>
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

<style scoped></style>
