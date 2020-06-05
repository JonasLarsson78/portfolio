<template>
  <span class="footerContainer">
    <div class="footerImgBack" />
    <div class="footerText">
      <span class="footerTextCopy"
        >© 2020 Jonas Larsson All Rights Reserved</span
      ><span
        ><a href="https://www.linkedin.com/in/jonlarsson" target="_blank"
          ><img class="icon" src="../assets/linkedin.svg"/></a
      ></span>
      <span
        ><a href="https://github.com/JonasLarsson78" target="_blank"
          ><img class="icon" src="../assets/github.svg"/></a
      ></span>
    </div>
    <div class="footerImgBack" />
  </span>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footerContainer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 80px;
  width: 100%;
}
.footerImgBack {
  height: 20px;
  width: 100%;
  background-image: url(../assets/code2.jpg);
  background-size: 40%;
  color: white;
}
.footerText {
  text-align: center;
  height: 40px;
  background-color: #004781;
  color: white;
  font-size: 14px;
}
.footerTextCopy {
  position: relative;
  top: 4px;
}
.icon {
  position: relative;
  top: 10px;
  width: 20px;
  margin-left: 10px;
}
</style>
