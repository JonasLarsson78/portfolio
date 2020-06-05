<template>
  <div class="kontaktContainer">
    <Header />
    <Meny />

    <div class="kontactFlex">
      <div class="kontactTitle">
        Kontakta mig ...<br /><img
          class="kontactImg"
          src="../../assets/contact.svg"
        />
      </div>
      <hr />
      <div>
        <div class="kontactText">
          <img class="kontactLogo" src="../../assets/mail.svg" />Epost:
          <a
            class="kontactLink"
            href="mailto:jl.7804@gmail.com"
            target="_blank"
          >
            jl.7804@gmail.com</a
          >
        </div>
        <div class="kontactText">
          <img class="kontactLogo" src="../../assets/phone.svg" />Telefon:
          <a class="kontactLink" href="tel:0706444922" target="_blank">
            0706444922</a
          >
        </div>
        <div class="kontactText">
          <img class="kontactLogo" src="../../assets/cv.svg" />CV:
          <a class="kontactLink" href="https://mincv.nu/" target="_blank">
            Min personliga Cv</a
          >
        </div>
        <div class="kontactText">
          <img class="kontactLogo" src="../../assets/facebook.svg" />Facebook:
          <a
            class="kontactLink"
            href="https://www.facebook.com/jonas784/"
            target="_blank"
          >
            jonas784</a
          >
        </div>
        <div class="kontactText">
          <img class="kontactLogo" src="../../assets/linkedin2.svg" />Linkedin:
          <a
            class="kontactLink"
            href="https://www.linkedin.com/in/jonlarsson/"
            target="_blank"
          >
            jonlarsson</a
          >
        </div>
        <div class="kontactText">
          <img class="kontactLogo" src="../../assets/github2.svg" />Github:
          <a
            class="kontactLink"
            href="https://github.com/JonasLarsson78"
            target="_blank"
          >
            JonasLarsson78</a
          >
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../header';
import Meny from '../meny';
import Footer from '../footer';
export default {
  name: 'Kontact',
  components: {
    Header,
    Meny,
    Footer,
  },
};
</script>

<style scoped>
.kontaktContainer {
  overflow-x: hidden;
  height: 100vh;
}
.kontactFlex {
  position: relative;
  top: 80px;
  display: flex;
  justify-content: center;
}
.kontactTitle {
  font-size: 60px;
  margin-top: 30px;
  margin-right: 30px;
  color: #004781;
}
.kontactImg {
  position: relative;
  left: 30px;
  top: 20px;
  width: 300px;
}
.kontactText {
  font-size: 25px;
  padding: 25px;
  margin-right: 50px;
}
.kontactLogo {
  position: relative;
  top: 8px;
  width: 30px;
  margin-right: 15px;
}
.kontactLink {
  text-decoration: none;
  color: #004781;
}
.kontactLink:hover {
  color: #0365b6;
}
.end {
  padding-bottom: 100px;
}
</style>
