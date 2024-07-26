<template>
  <div class="container">
    <!-- <Logo /> -->
    <form class="fpwakfpowafpowjnaofwa" @submit.prevent="onSubmit()">
      <div>
        <label for="name">Nome</label>
        <InputText id="name" type="text" v-model="name" />
      </div>
      <div>
        <label for="email">Email</label>
        <InputText id="email" type="email" v-model="email" />
      </div>
      <div>
        <label for="cpf">CPF</label>
        <InputText id="cpf" type="text" v-model="document" />
      </div>
      <div>
        <label for="celular">Celular</label>
        <InputText id="celular" type="text" v-model="cellphone" />
      </div>
      <div>
        <label for="senha">Senha</label>
        <InputText id="senha" type="password" v-model="password" />
      </div>
      <Button type="submit" :loading="loading">
        Cadastrar
      </Button>
    </form>
    <div class="mt-4">
      <RouterLink style="margin-top: 2rem;" :to="{ name: 'home' }">
        Entrar
      </RouterLink>
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Logo from '@/components/icons/Logo.vue'
import api from '@/js/api.js'

export default {
  components: {
    InputText,
    Button,
    Logo
  },
  data: () => {
    return {
      name: null,
      email: null,
      document: null,
      cellphone: null,
      password: null,
      loading: false
    }
  },
  methods: {
    onSubmit() {
      api.post('sing-up', {
        name: this.name,
        email: this.email,
        document: this.document,
        cellphone: this.cellphone,
        password: this.password
      }).then(({ data }) => {
        this.setToken(data.token)
      })
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