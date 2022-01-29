<template>
  <div>
    <div>
      <h1>編集画面</h1>
    </div>
    <div>
      <div>
        <div>
          <h2>タイトル</h2>
        </div>
        <div>
          <input
            type="text"
            :value="todo.title"
            @input="edit('title', $event)"
          >
        </div>
      </div>
      <div>
        <div>
          <h2>詳細</h2>
        </div>
        <div>
          <input
            type="text"
            :value="todo.description"
            @input="edit('description', $event)"
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Emit } from "nuxt-property-decorator"
import { Todo } from "~/types/todo"

@Component({})
export default class TodoEditor extends Vue {
  @Prop({ type: Object, required: true })
    todo!: Todo

  @Emit()
  edit (key: keyof Todo, e: InputEvent): Partial<Todo> {
    if (e.target && e.target instanceof HTMLInputElement) {
      return {
        [key]: e.target.value,
      }
    } else {
      return {}
    }
  }
}
</script>
