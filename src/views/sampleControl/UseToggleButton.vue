<template>
  <div>
    
   
    
              <button class="toggle-button">Toggle Button</button>
         
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked: false
    };
  },
  methods: {
    toSelect() {
      this.clicked = !this.clicked;
    }
  }
};
</script>

<style scoped>
.toggle-button {
  height: 60px;
  width: 55px;
  box-shadow: 1px 1px gray;
  overflow: hidden;
}
</style>