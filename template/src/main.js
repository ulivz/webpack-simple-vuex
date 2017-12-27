import Vue from 'vue'
import App from './App.vue'
{{#vuex}}
import store from './store'
{{/vuex}}

new Vue({
  {{#vuex}}
  store,
  {{/vuex}}
  el: '#app',
  render: h => h(App)
})
