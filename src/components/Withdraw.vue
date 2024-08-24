<template>
  <Modal v-model="show">
    <div class="p-3">
      <Button @click="close()" class="mb-3">
        <i class="pi pi-angle-left"></i>
      </Button>
      <h1>Regatar valor</h1>
      <small>Informe o valor que deseja regatar</small>
      <InputText style="height: 70px; font-size: 2rem;" type="text" v-model="value" />
      <div class="d-flex justify-content-around my-3">
        <Button size="small" @click="addValue(b.value)" v-for="b in buttons" :key="b">+ {{ b.value }}</Button>
      </div>
      <small class="text-danger">{{ errors.get('value') }}</small>
      <Button class="w-100 mt-3" @click="onSubmit()">
        Resgatar
      </Button>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue';
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Api from '@/js/api.js'
import { ErrorBag } from '@/js/error';

export default {
  components: {
    Modal,
    InputText,
    Button
  },
  props: {
    modelValue: {
      
    }
  },
  data: () => {
    return {
      value: 0,
      show: true,
      loading: false,
      errors: new ErrorBag(),
      buttons: [
        { value: 100 },
        { value: 300 },
        { value: 500 }
      ]
    }
  },
  computed: {
    show() {
      return this.modelValue  
    }
  },
  methods: {
    addValue(quantity) {
      this.value = parseInt(this.value) + parseInt(quantity)
    },
    onSubmit() {
      this.loading = true
      Api.post('request-whithdraw', { value: this.value })
        .then(({ data }) => {
          this.close()
          this.$emit('success', data.rescue)
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