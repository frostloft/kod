import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


Vue.component('blog-post', {
  props: ['title'],
  template: `<h3>{{ title }}</h3>`
})

new Vue({
  el:'#blog-post',
  data: {
    posts: [
      { id: 1, title: 'One' },
      { id: 2, title: 'Two' }
    ]
  }
})

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">Счётчик кликов — {{ count }}</button>'
})

new Vue({ el: '#components-demo' })