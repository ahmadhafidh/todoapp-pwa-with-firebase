<template>
  <div id="app" class="w-screen h-screen bg-gray-600 flex items-center justify-center">
    <div class="bg-white rounded-md p-5 h-auto w-auto shadow-md">
      <h1 class="text-2xl font-bold mb-3">
        Todo
      </h1>
      <form @submit.prevent="addTask">
        <input 
          type="text" 
          v-model="newTask" 
          class="
            px-2 py-2
            mr-2
          bg-gray-300
            focus:ring-1
            focus:ring-gray-800
            rounded-md
            transition-all ease-in-out duration-500"
        >
        <input 
          type="submit" 
          value="Add" 
          class="
            px-4 py-2 
            bg-blue-500 
            hover:bg-blue-700 
            text-white 
            rounded-md 
            cursor-pointer
            transition ease-in-out duration-300"
        > 
      </form>

      <ul id="tasks-list">
        <li v-for="task in sortedTasks" :key="task['.task']">
          <TaskItem :task="task" @check="onCheck" @delete="onDelete" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TaskItem from './components/TaskItem.vue'

import { firestore, serverTimestamp } from "./firebase";

export default {
  name: 'App',
  components:{
    TaskItem
  },
  firestore(){
    const tasks = firestore.collection("tasks")
    return {
      tasks,
      sortedTasks: tasks.orderBy("created","desc")
    }
  },
  data(){
    return{
      newTask: ''

    }
  },
  methods:{
    addTask(){
      this.$firestore.tasks.add({
        name: this.newTask,
        done: false,
        created: serverTimestamp(),
      })

      this.newTask = '' 
    },
    onCheck({ task, state }){
      this.$firestore.tasks.doc(task['.key']).update({
        done: state,
      })
    },
    onDelete ( task ){
      this.$firestore.tasks.doc(task['.key']).delete()
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
