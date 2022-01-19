<template>
  <div>
    <header class="bg-yellow-300">
      <h1 class="text-green-600 font-bold text-5xl py-3 px-5">Todo App</h1>
    </header>

    <div class="flex flex-col justify-items-center min-h-screen bg-gradient-to-r from-green-400 to-yellow-300">
        <form @submit.prevent="addTask" class="bg-gradient-to-r from-yellow-300 to-green-300 m-7 p-3 rounded-lg flex justify-center mx-auto">
          <input type="text" placeholder="Add your Todo" v-model="newTask" class="border-2 border-green-600 rounded p-2 w-96">
          <span>
            <input type="submit" value="Add" class="mx-3 rounded border-2 border-green-600 bg-green-600 p-2 font-bold text-yellow-300 opacity-70 hover:opacity-100">
          </span>
        </form>

        <ul class="min-w-min mx-auto my-4">
          <li v-for="task in sortedTasks" :key="task['.task']">
            <TaskItem :task="task" @check="onCheck" @delete="onDelete" />
          </li>
        </ul>
    </div>
    <footer class="flex justify-center items-center bg-gradient-to-r from-yellow-300 to-green-300">
      <p class="text-green-600 font-bold text-xl py-3 px-5 text-center">&copy; M. Azam</p>
      <span>      
        <a target="_blank" class="text-center" href="https://github.com/mazamgresam"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
      </span>

    </footer>
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
      newTask: '',
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
