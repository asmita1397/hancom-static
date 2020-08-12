<template>
  <div v-if="noDisplay===false">
    <div>
      <div class="sideheader">
        <span class="sideheader1">
          Properties -
          <!--  {{this.selectedUserForm && this.selectedUserForm.property.name}} -->
          <!--  <button style="float:right" v-on:click="noDisplayTable">
            <b>X</b>
          </button>-->
         
          <div id="mdiv"  v-on:click="noDisplayTable">
            <div class="mdiv">
              <div class="md"></div>
            </div>
          </div>
         

        </span>
      </div>
    </div>
    <div class="form-group">
      <label for="userForm"></label>

      <select class="form-control" name="selectedUserForm" id="selectedUserForm" > 


        <option >UserForm1 UserForm</option>
        <option >Label1 Label</option>
         <option  >CommandButton1 CommandButton</option>

        <option >UserForm2 UserForm</option>
         <option>Label2 Label</option>
        <option>CommandButton2 CommandButton</option>
        <option>TextBox1  TextBox</option>

        <option  >UserForm3 UserForm</option>
         <option  >CheckBox1 CheckBox</option>
        <option >ListBox1 ListBox</option>
      
        
      </select>

      <UserFormTable v-if="userFormType==='userForm1'" :userFormData="userForm1" />
      <UserFormTable v-if="userFormType==='userForm2'" :userFormData="userForm2" />
      <UserFormTable v-if="userFormType==='userForm3'" :userFormData="userForm3" />

      <LabelControlTable v-if="controlType==='label1'" :controlData="labelData1" />
      <CommandButtonControl
        v-if="controlType==='commandButton1'"
        :controlData="commandButtonData1"
      />

      <LabelControlTable v-if="controlType==='label2'" :controlData="labelData2" />
      <CommandButtonControl
        v-if="controlType==='commandButton2'"
        :controlData="commandButtonData2"
      />
      <TextBoxTable v-if="controlType==='inputBox1'" :controlData="TextboxData" />

      <CheckBoxControlTable v-if="controlType==='checkBox1'" :controlData="CheckBoxData" />
      <ListControlTable :controlData="ListBoxData" v-if="controlType==='listBox1'" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus } from "./event-bus";
import UserFormTable from "./UserFormTable.vue";
import { userFormData1 } from "../models/UserFormData1";
import { userFormData2 } from "../models/UserFormData2";
import { userFormData3 } from "../models/UserFormData3";
import { Label1 } from "../models/Label1";
import { Label2 } from "../models/Label2";
import { CommandButton1 } from "../models/CommandButton1";
import { CommandButton2 } from "../models/CommandButton2";
import { TextBox } from "../models/TextBox";
import { CheckBox } from "../models/CheckBox";
import LabelControlTable from "./LabelControlTable.vue";
import CommandButtonControl from "./CommandButtonControl.vue";
import TextBoxTable from "./TextBoxTable.vue";
import CheckBoxControlTable from "./CheckBoxControlTable.vue";
import { ListBox } from "../models/ListBox";
import ListControlTable from "./ListControlTable.vue";



@Component({
  components: {
    UserFormTable,
    LabelControlTable,
    CommandButtonControl,
    TextBoxTable,
    CheckBoxControlTable,
    ListControlTable
  }
})
export default class UserFormPropertiesList extends Vue {
  noDisplay = false;
  noDisplayTable() {
    this.noDisplay = true;
  }
  userFormType = "";
  controlType = "";
  userForm1 = userFormData1;
  userForm2 = userFormData2;
  userForm3 = userFormData3;
  labelData1 = Label1;
  labelData2 = Label2;
  commandButtonData1 = CommandButton1;
  commandButtonData2 = CommandButton2;

  TextboxData = TextBox;
  CheckBoxData = CheckBox;
  ListBoxData = ListBox;

  mounted() {
    EventBus.$on("userFormClicked", (userForm: string) => {
      this.controlType = "";
      this.userFormType = userForm;
    });

    EventBus.$on("controlClicked", (control: string) => {
      this.userFormType = "";
      this.controlType = control;
      console.log(this.controlType);
    });
  }
}
</script>


<style scoped>
.sideheader1 {
  top: 0%;
  width: 250px;
  background-color: #99b4d1;
  margin-bottom: 8px;
}
.sideheader {
  height: 22px;
  text-align: left;
  padding: 0pc;
  background-color: #99b4d1;
}
.form-control {
  float: left;
  width: 100%;
  cursor: pointer;
  background-color: white;
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
</style>