<template>
  <div class="p-5">
    <h5>ADMINISTRAÇÃO</h5>
    <h6>Listagem de pedidos de coleta</h6>
    <div calss="p-5">
      <template v-if="collects.length > 0">
        <table class="table">
          <tr v-for="(collect, key) in collects" :key="key">
            <td>{{ collect?.user.name }}</td>
            <td>{{ collect.status }}</td>
            <td>
              <button class="btn btn-sm btn-primary" @click="accept(collect)">
                Aceitar
              </button>
            </td>
          </tr>
        </table>
      </template>
      <span v-else>Não existem pedidos...</span>
    </div>
  </div>
</template>

<script>
import api from '@/js/admin.js'

export default {
  data: () => {
    return {
      collects: []
    }
  },
  mounted() {
    this.loadRequests()
  },
  methods: {
    loadRequests() {
      api.get('collect/list')
        .then(({ data }) => this.collects = data.collects)
        .catch(err => alert('deu erro'))
    },
    accept(collect) {
      api.post(`collect/${collect.id}/accept`)
        .then(({ data }) => {
          this.loadRequests()
          alert(data.message)
        })
    }
  }
}

</script>

<style lang="scss" scoped>

@import "../../node_modules/bootstrap/scss/bootstrap.scss";

</style>

