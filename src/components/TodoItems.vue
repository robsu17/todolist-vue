<template>
  <div class="space-y-2">
    <TodoItem
        v-for="todo in $store.state.todos"
        :todo="todo"
        :key="todo.id"
    />
  </div>
</template>
<script setup>
import TodoItem from "@/components/TodoItem.vue";
</script>