<template>
  <div>        
        
     <UseLabel1/>
     <UseCommandButton3/>
     <!-- <UseTextBox/> -->
    
    
    </div>
 
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import UseLabel1 from "../views/controls/UseLabel1.vue";
import UseCommandButton3  from '../views/controls/UseCommandButton3.vue'
import UseTextBox from "../views/controls/UseTextBox.vue";
import UseCheckbox from "../views/controls/UseCheckbox.vue";

@Component({
  components: {
   UseCommandButton3,
   UseTextBox,
   UseCheckbox,
   UseLabel1
  
  }
})
export default class UserFormControl1 extends Vue {}
</script>


