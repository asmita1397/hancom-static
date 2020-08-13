<template>
  <div class="primary-content">
    <div class="resp-textbox">
      <input class="text-box-design" type="text" />
      <!-- <textarea class="text-box-design"></textarea> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class UseTextBox extends Vue {}
</script>

<style scoped>
/* For default values */
.text-box-design {
  border: 0.2px solid gray;
  box-shadow: -1px -1px gray;
     width: 115px;
    height: 30px;
}
:focus{
  outline:none;
}
</style>