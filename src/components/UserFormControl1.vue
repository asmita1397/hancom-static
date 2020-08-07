<template>
  <div>        
        
     <UseLabel/>
     <UseCommandButton/>
     <UseTextBox/>
     <UseCheckbox/>
    
    </div>
 
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import UseLabel from "../views/controls/UseLabel.vue";
import UseCommandButton  from '../views/controls/UseCommandButton.vue'
import UseTextBox from "../views/controls/UseTextBox.vue";
import UseCheckbox from "../views/controls/UseCheckbox.vue";

@Component({
  components: {
   UseCommandButton,
   UseTextBox,
   UseCheckbox,
   UseLabel
  
  }
})
export default class UserFormControl1 extends Vue {}
</script>


