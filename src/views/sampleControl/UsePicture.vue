<template>
  <div class="picture">
    <img  class="img-style" src="../../assets/controls-pictures/checkmark.png" width="20" height="20" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.img-style{
  position: absolute;
    top: 40%;
    left: 40%;
}
.picture {
      position: relative;
    height: 100px;
    width: 120px;
    top: 10px;
  background-color: rgb(238, 238, 238);
  border: 0.7px solid black;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
:focus{
  outline:none;
}
</style>