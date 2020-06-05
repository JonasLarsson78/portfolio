<template>
  <div class="menyContainer">
    <div @click="menyClick('/')" :class="`marginLeft ${menyBtnActive('/')}`">
      <span class="menyBtnText">HEM</span>
    </div>
    <div @click="menyClick('/projects')" :class="menyBtnActive('/projects')">
      <span class="menyBtnText">PROJEKT</span>
    </div>
    <div @click="menyClick('/aboute')" :class="menyBtnActive('/aboute')">
      <span class="menyBtnText">OM MIG</span>
    </div>
    <div @click="menyClick('/kontact')" :class="menyBtnActive('/kontact')">
      <span class="menyBtnText">KONTAKT</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Meny',
  methods: {
    menyClick(url) {
      if (
        window.location.pathname.substring(
          window.location.pathname.indexOf('0/') + 1,
        ) !== url
      ) {
        this.$router.push(url);
      }
    },
    menyBtnActive(url) {
      return `menyBtn ${
        window.location.pathname.substring(
          window.location.pathname.indexOf('0/') + 1,
        ) === url
          ? 'menyBtnActive'
          : null
      }`;
    },
  },
};
</script>

<style scoped>
.menyContainer {
  display: flex;
  justify-content: center;
  top: -40px;
  height: 40px;
  width: 100vw;
  background-color: #004781;
}
.menyBtn {
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
}
.menyBtn:hover,
.menyBtnActive {
  background-color: #0058a0;
}
.menyBtnText {
  color: white;
}
.marginLeft {
  margin-left: 20px;
}
</style>
