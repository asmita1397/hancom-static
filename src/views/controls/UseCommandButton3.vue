<template>
<div> 
 
  <div class="dialog-action-div" @click.stop="commandButtonClicked">
    <button class="dialog-action-button">Command Button 1</button>
  </div>

</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { EventBus } from "../../components/event-bus";

@Component({
  components: {
  }
})
export default class UseCommandButton3 extends Vue {
  commandButtonClicked()
  {
     EventBus.$emit(
      "controlClicked",
      "commandButton1"
    );
  }
}
</script>

<style scoped>
:focus{
  outline: none;
}

.commandbutton-element{
    border:1px solid gray;
    border-radius: 3px;
    background-color: white;
    min-width: 50px;
    max-width:112px;
    width: fit-content;
    height: fit-content;
    min-height:20px;
    padding: 0px 5px 0px 5px;
    overflow: hidden;
}
.dialog-action-button{
    background-color: white;
    width: 132px;
    /* max-width: 80px; */
    height: 40px;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 8px;
    padding-bottom: 8px;
    border: 1px solid gray;
    border-radius: 3px;
    overflow: hidden;
    left: 100px;
    position: absolute;
    top: 20px;
    }
</style>