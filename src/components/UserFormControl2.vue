<template>
  <div>        
        
     <UseLabel/>
     <UseCommandButton/>
     <UseTextBox/>
    <!--  <UseBorder/> -->
    </div>
 
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import UseLabel from "../views/controls/UseLabel.vue";
import UseCommandButton  from '../views/controls/UseCommandButton.vue'
import UseTextBox from "../views/controls/UseTextBox.vue";
import UseBorder from "../views/controls/UseBorder.vue";

@Component({
  components: {
   /* UseLabel, */
   UseCommandButton,
   UseTextBox,
   UseBorder
  
  }
})
export default class UserFormControl2 extends Vue {
 
}
</script>


