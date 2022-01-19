<template>
  <div id="task-item" class="my-1">
    <input 
        type="checkbox" 
        :checked="task.done"
        @change="$emit('check', {task, state: $event.target.checked})">
    <p 
        :class="{ 'line-through' : task.done }"
    > 
        {{ task.name }}
    </p>
    <button 
    @click="$emit('delete', task)" 
    class="
        px-2
        text-white
        rounded-lg 
        bg-red-600
        hover:bg-red-800
        transition ease-in-out duration-300">
        x
    </button>
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