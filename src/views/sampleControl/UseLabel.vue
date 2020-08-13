<template>
  <div>
   
    <label class="label" for="" @click.stop="labelClicked">Label</label>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { EventBus } from "../../components/event-bus";

@Component({
  components: {
  }
})
export default class UseLabel extends Vue {
  labelClicked()
  {
    EventBus.$emit(
      "controlClicked",
      "label1"
    );
  }
}
</script>

<style scoped>

.label {
  border: none;
  width: 130px;
  background-color: rgb(238, 238, 238);
  height: 35px;
  text-align: left;
  float:left;
  padding-left:2px;
  
}
:focus{
  outline:none;
}
</style>