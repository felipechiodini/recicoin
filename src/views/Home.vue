<template>
  <Header />
  <div class="p-4 shadow-lg rounded mx-2 my-3 row">
    <div class="col p-0">
      <h6 class="m-0 waiohfwaiufhwa">
        Saldo
      </h6>
      <span class="balance">
        {{ balance }}
      </span>
    </div>
    <Button @click="show = true" class="col-auto" size="small">
      Solicitar Resgate
    </Button>
  </div>
  <div class="d-flex mx-2 mb-3 mt-5">
    <h5>Resumo</h5>
  </div>
  <div class="d-flex flex-column gap-3 mx-4">
    <template v-if="transactions.length">
      <div class="row align-items-center rounded border py-3 px-1" v-for="(transaction, key) in transactions" :key="key" @click="modalCollectDetails = true">
        <span>
          {{ transaction.type_label }}
        </span>
        <span>
          {{ transaction.value }}
        </span>
        <span>
          {{ transaction.date }}
        </span>
        <p v-if="transaction.description">
          {{ transaction.description }}
        </p>
      </div>
    </template>
    <template v-else>
      Não encontramos nenhum item...
    </template>
  </div>
  <Withdraw v-model="show" />
  <CollectDetails v-model="modalCollectDetails" />
</template>

<script>
import Header from '@/components/Header.vue';
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import Avatar from 'primevue/avatar';
import Button from 'primevue/button'
import Badge from 'primevue/badge'
import Withdraw from '@/components/Withdraw.vue'
import NewCollect from '@/components/RequestCollect.vue'
import CollectDetails from '@/components/CollectDetails.vue'
import { mapState } from 'pinia'
import { useUserStore } from '@/stores/user.js'
import api from '@/js/api.js'

export default {
  components: {
    Header,
    FloatLabel,
    InputText,
    Avatar,
    Button,
    Badge,
    Withdraw,
    NewCollect,
    CollectDetails
  },
  data: () => {
    return {
      show: false,
      modalCollectDetails: false,
      email: null,
      password: null,
      balance: null,
      loading: false,
      transactions: [],
    }
  },
  computed: {
    ...mapState(useUserStore, ['firstName']),
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      this.loading = true
      api.get('extract')
        .then(({ data }) => {
          this.transactions = data.transactions
          this.balance = data.balance
        })
        .catch(err => console.log('dd', err))
        .finally(() => this.loading = false)
    },
    appendExtract(collect) {
      this.transactions.push(collect)
    }
  }
}

</script>

<style scoped>

.fpwakfpowafpowjnaofwa {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.balance {
  color: black;
  font-size: 2rem;
}


.waiohfwaiufhwa {
  font-size: .9rem;
}

</style>