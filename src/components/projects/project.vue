<template
  ><div class="projectContainer">
    <div>
      <Header />
      <Meny />
      <div class="projectItem">
        <h1 class="projectTitle">{{ this.project.name }}</h1>
        <div class="projectDescription">{{ this.project.description }}</div>
        <img
          v-if="this.project.img"
          class="projectImg"
          :src="getImgUrl(this.project.img)"
          alt="test"
        />
        <div class="projectLinkText">Länkar till projektet:</div>
        <div class="projectLinkContainer">
          <div v-for="(web, index) in project.webpage" :key="index">
            <a class="projectLink" :href="web.url">{{ web.page }}</a>
          </div>
        </div>
        <router-link class="projectLinkBack" to="/projects">
          Tillbaka
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../header';
import Meny from '../meny';
import Footer from '../footer';

import { data } from '../../data/data';
export default {
  name: 'Project',
  components: {
    Header,
    Meny,
    Footer,
  },
  data() {
    return {
      data,
      project: {},
    };
  },
  mounted() {
    const find = data.find((x) => x.id === this.$route.params.id.substr(1));
    this.project = find;
  },
  methods: {
    getImgUrl(url) {
      var images = require.context('../../assets/', false, /\.jpg$/);
      return images('./' + url + '.jpg');
    },
  },
};
</script>

<style scoped>
.projectContainer {
  overflow-x: hidden;
  height: 100vh;
}
.projectItem {
  text-align: center;
}
.projectTitle {
  font-size: 40px;
  margin-top: 30px;
}
.projectDescription {
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-top: 20px;
  font-size: 18px;
  width: 700px;
}
.projectImg {
  width: 400px;
  border: 3px solid #004781;
  border-radius: 5px;
  margin-top: 20px;
}
.projectLinkContainer {
  font-size: 20px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.projectLinkText {
  font-size: 20px;
  margin-top: 10px;
}
.projectLink {
  text-decoration: none;
  padding: 10px;
  color: #004781;
}
.projectLinkBack {
  position: relative;
  top: 20px;
  text-decoration: none;
  color: #004781;
  font-size: 23px;
}
</style>
