<template>
  <div class="dfpwoajfwafwpadjpwa">
    <button class="btn-open-sidebar" @click="$sidebar.open()">
      <i class="pi pi-bars"></i>
    </button>
    <h3 class="ms-2 mb-0">
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
    padding: 1.5rem 1rem;
  }

  .btn-open-sidebar {
    border: none;
    color: #000;
    background-color: transparent
  }


</style>