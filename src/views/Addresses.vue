<template>
  <Header />
  <div class="p-3">
    <h5>Meus Endereços</h5>
    <div class="d-flex flex-column gap-3">
      <div class="border p-3" v-for="(address, key) in [1,2,3,4,5,6,7,8,9,10]" :key="key">
        {{ address }}
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>