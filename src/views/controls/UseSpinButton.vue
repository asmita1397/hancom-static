<template>
  <div>
    <div class="outer-buttons">
      <div class="inner-buttons">
        <button class="button-style">
          <div class="triangle-up"></div>
        </button>
        <button class="button-style">
          <div class="triangle-down"></div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.outer-buttons{
    width: fit-content;
    height: fit-content;
    /* border: 1px solid rgb(188, 192, 248); */
}

.button-style{
    border: 0.1px solid rgb(188, 192, 248);
    background-color: white;
    background-color: white;
    offset: none;
    padding: 2px;
    padding-left: 4px;
    padding-right: 4px;
}
.button-style:hover{
    border-color: 1px solid rgb(188, 192, 248);
    background-color: rgb(209, 212, 253);
}
.button-style:focus{
    border-color: 1px solid rgb(188, 192, 248);
    background-color: rgb(138, 146, 252);
}
.inner-buttons{
    display: grid;
    grid-template-columns: 1fr;
}
.triangle-up {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid black;
}
.triangle-down {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
}
</style>