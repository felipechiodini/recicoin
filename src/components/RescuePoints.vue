<template>
  <div class="model p-3" :class="{ 'show': modelValue }">
    <Button @click="close()" class="mb-3">
      <i class="pi pi-angle-left"></i>
    </Button>
    <h1>Trocar meus pontos</h1>
    <span>Quantos pontos desejá utilizar?</span>
    <InputText style="height: 70px; font-size: 2rem;" type="text" v-model="points" />
    <div class="d-flex justify-content-around my-3">
      <Button size="small" @click="addPoints(b.value)" v-for="b in buttons" :key="b">+ {{ b.value }}</Button>
    </div>
    <h5>Você receberá: R$<strong>{{ 50 }}</strong></h5>
    <Button class="w-100 mt-3">Resgatar</Button>
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