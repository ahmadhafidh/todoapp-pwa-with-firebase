<template>
  <div id="task-item">
    <input type="checkbox" :checked="task.done" @change="$emit('check', { task, state: $event.target.checked })" />
    <p>{{ task.name }}</p>
    <button class="btnDel" @click="$emit('delete', task)">x</button>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  },
};
</script>

<style>
#task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#tasks-list {
  max-width: 500px;
  margin: 2rem auto;
  list-style: none;
}

.btnDel {
  background-color: #FF5733;
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

.btnDel:hover {
  background-color: #e64d2a;
}
</style>
