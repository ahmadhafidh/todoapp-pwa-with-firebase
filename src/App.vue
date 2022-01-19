<template>
  <div id="app">
    <div class="card">
      <h1 class="navbar">Todo</h1>
      <div class="input-form">
        <form @submit.prevent="addTask">
          <input type="text" class="input-field" v-model="newTask" placeholder="Type here..." />
          <input type="submit" value="Add" class="btnAdd" />
        </form>
      </div>
      <ul id="tasks-list">
        <li v-for="task in sortedTasks" :key="task['.task']">
          <TaskItem :task="task" @check="onCheck" @delete="onDelete" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TaskItem from "./components/TaskItem.vue";

import { firestore, serverTimestamp } from "./firebase";

export default {
  name: "App",
  components: {
    TaskItem,
  },
  firestore() {
    const tasks = firestore.collection("tasks");
    return {
      tasks,
      sortedTasks: tasks.orderBy("created", "desc"),
    };
  },
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      this.$firestore.tasks.add({
        name: this.newTask,
        done: false,
        created: serverTimestamp(),
      });

      this.newTask = "";
    },
    onCheck({ task, state }) {
      this.$firestore.tasks.doc(task[".key"]).update({
        done: state,
      });
    },
    onDelete(task) {
      this.$firestore.tasks.doc(task[".key"]).delete();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  justify-content: center;
  align-items: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  transition: 0.3s;
  width: 40%;
  margin: auto;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* input[type="checkbox"]:focus {
  outline: max(2px, 0.15em) solid currentColor;
  outline-offset: max(2px, 0.15em);
} */

.navbar {
  padding-bottom: 20px;
  width: 100%;
  background-color: lightskyblue;
  text-align: center;
  color: white;
  justify-content: center;
  align-items: center;
}

.input-form {
  padding: 20px;
  flex: auto;
}

.input-field {
  padding: 8px;
  border: none;
  border-bottom: 1px solid #ccc;
}

.btnAdd {
  background-color: lightskyblue;
  border: none;
  color: white;
  padding: 0.3em 1.2em;
  margin: 0 0.3em 0.3em 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 20px;
  /* font-size: 16px; */
}
.btnAdd:hover {
  background-color: #59a4cf;
}
</style>
