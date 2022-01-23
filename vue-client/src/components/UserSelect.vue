<template>
  <div class="container">
    <label>Please select a user:</label>
    <select v-model="selected" class="form-select">
      <option value="Nemo">Nemo</option>
      <option value="Pierre">Pierre</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "UserSelect",
  data() {
    return {
      selected: "",
    };
  },
  mounted() {
    console.log(this.selected);
  },
  updated() {
    this.$emit("user-selected", this.selected);
  },
};
</script>

<style scoped></style>
