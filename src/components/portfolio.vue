<template>
  <div class="portfolioContainer">
    <Header />
    <Meny />

    <div class="portfolioMain">
      <h1 class="portfolioH1">
        {{ this.nameText }}<span class="textRed">{{ this.nameText2 }}</span
        >{{ this.nameText3 }}
      </h1>
      <p class="portfolioText1">
        HTML, CSS, Javascript, Node.js, React, Vue, , Docker, REST, Express,
        Git.
      </p>
      <br /><br /><br />
      <hr class="portfolioHr" />
      <div class="portfolioPress end">
        <span>
          På denna sidan har ni tillgång till mitt CV och jag kommer att
          presentera</span
        ><br />
        mina projekt och färdigheter.
        <span>Här finns också kontaktuppgifter och en</span><br />
        presentation om vem jag är.<span> Hoppas ni tycker om vad ni ser. </span
        ><br /><br />
        Jonas Larsson
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './header';
import Meny from './meny';
import Footer from './footer';
export default {
  name: 'Portfolio',
  components: {
    Header,
    Meny,
    Footer,
  },
  data() {
    return {
      nameText: '< Jonas larsson ->  Webbutvecklare ',
      nameText2: ':class="pro"',
      nameText3: ' />',
      loading: true,
    };
  },
};
</script>

<style scoped>
.portfolioContainer {
  overflow-x: hidden;
  height: 100vh;
}
.portfolioMain {
  padding: 10px;
}
.portfolioH1 {
  font-family: 'Gochi Hand', cursive;
  font-size: 60px;
  color: #004781;
  -webkit-text-stroke: 0.1px black;
  text-align: center;
  margin-top: 180px;
}
.portfolioText1 {
  text-align: center;
  font-family: 'Gochi Hand', cursive;
  font-size: 23px;
}
.portfolioPress {
  position: relative;
  top: 50px;
  margin: auto;
  width: 33%;
  font-size: 20px;
}
.portfolioHr {
  margin: auto;
  width: 80%;
  border-color: #004781;
}
.textRed {
  color: #e00000;
}
.end {
  padding-bottom: 100px;
}
</style>
