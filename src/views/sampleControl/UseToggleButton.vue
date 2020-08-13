<template>
  <div>
      <button class="toggle-button">Toggle Button</button>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class UseToggleButton extends Vue {}
</script>

<style scoped>
.toggle-button {
  height: 60px;
  width: 55px;
  box-shadow: 1px 1px gray;
  overflow: hidden;
}
</style>