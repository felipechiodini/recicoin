<template>
  <div class="container pb-5">
    <div class="row px-2 py-4">
      <div class="col-auto">
        <h2 class="m-0">Olá, Felipe</h2>
      </div>
      <div class="col-auto ms-auto">
        <Avatar shape="circle" label="F" @click="$router.push({ name: 'profile' })" />
      </div>
    </div>

    <div class="d-flex align-items-end">
      <h6 class="m-0">Meus Endereços</h6>
      <Button class="ms-auto" size="small">
        Novo Endereço
      </Button>
    </div>
    <div class="d-flex flex-column my-3 border rounded p-3" v-for="i in 2" :key="i">
      <span>Cidade: <strong>Jaraguá do Sul</strong></span>
      <span>Bairro: <strong>João Pessoa</strong></span>
      <span>Rua: <strong>Rua Hilda Brach Bauer</strong></span>
      <span>Número: <strong>421</strong></span>
      <span>Complemento: <strong>Geminado 01</strong></span>
      <div class="d-flex gap-3 mt-2 justify-content-between">
        <Button class="w-100" size="small" @click="show = true">
          Editar
        </Button>
        <Button severity="danger" class="w-100" size="small" @click="requireConfirmation($event)">
          Excluir
        </Button>

        <ConfirmPopup group="headless">
          <template #container="{ message, acceptCallback, rejectCallback }">
            <div class="rounded p-4">
                <span>{{ message.message }}</span>
                <div class="flex items-center gap-2 mt-4">
                    <Button label="Save" @click="acceptCallback" size="small"></Button>
                    <Button label="Cancel" outlined @click="rejectCallback" severity="secondary" size="small" text></Button>
                </div>
            </div>
          </template>
        </ConfirmPopup>



      </div>
    </div>

    <Modal class="p-3" v-model="show">
      <h5>Editar Endereço</h5>
      <div>
        <label for="username">CEP</label>
        <InputText />
      </div>
      <label for="username">Rua</label>
      <InputText />
      <label for="username">Rua</label>
      <InputText />
      <label for="username">Rua</label>
      <InputText />
      <label for="username">Rua</label>
      <InputText />
      <div class="d-flex gap-3 mt-3">
        <Button class="w-100" size="small">
          Salvar
        </Button>
        <Button class="w-100" severity="danger" size="small" @click="show = false">
          Cancelar
        </Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Avatar from 'primevue/avatar'
import Modal from '@/components/Modal.vue'
import InputText from 'primevue/inputtext';
import ConfirmPopup from 'primevue/confirmpopup';
import Button from 'primevue/button';

export default {
  components: {
    Avatar,
    Button,
    Modal,
    InputText,
    ConfirmPopup
  },
  data: () => ({
    show: false
  }),
  methods: {
    requireConfirmation(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'headless',
                message: 'Save your current process?',
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                }
            });
        }
    }
}
</script>
