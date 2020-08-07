<template>
  <div v-if="noDisplay===false">
    <div>
      <div class="sideheader">
        <span class="sideheader1">
          Properties -
          <!--  {{this.selectedUserForm && this.selectedUserForm.property.name}} -->
          <button style="float:right" v-on:click="noDisplayTable">
            <b>X</b>
          </button>
        </span>
      </div>
    </div>
    <div class="form-group">
      <label for="userForm"></label>

      <select class="form-control" name="selectedUserForm" id="selectedUserForm">
        <option value="value1">value1</option>
        <option value="value2">value2</option>
      </select>

      <UserFormTable v-if="userFormType==='userForm1'" :userFormData="data" />
      <UserFormTable v-if="userFormType==='userForm2'" :userFormData="data" />
      <UserFormTable v-if="userFormType==='userForm3'" :userFormData="data" /> 


      <!-- <LabelControlTable :controlData="labelData"/> -->

      <CommandButtonControl v-if="controlType==='commandButton1'" :controlData="commandButtonData" />
       <TextBoxTable v-if="controlType==='inputBox1'" :controlData="TextboxData"/>
       <CheckBoxControlTable v-if="controlType==='checkBox1'" :controlData="CheckBoxData" />
     
       
       
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus } from "./event-bus";
import UserFormTable from "./UserFormTable.vue";
import { userFormData } from "../models/UserFormData";
import { Label } from "../models/Label";
import { CommandButton } from "../models/CommandButton";
import { TextBox } from "../models/TextBox";
import { CheckBox } from "../models/CheckBox";
import LabelControlTable  from "./LabelControlTable.vue";
import CommandButtonControl  from "./CommandButtonControl.vue";
import TextBoxTable from "./TextBoxTable.vue";
import CheckBoxControlTable from "./CheckBoxControlTable.vue";

@Component({
  components: { UserFormTable, LabelControlTable,CommandButtonControl ,TextBoxTable, CheckBoxControlTable}
})
export default class UserFormPropertiesList extends Vue {
  noDisplay = false;
  noDisplayTable() {
    this.noDisplay = true;
  }
  userFormType = "";
  controlType = "";
  data = userFormData;
  labelData= Label;
  commandButtonData= CommandButton;
  TextboxData=TextBox;
  CheckBoxData=CheckBox;

  mounted() {
    EventBus.$on("userFormClicked", (userForm: string) => {
this.controlType = "";
      this.userFormType = userForm;
      console.log("clicked", this.userFormType === "userForm3");
    });

    EventBus.$on("controlClicked", (control: string) => {
       this.userFormType=""
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
  background-color: #99b4d1;;
  margin-bottom: 8px;
}
.sideheader {
  height: 22px;
  text-align: left;
  padding: 0pc;
  background-color: #99b4d1;;
}
.form-control {
  float: left;
  width: 100%;
  cursor: pointer;
  background-color: white;
}
</style>