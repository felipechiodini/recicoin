<template>
  <div class="modal" :class="{ 'show': modelValue }">
    <slot />
  </div>
</template>

<script>

export default {
  props: {
    modelValue: {
      type: Boolean
    }
  }
}

</script>

<style scoped>

.modal {
  display: none;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  transition: all 1s;
}

.modal.show {
  display: block;
}

</style>