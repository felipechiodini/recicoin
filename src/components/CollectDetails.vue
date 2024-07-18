<template>
  <div class="model p-3" :class="{ 'show': modelValue }">
    <Button @click="close()" class="mb-3">
      <i class="pi pi-angle-left"></i>
    </Button>
    <h1>Coleta: 5465</h1>

    <Timeline :value="events">
      <template #content="slotProps">
        {{ slotProps.item.status }}
      </template>
    </Timeline>

  </div>
</template>

<script>
import Timeline from 'primevue/timeline'
import Button from 'primevue/button'

export default {
  components: {
    Timeline,
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
      events: [
        { status: 'Solicitado' },
        { status: 'Aguardando rota' },
        { status: 'Rota definida' },
        { status: 'Finalizado'  }
      ]
    }
  },
  methods: {
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