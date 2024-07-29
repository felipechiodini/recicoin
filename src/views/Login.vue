<template>
  <div class="container">
    <div class="d-flex flex-column py-4">
      <img class="diuwahiuwafiuwa" src="/recicoin.png" alt="logo">
      <form class="fpwakfpowafpowjnaofwa" @submit.prevent="onSubmit()">
        <div>
          <label for="email">Email</label>
          <InputText id="email" type="text" v-model="email" />
          <Message v-if="errors.has('email')" severity="error">{{ errors.get('email') }}</Message>
        </div>
        <div>
          <label for="senha">Senha</label>
          <InputText id="senha" type="password" v-model="password" />
          <Message v-if="errors.has('password')" severity="error">{{ errors.get('password') }}</Message>
        </div>
        <div class="d-flex flex-column">
          <Button type="submit" :loading="loading">
            Entrar
          </Button>
        </div>
      </form>
      <div class="d-flex flex-column gap-2 mt-4">
        <div>
          <RouterLink :to="{ name: 'forget-password' }">
            Esqueci minha senha
          </RouterLink>
        </div>
        <div>
          <RouterLink :to="{ name: 'register' }">
            Criar Conta
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import Button from 'primevue/button'
import Message from 'primevue/message'
import Api from '@/js/api.js'
import { mapActions } from 'pinia'
import { useUserStore } from '@/stores/user'
import { ErrorBag } from '@/js/error'

export default {
  components: {
    FloatLabel,
    InputText,
    Button,
    Message
  },
  data: () => {
    return {
      email: null,
      password: null,
      loading: false,
      submitted: false,
      errors: new ErrorBag()
    }
  },
  methods: {
    ...mapActions(useUserStore, ['setToken', 'setUser']),
    onSubmit() {

      Api.get('csrf-cookie')
        .then(() => {
          this.loading = true
          Api.post('/login', {
            email: this.email,
            password: this.password
          })
          .then(({ data }) => {
            this.setToken(data.token)
            this.setUser(data.user)
            this.$router.push({ name: 'home' })
          })
          .catch((errors) => {
    
            this.errors.record(errors.response.data)
    
          })
          .finally(() => this.loading = false)
      });


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
