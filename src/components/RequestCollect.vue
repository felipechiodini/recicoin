<template>
  <div class="model p-3" :class="{ 'show': modelValue }">
    <Button @click="close()" class="mb-3">
      <i class="pi pi-angle-left"></i>
    </Button>
    <div class="d-flex align-items-center">
      <h5 class="m-0">Nova Coleta</h5>
    </div>
    <hr class="mt-1">
    <h6>Selecione o endereço da coleta</h6>
    <div class="d-flex flex-column gap-3">
      <div class="d-flex flex-column border rounded p-2" @click="selectAddress(address)" :class="{ 'active': isSelectedAddress(address) }" v-for="(address, key) in addresses" :key="key">
        <span>{{ address.street }}</span>
        <span>{{ address.number }}</span>
        <span>{{ address.neighborhood }}</span>
        <span>{{ address.complement }}</span>
        <span>{{ address.city }}, {{ address.state }}</span>
      </div>
    </div>
    <span>{{ errors.get('address') }}</span>
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
      show: true,
      loading: false,
      selectedAddressId: null,
      errors: new ErrorBag(),
      addresses: []
    }
  },
  mounted() {
    this.loadAddresses()
  },
  methods: {
    loadAddresses() {
      api.get('address')
        .then(({ data }) => {
          this.addresses = data.addresses
        })
    },
    isSelectedAddress(address) {
      return this.selectedAddressId === address.id 
    },
    selectAddress(address) {
      this.selectedAddressId = address.id
    },
    validate() {
      return new Promise((resolve, reject) => {
        const errors = {}

        if (this.selectedAddressId === null) {
          errors.address = [
            'Selecione um endereço',
          ]
        }

        if (Object.keys(errors).length > 0) {
          reject(errors)
        }

        resolve()
      })
    },
    async onSubmit() {
      this.loading = true
      try {
        await this.validate()

        try {
          const { data } = await api.post('collect/request', { address_id: this.selectedAddressId })
          this.close()
          this.$emit('success', data.collect)
        } catch (error) {
          this.errors.record(error.response.data.errors)
        }
      } catch (error) {
        console.log(error)
        this.errors.record(error)
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
  box-shadow: 1px 1px 5px 1px #ccc;
}

</style>