<template>
  <div class="container my-4">
    <h1>Perfil</h1>

    <h6>Endereços</h6>
    <div class="d-flex flex-column my-3 border rounded p-3" v-for="i in 2" :key="i">
      <span>Cidade: <strong>Jaraguá do Sul</strong></span>
      <span>Bairro: <strong>João Pessoa</strong></span>
      <span>Rua: <strong>Rua Hilda Brach Bauer</strong></span>
      <span>Número: <strong>421</strong></span>
      <span>Complemento: <strong>Geminado 01</strong></span>
    </div>


  </div>
</template>

<script>

export default {
}
</script>
