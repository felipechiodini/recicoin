<template>
  <div class="sidebar" :class="{ 'show': $sidebar.opened.value }">
    <div class="header">
      <button class="btnclose" @click="$sidebar.close()">
        <i class="pi pi-times"></i>
      </button>
      <div class="d-flex align-items-start flex-column gap-3">
        <button class="dpawkdowpajdaowd" @click="goTo('home')">
          Inicio
        </button>
        <button class="dpawkdowpajdaowd" @click="goTo('profile')">
          Perfil
        </button>
        <button class="dpawkdowpajdaowd" @click="goTo('addresses')">
          Meus Endereços
        </button>
        <button class="dpawkdowpajdaowd" @click="goTo('collects')">
          Coletas
        </button>
        <button class="dpawkdowpajdaowd" @click="goTo('withdrawals')">
          Saques
        </button>
        <button class="dpawkdowpajdaowd" @click="logout()">
          Sair
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(name) {
      this.$router.push({ name })
      this.$sidebar.close()
    },
    async logout() {
      localStorage.clear()
      location.reload()
    }
  }
}

</script>

<style scoped>

.header {
  background-color: var(--p-button-primary-background);
  width: 100%;
  padding: 1rem 1rem 3rem 1rem;
}

.sidebar {
  display: none;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  transition: all 1s;
}

.sidebar.show {
  display: block;
}

.btnclose {
  display: block;
  margin-left: auto;
  border: none;
  background-color: transparent;
}


.dpawkdowpajdaowd {
  border: none;
  background-color: transparent;
  font-weight: 400;
  font-size: 1.2rem;
  color: #fff;
}

</style>