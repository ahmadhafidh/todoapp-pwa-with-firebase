import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
