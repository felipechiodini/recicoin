<template>
  <div>
    <FloatLabel>
      <InputText id="username" v-model="value" />
      <label for="username">E-mail</label>
    </FloatLabel>

    <FloatLabel>
      <InputText id="username" v-model="value" />
      <label for="username">Senha</label>
    </FloatLabel>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel';

export default {
  components: {
    FloatLabel,
    InputText
  }
}

</script>