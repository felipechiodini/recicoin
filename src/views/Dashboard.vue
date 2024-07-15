<template>
  <div>
  
    <h1>Dashboard</h1>

  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import Button from 'primevue/button'

export default {
  components: {
    FloatLabel,
    InputText,
    Button
  },
  data: () => {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({ name: 'dashboard' })
    }
  }
}

</script>

<style scoped>

.fpwakfpowafpowjnaofwa {
  display: flex;
  flex-direction: column;
  gap: 10px;
}


</style>