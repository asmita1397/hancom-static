<template>
  <div>        
        
  <div class="row1">
  <div class="column1" >
    <UseLabel/>
  </div>
  <div class="column1">
   <UseTextBox/>
  </div>
  <div class="column1">
   <UseCheckBox/>
  </div>
  <div class="column1">
  <UseComboBox/>
  </div>
  <div class="column1">
 <UseOptionButton/>
  </div>
</div>

<div class="row3">
 <div class="column3" style=" position: relative;top: 59px;">
   <UseCommandButton/>
  </div>
 
  <div class="column3" >
   <UseScroll/>
  </div>
  <div class="column3" style=" position: relative;top: 59px;">
   <UseToggleButton/>
  </div>
  <div class="column3" style=" position: relative;top: 59px;">
   <UseSpinButton/>
  </div>
   <div class="column3">
   <UseTabStrip/>
  </div>

</div>

<div class="row2">
  <div class="column2" >
    <UseFrame/>
  </div>
  <div class="column2" >
   <UseListBox/>
  </div>
  <div class="column2">
  <UsePicture/>
   
  </div>
  <div class="column2" >
    <UseMultiPage/>
  </div>
 
</div>


  
    
    
    </div>
 
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import UseCheckBox from "../views/sampleControl/UseCheckBox.vue";
import UseComboBox from "../views/sampleControl/UseComboBox.vue";
import UseCommandButton from "../views/sampleControl/UseCommandButton.vue";
import UseFrame from "../views/sampleControl/UseFrame.vue";
import UseLabel from "../views/sampleControl/UseLabel.vue";

import UseListBox from "../views/sampleControl/UseListBox.vue";
import UseMultiPage from "../views/sampleControl/UseMultiPage.vue";
import UseOptionButton from "../views/sampleControl/UseOptionButton.vue";
import UsePicture from "../views/sampleControl/UsePicture.vue";
import UseRefEdit from "../views/sampleControl/UseRefEdit.vue";

import UseScroll from "../views/sampleControl/UseScroll.vue";
import UseSpinButton from "../views/sampleControl/UseSpinButton.vue";
import UseTabStrip from "../views/sampleControl/UseTabStrip.vue";
import UseTextBox from "../views/sampleControl/UseTextBox.vue";
import UseToggleButton from "../views/sampleControl/UseToggleButton.vue";


@Component({
  components: {
 UseLabel,
   UseCheckBox,
    UseComboBox,
    UseCommandButton,
    UseFrame,
    UseListBox,
    UseMultiPage,
    UseOptionButton,
    UsePicture,
    UseRefEdit,
    UseScroll,
    UseSpinButton,
    UseTabStrip,
    UseTextBox,
    UseToggleButton 
  }
})
export default class UserFormControl4 extends Vue {
 
}
</script>


<style  scoped>
.column1 {
  text-align: center;
  float: left;
  width: 17%;
  height: 30px;
  padding:10px; 
}


.row1:after {
  content: "";
  display: table;
  clear: both;
}


.column2 {
  text-align: center;
  float: left;
  width: 20%;
  height:120px;
  padding:10px; 
}



.row2:after {
  content: "";
  display: table;
  clear: both;
}
.column3 {
  text-align: center;
  float: left;
  width: 17%;
  height: 160px;
  padding:10px; 
}


.row3:after {
  content: "";
  display: table;
  clear: both;
}


</style>


