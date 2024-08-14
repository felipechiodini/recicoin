import { ref } from "vue"

export default {
  install(app, options) {
    const opened = ref(false)

    app.config.globalProperties.$sidebar = {
      opened: opened,
      open() {
        opened.value = true
      },
      close() {
        opened.value = false
      }
    }
  }
}