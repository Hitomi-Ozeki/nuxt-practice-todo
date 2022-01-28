<template>
  <div>
    <h1>{{ todo.title }}</h1>
    <div class="description">
      {{ todo.description }}
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"
import { Todo } from "~/types/todo"

Component({})
export default class KoinoSample extends Vue {
  @Prop({ type: Object, required: true })
    todo!: Todo
}
</script>
<style lang="scss" scoped>
.todo {
  border: 1px solid black;
  padding: 24px;
}

.description {
  white-space: pre;
}
</style>
