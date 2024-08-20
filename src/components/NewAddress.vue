<template>
  <Modal v-model="modalVisible">
    <div class="p-3">
      <h5>Preencha os dados</h5>
      <label for="cep">CEP</label>
      <InputText id="cep" v-model="form.cep" />
      <label for="street">Rua</label>
      <InputText id="street" v-model="form.street" />
      <label for="district">Bairro</label>
      <InputText id="street" v-model="form.number" />
      <label for="district">Número</label>
      <InputText id="street" v-model="form.state" />
      <label for="district">Estado</label>
      <InputText id="district" v-model="form.neighborhood" />
      <label for="city">Cidade</label>
      <InputText id="city" v-model="form.city" />
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
import { mapState } from 'pinia';
import { useUserStore } from '@/stores/user';

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
      form: {
        cep: null,
        street: null,
        number: null,
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
        .then(({ data }) => this.addresses.push(data.address))
        .finally(() => this.loading = false)
    }
  }
}

</script>