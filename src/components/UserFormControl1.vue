<template>
  <div>
    <UseCheckbox />
    <UseSpinButton />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import UseCheckbox from "../views/controls/UseCheckbox.vue";
import UseSpinButton from "../views/controls/UseSpinButton.vue";

@Component({
  components: {
    UseCheckbox,
    UseSpinButton
  }
})
export default class UserFormControl1 extends Vue {}
</script>


