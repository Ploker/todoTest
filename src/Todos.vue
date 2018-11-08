<template>
    <div id="todos" class="todos">
        <form class="add-form" @submit.prevent="addTodos()">
            <input type="text" class="addTitle" v-model="todo.title" placeholder="Title">
            <input type="checkbox" name="completed" v-model='todo.completed' >
            <label for="completed">completed</label>
            <button class="addTodo" >Add Totos</button>
        </form>
        <div class="todo" v-for="(todo,index) in todos" >
            <div class="info-line" :class="{'line-done': todo.completed}"></div>
            <p class="title" v-if="!todo.updateMod" :class="{'title-done': todo.completed}">{{todo.title}}</p>
            <input type="text" v-if="todo.updateMod" v-model="todo.title">
            <div class="wrap-btns">
                <button  class="btnn del" @click="delTodo(todo.id,index)" >delete</button>
                <button  class="btnn update" @click="updateTodo(todo)">update</button>
                <button class="btnn conpleted" @click="completed(todo.id)">completed</button>
            </div>
        </div>
        <TodosFrorm v-if="todoUpdate.updateMod" :todoUpdate='todoUpdate' @toUpdatee="toUpdate" @closeUpdate="closeUpdate"></TodosFrorm>
    </div>
    

</template>

<script>
import TodosFrorm from './TodosForm.vue';

export default {
    name: 'todos',
    components:{
        TodosFrorm
    },
    data () {
        return { 
            todos: [],
            todo: {
                title: '',
                completed: false,
            },
            todoUpdate:{
                id: 0,
                title: '',
                completed: false,
                updateMod: false
            },
            serverUrl: 'https://jsonplaceholder.typicode.com/todos',
            
        }
    },
    created(){
        this.getAllTodos();
    },
    methods:{
        addTodos(){
            this.$http.post(this.serverUrl,this.todo).then((res) => {
                this.todos.push(res.data);
                this.todo.title = '';
                this.todo.completed = false;
            },(err) => {
                console.log(err);
            });
        },
        delTodo(id,index){
            this.$http.delete(this.serverUrl + '/' + id).then((res) => {
                this.todos.splice(index, 1);
            },(err) => {
                console.log(err);
            });
        },
        updateTodo(todo){
            this.todoUpdate.id = todo.id;
            this.todoUpdate.title = todo.title;
            this.todoUpdate.completed = todo.completed;
            this.todoUpdate.updateMod = true;
        },
        toUpdate(todoUpdate){
            let res = this.todos.find(e => e.id == todoUpdate.id);            
            res.title = todoUpdate.title;
            res.completed = todoUpdate.completed;
            this.todoUpdate.updateMod = false;
        },
        closeUpdate(){
            this.todoUpdate.updateMod = false;
        },
        completed(id){
            var res = this.todos.find(e => e.id == id);
            res.completed = !res.completed;

            this.$http.put(this.serverUrl+ '/' + res.id,res).then((res) => {
                console.log(res);
            },(err) => {
                res.completed = !res.completed;
                console.log(err);
            });
        },
        getAllTodos()  {
            let options = {
                params: {
                _limit: 20
                }
            }

            this.$http.get(this.serverUrl,options).then((res) => {
                this.todos = res.data;
            },(err) => {
                console.log(err);
            })
        }
    }
}
</script>

<style lang="scss">
    body{
        height: 100%;
        background: gainsboro;
    }
    button{
        cursor: pointer;
    }
    .todos{
        margin: 0 auto;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 10px;
        box-sizing: border-box;
    }
    .add-form{
        width: 100%;
    }
    .addTitle{
        width: 85%;
        font-size: 18px;
        font-weight: 700;
    }
    .addTodo{
        width: 100%;
        margin-top: 5px;
        background: #39c8d0;
        border: 1px #39c8d0 solid;
        color: white;
        font-size: 18px;
        font-weight: 700;
    }
    .todo:nth-child(2n+1){
        margin-left: 2%;
    }
    .todo{
        background: white;
        width: 49%;
        border-radius: 0px 0px 3px 3px;
        height: 120px;
        margin-top: 10px;
        position: relative;
    }
    .todo:hover{
        box-shadow: 0px 4px 12px grey;
    }
    .info-line{
        width: 100%;
        height: 10px;
        background: #39d0b2;
        
    }
    .line-done{
        background: #e69b84;
    }
    .title{
        padding: 0px 10px 0px 10px;
        font-size: 19px;
        font-weight: lighter;
    }
    .title-done{
        text-decoration: line-through;
    }
    .wrap-btns{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 3px 3px 3px;
    }
    .btnn{
        width: 32%;
        color: white;
        font-size: 18px;
        font-weight: 700;
    }
    .del{
        background: #e69b84;
        border: 1px #e69b84 solid;
    }
    .update{
        background: #39d0b2;
        border: 1px #39d0b2 solid;
    }
    .conpleted{
        background: #39a5d0;
        border: 1px #39a5d0 solid;
    }

</style>
