<template >
  <div class="tree" style="min-height:'50px'">
    <div @click="nodeClicked" :style="{'margin-left': `${depth * 2}px`}" class="node">
      <span v-if="hasChildren" class="fa">{{expanded ? '[-] &#xf07c;' : '[+] &#xf07b;'}}</span>
      <span class="type" v-else>
        <i style="font-size:15px" class="fa">&#xf15c;</i>
      </span>
      {{node.name}}
    </div>

    <ul v-if="expanded">
      <TreeBrowser
        v-for="child in node.userForms"
        :key="child.name"
        :node="child"
        :depth="depth + 1"
      />
    </ul>
  </div>
</template>


<script lang="ts">

import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})

export default class TreeBrowser extends Vue {
  @Prop() node!: any;
  expanded = false;
  depth: object = {
    type: 0,
    default: 0
  };
 
  nodeClicked() {
    this.expanded = !this.expanded;   
  }
  
  get hasChildren() {
    return this.node.userForms;
  }
 
}
</script>



<style scoped>
.tree {
  width: 300px;
  position: initial;
  z-index: 1;
  top: 30;
  left: 0;
}
.node {
  text-align: left;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 7px;
  margin-block-end: 1px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  cursor: pointer;
}
</style>
