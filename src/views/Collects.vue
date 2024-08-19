<template>
  <Header />
  <div class="p-3">
    <div class="d-flex align-items-end">
      <h5>Minhas Coletas</h5>
      <Button class="ms-auto" @click="openModalRequest()">
        Solicitar Coleta
      </Button>
    </div>
    <div v-if="loading === false">
      <div class="d-flex flex-column" v-for="(collect, key) in collects" :key="key">
        <div>
          {{ collect.id }}
          {{ collect.status }}
          {{ collect.requested_at }}
        </div>
        <div>
          <h6>Endereço</h6>
          <div class="d-flex flex-column">
            <span>{{ collect.address.cep }}</span>
            <span>{{ collect.address.street }}</span>
            <span>{{ collect.address.number }}</span>
            <span>{{ collect.address.city }}</span>
            <span>{{ collect.address.state }}</span>
            <span>{{ collect.address.complement }}</span>
          </div>
        </div>
      </div>
    </div>
    <span v-else>Carregando...</span>
    <RequestCollect v-model="kkkkkkkk" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import RequestCollect from '@/components/RequestCollect.vue'
import Button from 'primevue/button'
import Api from '@/js/api.js'

export default {
  components: {
    Header,
    RequestCollect,
    Button,
  },
  data: () => {
    return {
      loading: false,
      collects: [],
      kkkkkkkk: false
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      this.loading = true
      Api.get('collect')
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