<template>
  <div class="todo">
    <h1>{{ todo.title }}</h1>
    <div class="description">
      {{ todo.description }}
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"
import { Todo as ITodo } from "~/types/todo"

@Component({})
export default class Todo extends Vue {
  @Prop({ type: Object, required: true })
    todo!: ITodo
}
</script>

<style lang="scss" scoped>
.todo {
  border: 1px solid black;
  padding: 12px;
  border-radius: 12px;
}

.description {
  white-space: pre;
}
</style>
