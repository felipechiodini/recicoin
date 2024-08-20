<template>
  <Modal v-model="open">
    <div class="p-3">
      <Button @click="close()" class="mb-3">
        <i class="pi pi-angle-left"></i>
      </Button>
      <h3>Coleta: {{ modelValue }}</h3>
      <!-- <div v-if="loading === false">
        <Timeline :value="collect.histories">
          <template #content="slotProps">
            {{ slotProps.item.type }}
          </template>
        </Timeline>
      </div> -->
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue'
import Timeline from 'primevue/timeline'
import Button from 'primevue/button'

export default {
  components: {
    Timeline,
    Button,
    Modal
  },
  props: {
    modelValue: {
      
    }
  },
  data: () => {
    return {
      loading: false,
      collect: null,
    }
  },
  watch: {
    modelValue(newValue) {
      if (newValue) {
        this.loadDetails()
      }
    }
  },
  computed: {
    open() {
      return false
    }
  },
  methods: {
    loadDetails() {
      this.loading = true
      api.get(`collect/${this.modelValue}/details`)
        .then(({ data }) => {
          this.collect = data.collect
        })
        .finally(() => {
          this.loading = false
        })
    },
    close() {
      this.$emit('update:modelValue', null)
    }
  }
}

</script>
