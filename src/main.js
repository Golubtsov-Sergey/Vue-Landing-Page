import Vue from 'vue'
import App from './App.vue'
import router from "./router/router"
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  router,
  render: h => h(App),
  vuetify
}).$mount('#app')
