<template>
  <Header />
  <div class="p-3">
    <div class="d-flex align-items-end mb-3">
      <h5>Minhas Coletas</h5>
      <Button class="ms-auto" @click="openModalRequest()">
        Solicitar Coleta
      </Button>
    </div>
    <div class="d-flex flex-column gap-3" v-if="loading === false">
      <div class="border p-3 rounded" v-for="(collect, key) in collects || [{d: 'dwa'},{d: 'dwa'}]" :key="key" @click="openDetails(collect)">
        <div class="d-flex justify-content-between">
          <strong style="font-size: 1.5rem;">#{{ collect.id }}</strong>
          <span>{{ collect.status }}</span>
          <span>{{ collect.requested_at }}</span>
        </div>
        <hr>
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
    <span v-else>Carregando...</span>
    <RequestCollect v-model="kkkkkkkk" />
    <CollectDetails v-model="modalDetail" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import RequestCollect from '@/components/RequestCollect.vue'
import Button from 'primevue/button'
import CollectDetails from '@/components/CollectDetails.vue'
import Api from '@/js/api.js'

export default {
  components: {
    Header,
    RequestCollect,
    Button,
    CollectDetails
  },
  data: () => {
    return {
      loading: false,
      collects: [],
      modalDetail: null,
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
        .finally(() => this.loading = false)
    },
    openModalRequest() {
      this.kkkkkkkk = true
    },
    openDetails(collect) {
      this.modalDetail = collect.id
    }
  }
}
</script>