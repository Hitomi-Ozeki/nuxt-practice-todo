<template>
  <div><todo-list :todos="todos" /></div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { koinoSampleTodo } from "~/store"
import TodoList from "~/components/KoinoSample/TodoList.vue"

@Component({
  components: { TodoList },
})
export default class KoinoSample extends Vue {
  get todos () {
    return koinoSampleTodo.data
  }
}
</script>
