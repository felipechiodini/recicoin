<template>
  <div class="dfpwoajfwafwpadjpwa">
    <button class="btn-open-sidebar" @click="$sidebar.open()">
      <i class="pi pi-bars"></i>
    </button>
    <h3 class="m-0">
      Olá, {{ firstName }}
    </h3>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useUserStore } from '@/stores/user'

export default {
  computed: {
    ...mapState(useUserStore, ['firstName']),
  }
}

</script>

<style scoped>

  .dfpwoajfwafwpadjpwa {
    display: flex;
    background-color: rgb(110, 43, 43);
  }

  .btn-open-sidebar {
    border: none;
    color: #000;
    background-color: transparent
  }


</style>