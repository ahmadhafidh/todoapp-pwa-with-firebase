<template>
  <div id="task-item">
      <input type="checkbox" :checked="task.done"
      @change="$emit('check', {task, state: $event.target.checked})">
      <p> {{ task.name }} </p>
      <button> delete</button>
  </div>
</template>

<script>
export default {
    props: {
        task: Object
    }
}
</script>

<style>
#task-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#tasks-list {
    max-width: 500px;
    margin: 2rem auto;
    list-style: none;
}
</style>