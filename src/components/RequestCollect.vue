<template>
  <div class="model p-3" :class="{ 'show': modelValue }">
    <Button @click="close()" class="mb-3">
      <i class="pi pi-angle-left"></i>
    </Button>
    <div class="d-flex align-items-center">
      <h5 class="my-3">Nova Coleta</h5>
    </div>
    <div class="d-flex flex-column my-3 border p-2" @click="selectAddress(address)" :class="{ 'active': isSelectedAddress(address) }" v-for="(address, key) in userAddresses" :key="key">
      <span>Cidade: <strong>{{ 'cidade' }}</strong></span>
      <span>Bairro: <strong>João Pessoa</strong></span>
      <span>Rua: <strong>Rua Hilda Brach Bauer</strong></span>
      <span>Número: <strong>421</strong></span>
      <span>Complemento: <strong>Geminado 01</strong></span>
    </div>
    <div>
      <InputText />
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
import { ErrorBag } from '@/js/error'
import Modal from './Modal.vue'

export default {
  components: {
    InputText,
    Button,
    Modal
  },
  props: {
    modelValue: {
      
    }
  },
  data: () => {
    return {
      teste: false,
      points: 0,
      show: true,
      loading: false,
      selectedAddressId: null,
      errors: new ErrorBag(),
      buttons: [
        { value: 100 },
        { value: 300 },
        { value: 500 }
      ],
      address_id: null,
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
    validate() {
      return new Promise((resolve, reject) => {
        const errors = []

        if (this.address_id === null) {
          errors.push('Informe o endereço')
        }

        if (errors.length > 0) {
          reject(errors)
        }

        resolve()
      })
    },
    async onSubmit() {
      try {
        this.loading = true
        await this.validate()
        const { data } = await api.post('collect/request', { address_id: this.address_id })
        this.close()
        this.$emit('success', data.collect)
      } catch (error) {
        this.errors.record(error.response.data.errors)
      }
      this.loading = false
    },
    close() {
      this.$emit('update:modelValue', false)
    },
    saveAddress() {
      api.post('address', this.address)
        .then(({ data }) => {
          this.userAddresses.push(data.address)
          this.teste = false
        })
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