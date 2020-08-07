<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <Header />
      </div>
      <div class="mainbody">
        <Split class="outersplit">
          <SplitArea :size="25" class="splitleft">
            <Split :direction="vertical">
              <SplitArea class="innersplit">
                 <div v-if="noDisplayTree===false">
                  <div class="sideheader">
                    <span class="sideheader1">
                      Project - VBAProject
                      <button
                        style="float:right"
                        v-on:click="noDisplayTreeBrowser"
                      >
                        <b>X</b>
                      </button>
                    </span>
                  </div>

                  <div>
                    <i class="material-icons">&#xe2c8;</i>
                  </div>
                  <hr />
                  <div>
                    <TreeBrowser style="cursor:pointer;" :node="root"/>
                  </div>
                </div>
              </SplitArea>

              <SplitArea class="innersplit">
                <UserFormPropertiesList />
              </SplitArea>
            </Split>
          </SplitArea>
          <SplitArea :size="75" class="right">
            <button @click="()=>{ display='userForm1'}">UserForm1</button>
            <button @click="()=>{ display='userForm2'}">UserForm2</button>
            <button @click="()=>{ display='userForm3'}">UserForm3</button>
            <UserForm1  v-if="display==='userForm1'"/>
             <UserForm2 v-else-if="display==='userForm2'"/>
            <UserForm3 v-else-if="display==='userForm3'" />
            <ToolBox />
          </SplitArea>
        </Split>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import UserForm1 from "./components/UserForm1.vue";
import UserForm2 from "./components/UserForm2.vue";
import UserForm3 from "./components/UserForm3.vue";

import { State, Getter, Mutation } from "vuex-class";

import TreeBrowser from "./components/TreeBrowser.vue";
import ToolBox from "./views/dialogs/ToolBox.vue";
import UserFormPropertiesList from "./components/UserFormPropertiesList.vue";
import { EventBus } from "./components/event-bus";

@Component({
  components: {
    Header,
    UserForm1,
    UserForm2,
    UserForm3,
    TreeBrowser,
    ToolBox,
    UserFormPropertiesList
  }
})
export default class App extends Vue {
  @Getter root!: any;
  vertical = "vertical";
  display = 'bbbb';
  noDisplayTree= false;
  noDisplayTreeBrowser() {
      this.noDisplayTree = true;
    }
  mounted()
  {
    console.log("root",this.root)
  }
 
}
</script>


<style scoped>
#app {
font-family: Tahoma;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size:14px;
}

.splitleft {
  width: auto;
  z-index: 1;
  top: 5;
  left: 5;
  background-color: white;
  overflow-x: hidden;
  border: 2px solid grey;
}
.outersplit {
  height: 83%;
  position: fixed;
}
.innersplit {
  border: 1px solid grey;
}
.sideheader1 {
  /* width: 250px; */
  background-color: rgb(142, 191, 231);
  margin-bottom: 8px;
}
.sideheader {
  height: 22px;
  text-align: left;
  background-color: rgb(142, 191, 231);
}

.right {
  right: 0;
  background-color: #80888e;
  height: 100%;
  width: 75%;
  position: absolute;
  z-index: 1;
  overflow-x: hidden;
  /* padding-top: 20px; */
}
.container {
  width: 100%;
  max-height: 500px;
}
.header {
  /* height: 40px; */
  height: 10%;
  border-bottom: 1px solid #eee;
  background-color: #ffffff;
}
</style>

