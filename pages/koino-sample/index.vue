<template>
  <div>
    <div><todo-list :todos="todos" /></div>
    <div>
      <NuxtLink to="/koino-sample/new">
        <button>追加</button>
      </NuxtLink>
    </div>
  </div>
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
