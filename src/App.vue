<template>
  <div id="app">
    <h1>Todo</h1>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask" />
      <input type="submit" value="Add" />
    </form>

    <ul id="tasks-list">
      <li v-for="(task, index) in sortedTasks" :key="index">
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
