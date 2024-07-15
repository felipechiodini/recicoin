<template>
  <div style="display: flex; flex-direction: column;">
    <img class="diuwahiuwafiuwa" src="/favicon.png" alt="">
    <h1>Acesso</h1>
    <form class="fpwakfpowafpowjnaofwa" @submit.prevent="onSubmit()">
      <div>
        <label style="display: block;" for="email">Email</label>
        <InputText required id="email" type="email" v-model="email" />
      </div>
      <div>
        <label style="display: block;" for="senha">Senha</label>
        <InputText required id="senha" type="password" v-model="password" />
      </div>
      <Button type="submit">Entrar</Button>
    </form>
    <RouterLink style="margin-top: 2rem;" :to="{ name: 'register' }">Criar Conta</RouterLink>
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

.diuwahiuwafiuwa {
  width: 50%;
  margin: auto;
  object-fit: cover;
}


</style>