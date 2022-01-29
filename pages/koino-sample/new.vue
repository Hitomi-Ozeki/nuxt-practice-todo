<template>
  <div>
    <div><todo-editor :todo="todo" @edit="edit" /></div>
    <div>
      <button @click="clickAdd">
        追加
      </button>
    </div>
    <div>
      <nuxt-link to="/koino-sample/">
        戻る
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { Todo } from "~/types/todo"
import TodoEditor from "~/components/KoinoSample/TodoEditor.vue"
import { koinoSampleTodo } from "~/store"

@Component({ components: { TodoEditor } })
export default class extends Vue {
  // 本当はVuexのSotreに入れたいんだけど
  // 今回は省略
  todo: Todo = {
    title: "",
    description: "",
    id: "",
    completed: false,
  }

  edit (parts: Partial<Todo>) {
    this.todo = {
      ...this.todo,
      ...parts,
    }
  }

  clickAdd () {
    Promise.resolve(koinoSampleTodo.addTodo(this.todo)).then(() =>
      this.$router.push("/koino-sample"),
    )
  }
}
</script>
