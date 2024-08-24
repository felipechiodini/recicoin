<template>
  <Header />
  <div class="p-3">
    <div class="d-flex align-items-end mb-3">
      <h5>Meus Endereços</h5>
      <Button class="ms-auto" @click="modal = true">
        Novo Endereço
      </Button>
    </div>
    <div class="d-flex flex-column gap-3">
      <div class="border rounded p-3" v-for="(address, key) in addresses" :key="key">
        <div class="d-flex flex-column">
          <span>{{ address.cep }}</span>
          <span>{{ address.street }}</span>
          <span>{{ address.neiborhood }}</span>
          <span>{{ address.city }}</span>
          <span>{{ address.state }}</span>
        </div>
      </div>
    </div>
  </div>
  <NewAddress v-model="modal" @click="load()" />
</template>

<script>
import Header from '@/components/Header.vue'
import Button from 'primevue/button'
import NewAddress from '@/components/NewAddress.vue'
import api from '@/js/api.js'

export default {
  components: {
    Header,
    Button,
    NewAddress
  },
  data: () => {
    return {
      loading: false,
      addresses: [],
      modal: false
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      this.loading = true
      api.get('address')
        .then(({ data }) => this.addresses = data.addresses)
        .catch(err => console.log('deu erro', err))
        .finally(() => this.loading = false)
    }
  }
}
</script>