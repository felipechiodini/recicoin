<template>
  <Header />
  <div class="p-3">
    <div class="d-flex align-items-end mb-3">
      <h5>Minhas Retiradas</h5>
    </div>
    <div class="d-flex flex-column gap-3">
      <div class="d-flex flex-column p-3 rounded border" v-for="(withdraw, key) in withdraws" :key="key">
        <span>{{ withdraw.status }}</span>
        <span>{{ withdraw.value }}</span>
        <span>{{ withdraw.requested_at }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import api from '@/js/api.js'

export default {
  components: {
    Header
  },
  data: () => {
    return {
      withdraws: []
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      api.get('withdraw')
        .then(({ data }) => this.withdraws = data.withdraws)
    }
  }
}
</script>