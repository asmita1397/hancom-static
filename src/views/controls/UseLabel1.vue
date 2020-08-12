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
    <label class="label" for="" @click.stop="labelClicked">Label1</label>
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
export default class UseLabel1 extends Vue {
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
  height: 50px;
  text-align: left;
  background:#efefef;
  float:left;
  color:black;
  padding-left:2px;
  
}
.mainDiv {
    position: absolute;
      position: absolute;
    left: 265px;
    top: 151px;
  width: 132px;
  height: 50px;
    --border-width: 5;
    --stripe-distance: 2px;
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

</style>