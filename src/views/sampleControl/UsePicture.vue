<template>
  <div class="picture">
    <img  class="img-style" src="../../assets/controls-pictures/checkmark.png" width="20" height="20" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class UsePicture extends Vue {}
</script>

<style scoped>
.img-style{
  position: absolute;
    top: 40%;
    left: 40%;
}
.picture {
      position: relative;
    height: 100px;
    width: 120px;
    top: 10px;
  background-color: rgb(238, 238, 238);
  border: 0.7px solid black;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
:focus{
  outline:none;
}
</style>