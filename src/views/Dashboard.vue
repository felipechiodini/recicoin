<template>
  <div class="container">
    <div class="row px-2 py-4 bg-success">
      <div class="col">
        <Avatar label="F" class="me-3" shape="circle" />
        <span class="text-white">Seja bem-vindo, <strong>Felipe</strong></span>
      </div>

      <div class="col-auto ml-auto">
        <Button size="small" class="w-100 bg-danger">Nova Coleta</Button>
      </div>
    </div>

    <div class="p-4 shadow-lg rounded mx-4 my-5 row">
      <div class="col p-0">
        <h6 class="m-0 waiohfwaiufhwa">Seus Pontos</h6>
        <span class="points">1220</span>
      </div>
      <div class="col-auto p-0">
        <Button size="small">
          Solicitar Resgate
        </Button>
      </div>
    </div>

    <div class="d-flex gap-3 mx-4 mb-2">
      <h6>Coletas</h6>
    </div>
    <div class="mx-4">
      <div class="row align-items-center border-top p-2" v-for="i in 4" :key="i">
        <strong class="col-auto">
          7
        </strong>
        <div class="col">
          <span class="d-block">Coleta realizada</span>
          <span class="d-block">Pontos: 1220</span>
        </div>

      </div>
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
      email: null,
      password: null
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