<template>
<div> 
  <div class="mainDiv">
<div class="handle handle-tl"></div>
<div class="handle handle-tr"></div>
<div class="handle handle-tm"></div>
<div class="handle handle-ml"></div>
<div class="handle handle-mr"></div>
<div class="handle handle-bl"></div>
<div class="handle handle-br"></div>
<div class="handle handle-bm"></div>
  <div class="dialog-action-div" @click.stop="commandButtonClicked">
    <button class="dialog-action-button">Command Button 2</button>
  </div>
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
export default class UseCommandButton2 extends Vue {
  commandButtonClicked()
  {
     EventBus.$emit(
      "controlClicked",
      "commandButton2"
    );
  }
}
</script>

<style scoped>
:focus{
  outline: none;
}
.mainDiv {
    width: 80px;
    height: 50px;
    position:absolute;
   left: 339px;
    top: 100px;
    --border-width: 5;
    --stripe-distance: 2px;
   border: calc(var(--border-width)*1px) solid transparent;
    border-image:
     repeating-linear-gradient( 29deg, black, transparent .4px,
     transparent var(--stripe-distance), black calc(var(--stripe-distance) + 0.1px))
      var(--border-width);
}

.handle {
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    background: black;
    border: 1px solid white;
}
.handle-tl {
  top: -5px;
  left: -5px;
  cursor: nw-resize;
}
.handle-tm {
  top: -5px;
  left: 50%;
  margin-left: -5px;
  cursor: n-resize;
}
.handle-tr {
  top: -5px;
  right: -5px;
  cursor: ne-resize;
}
.handle-ml {
  top: 50%;
  margin-top: -5px;
  left: -5px;
  cursor: w-resize;
}
.handle-mr {
  top: 50%;
  margin-top: -5px;
  right: -5px;
  cursor: e-resize;
}
.handle-bl {
  bottom: -5px;
  left: -5px;
  cursor: sw-resize;
}
.handle-bm {
  bottom: -5px;
  left: 50%;
  margin-left: -5px;
  cursor: s-resize;
}
.handle-br {
  bottom: -5px;
  right: -5px;
  cursor: se-resize;
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
        width: 80px;
        max-width: 80px;
        height: 50px;
        padding-left: 5px;
        padding-right: 5px;
        padding-top: 8px;
        padding-bottom: 8px;
        border: 1px solid gray;
        border-radius: 3px;
        overflow: hidden;
    }
</style>