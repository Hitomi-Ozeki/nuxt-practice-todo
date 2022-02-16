<template>
  <div>
    <div>
      <input v-model="message" type="text">
    </div>
    <div>
      {{ message }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
@Component({})
export default class HelloWorld extends Vue {
  message:string = "ここに入力して下さい"
}

</script>
