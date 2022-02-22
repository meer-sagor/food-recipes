<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("modalClose");
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
.modal {
  padding: 1rem;
  color: black;
  width: 50%;
  margin: 10rem auto;
  background: white;
  border-radius: 0.3em;
  overflow: auto;
}
</style>
