<template>
  <div class="container pb-5">
    <div class="row px-2 py-4">
      <div class="col-auto">
        <h3 class="m-0">Olá, Felipe</h3>
      </div>
      <div class="col-auto ms-auto">
        <Avatar shape="circle" label="F" @click="$router.push({ name: 'profile' })" />
      </div>
    </div>
    <div class="p-4 shadow-lg rounded mx-2 my-3 row">
      <div class="col p-0">
        <h6 class="m-0 waiohfwaiufhwa">Seus Pontos</h6>
        <span class="points">1220</span>
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
      <div class="row align-items-center rounded border py-3 px-1" v-for="i in 4" :key="i">
        <div class="col-auto text-center">
          <span class="pi pi-check-circle"></span>
        </div>
        <div class="col">
          <strong class="d-block">Coleta realizada</strong>
          <span class="d-block">Pontos: {{ Math.round(Math.random() * 100) }}</span>
          <small>07/07/2024</small>
        </div>
      </div>
    </div>
    <RescuePoints v-model="show" />
    <NewCollect v-model="show2" />
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import Avatar from 'primevue/avatar';
import Button from 'primevue/button'
import RescuePoints from '@/components/RescuePoints.vue'
import NewCollect from '@/components/NewCollect.vue'

export default {
  components: {
    FloatLabel,
    InputText,
    Avatar,
    Button,
    RescuePoints,
    NewCollect
  },
  data: () => {
    return {
      show: false,
      show2: false,
      email: null,
      password: null,
      points: 0
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({ name: 'dashboard' })
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