<template>
  <div>
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class HelloWorld extends Vue {
    text='HelloWord！'
}
</script>
