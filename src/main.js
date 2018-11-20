import Vue from 'vue'
import VueResource from 'vue-resource'
import Todo from './Todos.vue'


Vue.use(VueResource)

var v = new Vue({
  el: '#app',
  comments: {
    Todo
  },
  render: h => h(Todo)

})
