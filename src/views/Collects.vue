<template>
  <div>
    <h6>Coletas</h6>
    <div v-if="loading === false">
      <div v-for="(collect, key) in collects" :key="key">
        {{ collect.id }}
        {{ collect.status }}
        {{ collect.requested_at }}
        {{ collect.address }}
      </div>
    </div>
    <span v-else>Carregando...</span>
  </div>
</template>

<script>
import api from '@/js/api.js'

export default {
  data: () => {
    return {
      loading: false,
      collects: []
    }
  },
  mouted() {
    this.load()
  },
  methods: {
    load() {
      this.loading = true
      api.get('collect')
        .then(({ data }) => this.collects = data.collects)
        .catch(err => console.log('erro', err))
        .finally(() => this.loading = false)
    }
  }
}
</script>