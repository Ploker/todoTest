import Vue from 'vue'
import VueResource from 'vue-resource'
import Todo from './Todos.vue'


Vue.use(VueResource)

var v = new Vue({
  el: '#app',
  comments: {
    Todo
  },
  render: h => h(Todo),
  // data:{
  //   todos: [],
  //   todo:{
  //     title: '',
  //     completed: false,
  //   },
  //   title: '',
  //   completed: false,
  // },
  // created(){
  //   this.getAllTodos();
  // },
//   methods:{
//     addTodos(){
//         // var todo = this.todo;
//         console.log(v.todo.title);
//         // this.todos.push({title: title,completed: flag});
//         // this.todo.title = '';
//         // sthis.todo.completed = false;
//     },
//     delTodo(index){
//         this.todos.splice(index, 1);
//     },
//     updateTodo(){
//         console.log('update')
//     },
//     completed(id){
//         var res = this.todos.find(e => e.id == id);
//         res.completed = !res.completed;
//     },
//     getAllTodos()  {
//         let options = {
//             params: {
//             _limit: 20
//             }
//         }

//         this.$http.get('https://jsonplaceholder.typicode.com/todos',options).then((res)=>{
//             this.todos = res.data;
//         },(err)=>{
//             console.log(err);
//         })
//     }
// }

})
