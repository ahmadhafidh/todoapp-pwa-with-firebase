<template>
  <div class="flex items-center justify-between">
    <input
      class="toggle"
      type="checkbox"
      :checked="task.done"
      @change="$emit('check', { task, state: $event.target.checked })"
    />
    <p class="text-lg font-semibold">{{ task.name }}</p>
    <button class="btn btn-error btn-xs" @click="$emit('delete', task)">delete</button>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
}
</script>
