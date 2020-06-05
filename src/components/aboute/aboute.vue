<template>
  <div class="abouteContainer">
    <Header />
    <Meny />
    <div>
      <img class="abouteImg" src="../../assets/profile_img.jpg" />
      <div class="abouteTitle">Hej mitt namn är Jonas Larsson!</div>
      <div class="abouteText ">
        Jag är 42år och bor i Helsingborg med min sambo, dotter och vår hund.
        Jag spenderar mycket tid med min familj och tycker det kul att sköta om
        vår trädgård. Sen har vi mitt stora intresse för teknik, datorer och
        programmering. Har många gånger velat ta tag i att utöka mina kunskaper
        inom programmering men det har inte blivit av. Men för 2 år sedan efter
        8år som egenföretagare inom grossistbranschen bestämde jag mig för att
        börja plugga till Frontend-utvecklare.
      </div>
      <div class="abouteText">
        Sen när jag var barn har jag alltid velat bli webbutvecklare. Nu tror
        jag att jag är det. Har just nu tagit examen på en tvåårig YH utbildning
        i Helsingborg som gjort att jag nu är webbutvecklare. Min kompetens är
        JavaScript, React.js och Vue.js men även lite Backend med Node.js och
        Express.js. Ser nu framemot att få jobba med min kompetens i ett företag
        där jag kan utvecklas både som person och få mer erfarenheter.
      </div>
      <div class="abouteText end">Jonas Larsson</div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../header';
import Meny from '../meny';
import Footer from '../footer';
export default {
  name: 'Aboute',
  components: {
    Header,
    Meny,
    Footer,
  },
};
</script>

<style scoped>
.abouteContainer {
  overflow-x: hidden;
}
.abouteImg {
  position: relative;
  left: 50%;
  transform: translate(-50%);
  width: 280px;
}
.abouteTitle {
  text-align: center;
  font-size: 25px;
}
.abouteText {
  position: relative;
  left: 50%;
  transform: translate(-50%);
  width: 850px;
  font-size: 20px;
  margin-top: 15px;
}
.end {
  padding-bottom: 100px;
}
</style>
