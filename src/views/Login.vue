<template>
  <div class="container">
    <div class="d-flex flex-column py-4">
      <h1 class="mb-3 m-auto">Recicoin</h1>
      <img class="diuwahiuwafiuwa" src="/favicon.png" alt="logo">
      <form class="fpwakfpowafpowjnaofwa" @submit.prevent="onSubmit()">
        <div>
          <label style="display: block;" for="email">Email</label>
          <InputText required id="email" type="email" v-model="email" />
        </div>
        <div>
          <label style="display: block;" for="senha">Senha</label>
          <InputText required id="senha" type="password" v-model="password" />
        </div>
        <div class="d-flex flex-column">
          <Button type="submit">Entrar</Button>
        </div>
      </form>
      <div class="d-flex flex-column gap-2 mt-4">
        <div>
          <RouterLink :to="{ name: 'forget-password' }">Esqueci minha senha</RouterLink>
        </div>
        <div>
          <RouterLink :to="{ name: 'register' }">Criar Conta</RouterLink>
        </div>
      </div>
    </div>
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
  gap: 1rem;
}

.diuwahiuwafiuwa {
  width: 50%;
  margin: auto;
  object-fit: cover;
}


</style>