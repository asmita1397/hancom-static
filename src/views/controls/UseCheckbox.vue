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
      <label class="control" @click.stop="checkBoxClicked">
       <input type="checkbox" class="control-input visually-hidden"/>
       <span class="control-indicator"></span>
       CheckBox1
   </label>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Label } from "../../models/Label";
import { EventBus } from "../../components/event-bus";

@Component({
  components: {
  }
})
export default class UseCheckBox extends Vue {
  checkBoxClicked()
  {
    console.log("checkBox clicked")
    EventBus.$emit(
      "controlClicked",
      "checkBox1"
    );
  }
}
</script>

<style scoped>
.mainDiv {
     width: 137px;
    height: 100px;
    position:absolute;
    left: 195px;
    top: 124px;
    --border-width: 5;
    --stripe-distance: 1px;
     border: calc(var(--border-width)*1px) solid transparent;
    border-image: repeating-linear-gradient( 29deg, black, transparent .4px,
     transparent var(--stripe-distance), black calc(var(--stripe-distance) + 0.1px))
      var(--border-width);
}

.handle {
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    background: white;
    border: 1px solid #333;
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
.visually-hidden{
        border: 0;
        clip: rect(0,0,0,0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
    .control{
        display: inline-flex;
        align-items: center;
        background:white;
         width: 137px;
    height: 100px;
    }
    .control-indicator{
        width:14px;
        height: 14px;
        margin: 1px;
        margin-right: 6px;
        border: 1px solid black;
        border-radius: 3px;
        /* background-image: url('./checkmark.png'); */
    }
    .control-input:hover ~ .control-indicator {
        background-color: rgb(184, 209, 255);
    }
    .control-input:checked ~ .control-indicator {
        background-color: rgb(107, 158, 253);
        background-image: url('../../assets/pictures/checkmark.png');
        background-size: 10px;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>