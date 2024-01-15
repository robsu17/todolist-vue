<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <TodoForm />
      <TodoSpinner v-if="loading" />
      <template v-else>
        <TodoItems />
        <TodoEmpty />
      </template>
    </div>
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm.vue";
import TodoItems from "@/components/TodoItems.vue";
import TodoSpinner from "@/components/TodoSpinner.vue";
import TodoEmpty from "@/components/TodoEmpty.vue";

export default {
  name: 'App',
  components: {
    TodoEmpty,
    TodoSpinner,
    TodoItems,
    TodoForm,
  },
  data() {
    return {
      loading: false,
      todoEmpty: false
    }
  },
  created() {
    this.loading = true
    this.$store.dispatch('getTodos')
        .finally(() => {
          this.loading = false
        })
  }
}
</script>
