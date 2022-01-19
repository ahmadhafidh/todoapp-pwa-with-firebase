<template>
    <div class="flex justify-between items-center">
        <input class="h-16 w-16 p-1 mr-7 opacity-70 hover:opacity-100" type="checkbox" :checked="task.done" @change="$emit('check', {task, state: $event.target.checked})">
        <p class="w-full text-xl bg-gradient-to-r from-yellow-300 to-green-300 my-3 p-3 rounded-lg flex justify-center mx-auto"> {{ task.name }} </p>
        <button class="mx-3 my-1 ml-7 rounded border-2 border-green-600 bg-green-600 p-3 font-bold text-yellow-300 opacity-70 hover:opacity-100" @click="$emit('delete', task)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
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