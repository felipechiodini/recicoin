<template>
  <form class="fpwakfpowafpowjnaofwa">
    <InputText placeholder="Nome" />
    <InputText placeholder="Email" />
    <InputText placeholder="Senha" />
    <Button type="submit">Cadastrar</Button>
  </form>
</template>

<script>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

export default {
  components: {
    InputText,
    Button
  },
  methods: {
    onSubmit () {
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