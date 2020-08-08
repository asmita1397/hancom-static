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
export default class UseLabel3 extends Vue {
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
  left:100px;
  top:100px;
  border: none;
  width: 130px;
  background-color: rgb(238, 238, 238);
  height: 30px;
  text-align: left;
  background: white;
  float:left;
  padding-left:2px;
  
}

</style>