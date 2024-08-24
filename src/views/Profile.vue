<template>
  <Header />
  <div class="p-3">
    <h5>Dados Pessoais</h5>
    <div>
      <label for="">Nome</label>
      <InputText v-model="user.name" />
    </div>
    <div>
      <label for="">Email</label>
      <InputText v-model="user.email" />
    </div>
    <div>
      <label for="">Celular</label>
      <InputText v-model="user.cellphone" v-maska="'(##) #####-####'" />
    </div>
    <div>
      <label for="">CPF</label>
      <InputText v-model="user.document" v-maska="'###.###.###-##'" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import InputText from 'primevue/inputtext'
import { mapState } from 'pinia';
import { useUserStore } from '@/stores/user';

export default {
  components: {
    Header,
    InputText
  },
  computed: {
    ...mapState(useUserStore, ['user'])
  }
}
</script>
