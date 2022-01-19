<template>
  <div
    id="app"
    class="font-sans antialiased w-1/2 mx-auto mt-10 p-8 rounded-md flex flex-col items-center justify-center space-y-4"
  >
    <h1 class="text-3xl font-bold">Todo App</h1>
    <div class="w-full relative">
      <form @submit.prevent="addTask">
        <input
          type="text"
          placeholder="Type todo"
          v-model="newTask"
          class="w-full pr-16 input input-primary input-bordered"
        />
        <button type="submit" class="absolute top-0 right-0 rounded-l-none btn btn-primary">Add</button>
      </form>
    </div>

    <ul class="menu w-full p-3 border-2 border-primary bg-base-100 rounded-box">
      <li class="menu-title mb-4">
        <span>Todo Lists</span>
      </li>
      <li v-for="(task, index) in sortedTasks" :key="index" class="px-6 mb-4">
        <TaskItem :task="task" @check="onCheck" @delete="onDelete" />
      </li>
    </ul>
  </div>
</template>

<script>
import TaskItem from './components/TaskItem.vue'

import { firestore, serverTimestamp } from './firebase'

export default {
  name: 'App',
  components: {
    TaskItem,
  },
  firestore() {
    const tasks = firestore.collection('tasks')
    return {
      tasks,
      sortedTasks: tasks.orderBy('created', 'desc'),
    }
  },
  data() {
    return {
      newTask: '',
    }
  },
  methods: {
    addTask() {
      this.$firestore.tasks.add({
        name: this.newTask,
        done: false,
        created: serverTimestamp(),
      })
      this.newTask = ''
    },
    onCheck({ task, state }) {
      this.$firestore.tasks.doc(task['.key']).update({
        done: state,
      })
    },
    onDelete(task) {
      this.$firestore.tasks.doc(task['.key']).delete()
    },
  },
}
</script>
