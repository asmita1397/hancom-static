<template>
  <div>        
        
      <UseListBox/>
     <UseCheckbox/>
    
    </div>
 
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import UseCheckbox from "../views/controls/UseCheckbox.vue"; 
import UseListBox from "../views/controls/UseListBox.vue";

@Component({
  components: {
   
   UseCheckbox,
   UseListBox
  }
})
export default class UserFormControl3 extends Vue {
 
}
</script>


