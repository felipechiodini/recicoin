<template>
  <div class="container pb-5">
    <div class="row px-2 py-4">
      <div class="col">
        <h3>Olá, Felipe</h3>
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

    <div class="d-flex mx-4 mb-3 mt-5">
      <h5>Extrato</h5>
      <Button class="ms-auto" size="small">
        <span class="pi pi-truck"></span>
        Nova Coleta
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

    <div class="model p-3" :class="{ 'show': show }">
      <Button @click="show = false" class="mb-3">
        <i class="pi pi-angle-left"></i>
      </Button>
      <h1>Trocar meus pontos</h1>
      <span>Quantos pontos desejá utilizar?</span>
      <InputText style="height: 70px;" type="text" v-model="points" />
      <div class="d-flex justify-content-around my-3">
        <Button size="small">+ 100</Button>
        <Button size="small">+ 300</Button>
        <Button size="small">+ 500</Button>
      </div>
      <h5>Você receberá: R$<strong>{{ 50 }}</strong></h5>
      <Button class="w-100 mt-3">Resgatar</Button>
    </div>


  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import Avatar from 'primevue/avatar';
import Button from 'primevue/button'

export default {
  components: {
    FloatLabel,
    InputText,
    Avatar,
    Button
  },
  data: () => {
    return {
      show: false,
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


.model {
  display: none;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  transition: all 1s;
}

.model.show {
  display: block;
}

</style>