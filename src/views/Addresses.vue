<template>
  <Header />
  <div class="p-3">
    <h5>Meus Endereços</h5>
    <div class="d-flex flex-column gap-3">
      <div class="border p-3" v-for="(address, key) in addresses" :key="key">
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
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  },
  data: () => {
    return {
      loading: false,
      addresses: []
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