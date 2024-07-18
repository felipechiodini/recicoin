<template>
  <div class="model p-3" :class="{ 'show': modelValue }">
    <Button @click="close()" class="mb-3">
      <i class="pi pi-angle-left"></i>
    </Button>
    <h1>Nova Coleta</h1>
    <span>Selecione o endereço da coleta</span>
    <Button size="small">
      Novo Endereço
    </Button>
    <div class="d-flex flex-column my-3 border rounded p-3">
      <span>Cidade: <strong>Jaraguá do Sul</strong></span>
      <span>Bairro: <strong>João Pessoa</strong></span>
      <span>Rua: <strong>Rua Hilda Brach Bauer</strong></span>
      <span>Número: <strong>421</strong></span>
      <span>Complemento: <strong>Geminado 01</strong></span>
    </div>

    <span>Informe horário disponivel para coleta</span>
    <div>
      <InputText  />
    </div>
    <Button class="w-100 mt-3">Confirmar</Button>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

export default {
  components: {
    InputText,
    Button
  },
  props: {
    modelValue: {
      
    }
  },
  data: () => {
    return {
      points: 0,
      show: true,
      buttons: [
        { value: 100 },
        { value: 300 },
        { value: 500 }
      ]
    }
  },
  methods: {
    addPoints(quantity) {
      this.points = parseInt(this.points) + parseInt(quantity)
    },
    close() {
      this.$emit('update:modelValue', false)
    }
  }
}


</script>

<style scoped>

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