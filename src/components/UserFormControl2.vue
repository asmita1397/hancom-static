<template>
  <div>        
        <UseTextBox/>
         <UseLabel2/>
     <UseCommandButton2/>
     <!--
     <UseCheckbox/>
      -->
     
    
    </div>
 
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
 import UseLabel2 from "../views/controls/UseLabel2.vue";
import UseCommandButton2  from '../views/controls/UseCommandButton2.vue'
/*import UseCheckbox from "../views/controls/UseCheckbox.vue"; */
import UseTextBox from "../views/controls/UseTextBox.vue";

@Component({
  components: {
  /*  
   UseCheckbox,
    */
   UseCommandButton2,
   UseTextBox,
   UseLabel2
  }
})
export default class UserFormControl2 extends Vue {
 
}
</script>


