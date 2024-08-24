<template>
  <Modal v-model="modalVisible">
    <div>
      <button class="btn-close" @click="close()">
        X
      </button>
    </div>
    <div class="p-3">
      <h5>Preencha os dados</h5>
      <div>
        <label for="cep">CEP</label>
        <InputText id="cep" v-model="form.cep" v-maska="'#####-###'" />
        <small class="text-error">{{ errors.get('cep') }}</small>
      </div>
      <div>
        <label for="street">Rua</label>
        <InputText id="street" v-model="form.street" />
        <small class="text-error">{{ errors.get('street') }}</small>
      </div>
      <div>
        <label for="district">Bairro</label>
        <InputText id="street" v-model="form.neighborhood" />
        <small class="text-error">{{ errors.get('neighborhood') }}</small>
      </div>
      <div>
        <label for="district">Número</label>
        <InputText id="street" v-model="form.number" />
        <small class="text-error">{{ errors.get('number') }}</small>
      </div>
      <div>
        <label for="complement">Complemento</label>
        <InputText id="complement" v-model="form.complement" />
        <small class="text-error">{{ errors.get('complement') }}</small>
      </div>
      <div>
        <label for="district">Estado</label>
        <InputText id="district" v-model="form.state" />
        <small class="text-error">{{ errors.get('state') }}</small>
      </div>
      <div>
        <label for="city">Cidade</label>
        <InputText id="city" v-model="form.city" />
        <small class="text-error">{{ errors.get('city') }}</small>
      </div>
      <Button class="w-100 mt-3" @click="onSubmit()" :loading="loading">
        Cadastrar
      </Button>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import api from '@/js/api.js'
import { mapState } from 'pinia'
import { useUserStore } from '@/stores/user'
import { ErrorBag } from '@/js/error'

export default {
  components: {
    Modal,
    Button,
    InputText
  },
  props: {
    modelValue: {
      type: Boolean
    }
  },
  data: () => {
    return {
      loading: false,
      errors: new ErrorBag(),
      form: {
        cep: null,
        street: null,
        number: null,
        complement: null,
        neighborhood: null,
        city: null,
        state: null
      }
    }
  },
  computed: {
    modalVisible() {
      return this.modelValue
    },
    ...mapState(useUserStore, { addresses: 'addresses' })
  },
  methods: {
    onSubmit() {
      this.loading = true
      api.post('address', this.form)
        .then(({ data }) => {
          this.addresses.push(data.address)
          this.close()
          this.$emit('success')
        })
        .catch((errors) => this.errors.record(errors.response.data.errors))
        .finally(() => this.loading = false)
    },
    close() {
      this.$emit('update:modelValue', false)
    }
  }
}

</script>


<style scoped>

.btn-close {
  border: none;
  background-color: transparent;
}


</style>