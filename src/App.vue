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
                    
                       <div id="mdiv"  v-on:click="noDisplayTreeBrowser">
            <div class="mdiv">
              <div class="md"></div>
            </div>
          </div>
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
          <div style="display:-webkit-inline-box"> 
            <div class="dialog-action-div" @click="()=>{ display='userForm1'}">
    <button class="dialog-action-button">UserForm1</button>
  </div>
   <div class="dialog-action-div" @click="()=>{ display='userForm2'}">
    <button class="dialog-action-button">UserForm2</button>
  </div>
   <div class="dialog-action-div"  @click="()=>{ display='userForm3'}">
    <button class="dialog-action-button">UserForm3</button>
  </div></div>
            
            <UserForm1  v-if="display==='userForm1'"/>
             <UserForm2 v-else-if="display==='userForm2'"/>
            <UserForm3 v-else-if="display==='userForm3'" />
            
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
import UserFormPropertiesList from "./components/UserFormPropertiesList.vue";
import { EventBus } from "./components/event-bus";

@Component({
  components: {
    Header,
    UserForm1,
    UserForm2,
    UserForm3,
    TreeBrowser,
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
#mdiv {
float: right;
    margin: initial;
    position: relative;
    top: 0px;
    width: 20px;
    height: 16px;
    background-color: lightgray;
    border: outset;
}

.mdiv {
 height: 17px;
    width: 2px;
    margin-left: 60px;
    background-color: black;
    transform: rotate(45deg);
    z-index: 1;
    position: absolute;
    right: 8px;
}

.md {
      height: 17px;
    width: 2px;
    background-color: black;
    transform: rotate(90deg);
    z-index: 2;
    position: absolute;
    right: 0px;
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
    background-color: #f2eded;
    width: 79px;
    height: 35px;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 8px;
    padding-bottom: 8px;
    border: 1px solid gray;
    border-radius: 3px;
    overflow: hidden;
    }
:focus{
  outline: none;
}
</style>

