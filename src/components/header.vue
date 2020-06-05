<template>
  <div class="headerContainer">
    <div class="logoText">jlarsson.nu</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.headerContainer {
  height: 150px;
  width: 100vw;
  color: white;
  background-color: #d4d4d4;
  background-image: url(../assets/code2.jpg);
  background-size: 40%;
}
.logoText {
  position: relative;
  top: 50px;
  left: 30px;
  font-size: 50px;
  font-family: 'Gochi Hand', cursive;
  -webkit-text-stroke: 2px black;
}
</style>
