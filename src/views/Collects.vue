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
    <Button @click="openModalRequest()">
      Solicitar Coleta
    </Button>
    <RequestCollect v-model="kkkkkkkk" />
  </div>
</template>

<script>
import RequestCollect from '@/components/RequestCollect.vue';
import api from '@/js/api.js'

export default {
  components: {
    RequestCollect
  },
  data: () => {
    return {
      loading: false,
      collects: [],
      kkkkkkkk: false
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
    },
    openModalRequest() {
      this.kkkkkkkk = true
    }
  }
}
</script>