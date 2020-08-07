<template>
  <div class="labeldiv" >
    <div class="label-border" @click="toSelect">
      <a :class="isActive&&'span4'">
        <a :class="isActive&&'span3'">
          <a :class="isActive&&'span2'">
            <a :class="isActive&&'span1'">
              <input
                class="label"
                value="Label1"
                :tabindex="properties.tabindex"
                :style="{
                  backgroundColor:properties.backColor,
                  backgroundImage:properties.picture,
                  border:properties.border,
                  borderColor:properties.borderColor,
                  fontSize:properties.font.fontSize,
                  fontFamily:properties.font.fontFamily,
                  fontStyle:properties.font.fontStyle,
                  fontWeight:properties.font.fontWeight,
                  color:properties.foreColor,
                  height:properties.height,
                  position:properties.position,
                  left:properties.left,
                  cursor:properties.mouseIcon,
                  boxShadow:properties.specialEffect,
                  textAlign:properties.textAlign,
                  top:properties.top,
                  width:properties.width,
                  wordWrap:properties.wordWrap
                  }"
              />
            </a>
          </a>
        </a>
      </a>
    </div>
  </div>
</template>

<script>
import { Label } from "../../models/Label.ts";
export default {
  data() {
    return {
      properties: Label,
      isActive: false,
    };
  },
  methods: {
    toSelect() {
      this.isActive = !this.isActive;
    },
  },
  mounted() {
    console.log(this.properties);
  },
};
</script>
<style scoped>
.labeldiv {
  position: relative;
  /* height: 400px; */
}
.label {
  position: inherit;
  /* top:0px; */
  border: none;
  width: 130px;
  background-color: rgb(238, 238, 238);
  height: 30px;
  text-align: left;
}
.label-border {
  border: none;
  width: 130px;
  /* background-color: rgb(238, 238, 238); */
  height: 30px;
}
.span1 {
  outline: dotted 1.5px black;
  outline-offset: 3px;
  width: auto;
}
.span2 {
  outline: dotted 1.5px black;
  outline-offset: 4px;
  width: auto;
}
.span3 {
  outline: dotted 1.5px black;
  outline-offset: 4px;
  width: auto;
}
.span4 {
  outline: dotted 1.5px black;
  outline-offset: 5px;
  width: auto;
}
</style>