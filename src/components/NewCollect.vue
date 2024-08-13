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

    <div class="d-flex flex-column my-3 border p-2" @click="selectAddress(address)" :class="{ 'active': isSelectedAddress(address) }" v-for="(address, key) in userAddresses" :key="key">
      <span>Cidade: <strong>{{ address.city }}</strong></span>
      <span>Bairro: <strong>João Pessoa</strong></span>
      <span>Rua: <strong>Rua Hilda Brach Bauer</strong></span>
      <span>Número: <strong>421</strong></span>
      <span>Complemento: <strong>Geminado 01</strong></span>
    </div>

    <span>Informe horário disponivel para coleta</span>
    <div>
      <InputText  />
    </div>
    <Button class="w-100 mt-3" @click="onSubmit()" :loading="loading">
      Confirmar
    </Button>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { mapState } from 'pinia'
import { useUserStore } from '@/stores/user'
import api from '@/js/api.js'

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
      loading: false,
      selectedAddressId: null,
      buttons: [
        { value: 100 },
        { value: 300 },
        { value: 500 }
      ]
    }
  },
  computed: {
    ...mapState(useUserStore, { userAddresses: 'addresses' })
  },
  methods: {
    addPoints(quantity) {
      this.points = parseInt(this.points) + parseInt(quantity)
    },
    isSelectedAddress(address) {
      return this.selectedAddressId === address.id 
    },
    selectAddress(address) {
      this.selectedAddressId = address.id
    },
    onSubmit() {
      this.loading = true
      api.post('collect/request')
        .then(({ data }) => {
          this.close()
          this.$emit('success', data.collect)
        })
        .finally(() => this.loading = false)
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


.active {
  background-color: aqua;
}

</style>