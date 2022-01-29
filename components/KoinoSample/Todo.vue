<template>
  <div class="todo">
    <h1>{{ todo.title }}</h1>
    <div class="description">
      {{ todo.description }}
    </div>
    <div class="compoleted">
      <button @click="completed">
        完了
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"
import { koinoSampleTodo } from "~/store"
import { Todo as ITodo } from "~/types/todo"

@Component({})
export default class Todo extends Vue {
  @Prop({ type: Object, required: true })
    todo!: ITodo

  completed () {
    koinoSampleTodo.completed(this.todo.id)
  }
}
</script>

<style lang="scss" scoped>
.todo {
  position: relative;
  border: 1px solid black;
  padding: 12px;
  border-radius: 12px;
}

.description {
  white-space: pre;
}

.compoleted {
  position: absolute;
  top: 12px;
  right: 12px;
}
</style>
