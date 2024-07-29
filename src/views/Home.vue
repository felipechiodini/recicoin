<template>
  <div class="container pb-5">
    <div class="row px-2 py-4">
      <div class="col-auto">
        <h3 class="m-0">Olá, {{ firstName }}</h3>
      </div>
      <div class="col-auto ms-auto">
        <Avatar shape="circle" label="F" @click="$router.push({ name: 'profile' })" />
      </div>
    </div>
    <div class="p-4 shadow-lg rounded mx-2 my-3 row">
      <div class="col p-0">
        <h6 class="m-0 waiohfwaiufhwa">Seus Pontos</h6>
        <span class="points">{{ points }}</span>
      </div>
      <Button @click="show = true" class="col-auto" size="small">
        Solicitar Resgate
      </Button>
    </div>
    <div class="d-flex mx-2 mb-3 mt-5">
      <h5>Extrato</h5>
      <Button class="ms-auto" size="small" @click="show2 = true">
        <span class="pi pi-truck"></span>
        Solicitar Coleta
      </Button>
    </div>
    <div class="d-flex flex-column gap-3 mx-4">
      <div class="row align-items-center rounded border py-3 px-1" @click="show3 = true">
        <div class="col-auto text-center">
          <span class="pi pi-info-circle"></span>
        </div>
        <div class="col">
          <strong class="d-block">Coleta: 4956</strong>
          <Badge value="Pendente" size="small" severity="warn"></Badge>
          <span class="d-block">Aguardando rota</span>
        </div>
      </div>
      <div class="row align-items-center rounded border py-3 px-1" v-for="(extract, key) in extracts" :key="key" @click="show3 = true">
        <div class="col-auto text-center">
          <span class="pi pi-check-circle"></span>
        </div>
        <div class="col">
          <div class="d-flex gap-2">
            <strong class="d-block">Coleta: {{ extract.id }}</strong>
          </div>
          <Badge value="Finalizada" size="small" severity="success" />
          <span class="d-block">Pontos: {{ extract.points }}</span>
          <small>{{ extract.date }}</small>
        </div>
      </div>
    </div>
    <RescuePoints v-model="show" />
    <NewCollect v-model="show2" />
    <CollectDetails v-model="show3" />
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import Avatar from 'primevue/avatar';
import Button from 'primevue/button'
import Badge from 'primevue/badge'
import RescuePoints from '@/components/RescuePoints.vue'
import NewCollect from '@/components/NewCollect.vue'
import CollectDetails from '@/components/CollectDetails.vue'
import { mapState } from 'pinia'
import { useUserStore } from '@/stores/user.js'
import api from '@/js/api.js'

export default {
  components: {
    FloatLabel,
    InputText,
    Avatar,
    Button,
    Badge,
    RescuePoints,
    NewCollect,
    CollectDetails
  },
  data: () => {
    return {
      show: false,
      show2: false,
      show3: false,
      email: null,
      password: null,
      points: 0,
      loading: false,
      extracts: [],
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
          this.extracts = data.extracts
          this.points = data.points
        })
        .catch(err => console.log(err))
        .finally(() => this.loading = false)
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

.points {
  color: black;
  font-size: 2rem;
}


.waiohfwaiufhwa {
  font-size: .9rem;
}

</style>