<template>
  <div class="container p-3">
    <div class="text-center">
      <Logo />
    </div>
    <h5 class="mt-2">Criar minha conta</h5>
    <small>Criei sua conta para ter acesso ao nosso sistema, é grátis.</small>
    <form class="fpwakfpowafpowjnaofwa" @submit.prevent="onSubmit()">
      <div>
        <label for="name">Nome</label>
        <InputText id="name" type="text" v-model="name" />
        <small class="text-danger" v-if="errors.has('name')" severity="error">{{ errors.get('name') }}</small>
      </div>
      <div>
        <label for="email">Email</label>
        <InputText id="email" type="email" v-model="email" />
        <small class="text-danger" v-if="errors.has('email')" severity="error">{{ errors.get('email') }}</small>
      </div>
      <div>
        <label for="cpf">CPF</label>
        <InputText id="cpf" type="text" v-model="document" v-maska="'###.###.###-##'" />
        <small class="text-danger" v-if="errors.has('document')" severity="error">{{ errors.get('document') }}</small>
      </div>
      <div>
        <label for="celular">Celular</label>
        <InputText id="celular" type="text" v-model="cellphone" v-maska="'(##) #####-####'" />
        <small class="text-danger" v-if="errors.has('cellphone')" severity="error">{{ errors.get('cellphone') }}</small>
      </div>
      <div>
        <label for="senha">Senha</label>
        <InputText id="senha" type="password" v-model="password" />
        <small class="text-danger" v-if="errors.has('password')" severity="error">{{ errors.get('password') }}</small>
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
import Message from 'primevue/message'
import api from '@/js/api.js'
import { ErrorBag } from '@/js/error'

export default {
  components: {
    InputText,
    Button,
    Logo,
    Message
  },
  data: () => {
    return {
      name: null,
      email: null,
      document: null,
      cellphone: null,
      password: null,
      loading: false,
      errors: new ErrorBag()
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
      })
      .then(({ data }) => {
        this.setToken(data.token)
      })
      .catch((errors) => this.errors.record(errors.response.data.errors))
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