<template>
  <div class="sidebar" :class="{ 'show': $sidebar.opened.value }">
    <div class="header">
      <button class="btnclose" @click="$sidebar.close()">
        <i class="pi pi-times"></i>
      </button>
      <a class="btn" @click="goTo('collects')">
        Coletas
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(name) {
      this.$router.push({ name })
      this.$sidebar.close()
    }
  }
}

</script>

<style scoped>

.header {
  background-color: var(--p-button-primary-background);
  width: 100%;
  padding: 1rem;
}

.sidebar {
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

.sidebar.show {
  display: block;
}

.btnclose {
  display: block;
  margin-left: auto;
  border: none;
  background-color: transparent;
}

</style>