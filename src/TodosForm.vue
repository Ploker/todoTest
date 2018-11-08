<template>
    <div class="wrap-form">
        <form class="update-form" @submit.prevent="updateTodo()">
            <input type="text" class="addTitle" v-model="todoUpdate.title" placeholder="Title">
            <input type="checkbox" name="completed" v-model='todoUpdate.completed' >
            <label class="whiteTixt" for="completed">completed</label>
            <button class="addTodo" type="submit" >Add Totos</button>
            <button class="addTodo red" type="button" @click="close()" >Close</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'todosForm',
    props:['todoUpdate'],
    methods:{
        updateTodo(){
            this.$emit('toUpdatee',this.todoUpdate);
        },
        close(){
            this.$emit('closeUpdate');
        }
    }
}
</script>

<style lang="css">
    .wrap-form{
        position: absolute;
        left: 0;
        height: 100%;
        width: 100%;
        background: #000000bf;
    }
    .update-form{
        width: 50%;
        margin: 0 auto;
        padding-top: 10%;
    }
    .whiteTixt{
        color: white;
    }
    .red{
        background: #e69b84;
        border: 1px #e69b84 solid;
    }
</style>
