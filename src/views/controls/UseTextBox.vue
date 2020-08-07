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
		<input  class="text-box-design" type="text" @click.stop="inputClicked" />
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
export default class UseTextBox extends Vue {
  inputClicked()
  {
    EventBus.$emit(
      "controlClicked",
      "inputBox1"
    );
  }
}
</script>

<style scoped>
:focus{
  outline: none;
}
.text-box-design{
    border:0.2px solid gray;
    box-shadow: -1px -1px gray;
    width: 100px;
    height: 20px;
    left:400px;
    top:50px;
}
.mainDiv {
    width: 105px;
    height: 24px;
    position: absolute;;
    left:400px;
    top:50px;
    outline:2px;
    --border-width: 5;
    --stripe-distance: 2px;
    border: calc(var(--border-width)*1px) solid transparent;
    border-image:
     repeating-linear-gradient( 29deg, black, transparent 0.5px,
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