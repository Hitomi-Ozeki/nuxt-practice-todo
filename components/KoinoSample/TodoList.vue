<template>
  <div>
    <div v-for="todo in todoFilted" :key="todo.id" class="todo-item">
      <todo :todo="todo" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"
import { Todo as ITodo } from "~/types/todo"
import Todo from "~/components/KoinoSample/Todo.vue"

@Component({ components: { Todo } })
export default class TodoList extends Vue {
  @Prop({ type: Array, required: true })
    todos!: ITodo[]

  get todoFilted () {
    return this.todos.filter(t => !t.completed)
  }
}
</script>
<style lang="scss" scoped>
.todo-item {
  padding: 8px;
}
</style>
