<template>
  <div>
    <div class="outercontext-div" > 
      <div class="wrapper-context">
        <button class="wrapper1-context" @click="handleSelectAll($event,userForm,userFormKey)">
          <div>
            <i style="font-size:15px" class="fa">&#xf07b;</i>
          </div>
          <span class="set-context">
            Select
            <u>A</u>ll
          </span>
        </button>

        <button class="wrapper1-context" @click="handlePasteControl($event,userFormKey)">
          <i style="font-size:15px" class="fa">&#xf0ea;</i>
          <span class="iset-context" :class="(Object.keys(getCuttedControlList).length !== 0 || Object.keys(getSelectAllControls).length !== 0)?'':'disabled'">
            <u>P</u>aste
          </span>
        </button>
        
        <button class="wrapper1-context"  @click="handleDeleteControl($event,userFormKey)">
         <div></div>
         <span class="set-context"><u>D</u>elete</span>
       </button>
       <div>
          <hr />
        </div>
        <button class="wrapper1-context">
          <i style="font-size:15px" class="fa">&#xf187;</i>
          <span class="iset-context">
            Prope<u>r</u>ties
          </span>
        </button>
        <button class="wrapper1-context">
          <div>
            <i style="font-size:15px" class="fa">&#xf1ea;</i>
          </div>
          <span class="set-context">
            View C<u>o</u>de
          </span>
        </button>
        <button class="wrapper1-context">
          <div></div>
          <span class="set-context">
            T<u>a</u>b Order
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Mutation, Getter } from "vuex-class";

@Component({
  components: {
   
  }
})
export default class ControlContextMenu extends Vue {
  @Prop() userForm!: any;
  @Prop() userFormKey!: any;
 


  @Getter getCuttedControlList!: any;
  @Mutation cutSelectedControl!: Function;
  @Mutation updateCuttedControlList!: Function;
  @Mutation updateBlinkProperty!: Function;
  @Mutation pasteControl!: Function
  @Mutation emptySelectAllControls!: Function
  @Mutation selectAllControls!: any;
  @Getter getSelectAllControls!: any;
  @Mutation selectedControlList!: any;
 

  

 handlePasteControl(e: any, userFormKey: string) {
    const controlList =
      Object.keys(this.getSelectAllControls).length > 0
        ? this.getSelectAllControls
        : this.getCuttedControlList;
    this.pasteControl({
      userFormKey: userFormKey,
      controlList: controlList
    });
  }
  handleSelectAll(e: any, userForm: any, userFormKey: string) {
    this.selectedControlList({
      controls: userForm.controls,
      userFormKey: userFormKey
    });
    console.log("----------------", this.getSelectAllControls);
    this.selectAllControls({
      selectedControlList: this.getSelectAllControls,
      userFormKey: userFormKey
    });
  }
  handleDeleteControl(e: any, userFormKey: string) {
    this.cutSelectedControl({
      userFormKey: userFormKey,
      controlList: this.getSelectAllControls
    });
    this.emptySelectAllControls();
    /* this.updateCuttedControlList() */
  }
} 
</script>

<style scoped>
.outercontext-div {
  border: 0.3px solid black;
  box-shadow: 2px 2px lightgray;
  width: 150px;
  height: auto;
  font-size: 13px;
  position:fixed;
  
}
.wrapper-context {
  display: grid;
  grid-template-columns: 1fr;
  /* grid-row-gap: 4px; */
  width: 100%;
  height: 100%;
}
.wrapper1-context {
  display: grid;
  grid-template-columns: 10% 90%;
  border: 0.3px solid white;
  background: white;
  height: 24px;
  padding-top: 5px;
  outline: none;
}
.wrapper1-context:hover {
  background-color: rgb(155, 215, 255);
  border: 0.3px solid rgb(0, 153, 255);
}
.iset-context {
  text-align: left;
  padding-left: 15px;
  font-size: 12px;
}
.set-context {
  text-align: left;
  padding-left: 15px;
  font-size: 12px;
}
hr {
  margin: 0px;
}
.disabled {
  /* pointer-events:none;  */
  opacity: 0.5;
}
</style>