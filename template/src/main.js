import Vue from 'vue'
import App from './App.vue'
{{#vuex}}
import store from './store'
{{/vuex}}

new Vue({
  {{#vuex}}
  "node-sass": "^4.5.3",
  "sass-loader": "^6.0.6",
  {{/vuex}}
  store,
  el: '#app',
  render: h => h(App)
})
