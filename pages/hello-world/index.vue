<template>
  <div class="bold">
    ページのテンプレ
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class KoinoSample extends Vue {}
</script>
<style lang="scss" scoped>
// cssが必要な時のサンプル(要らない時は要らない)
.bold {
  font-weight: bold;
}
</style>
