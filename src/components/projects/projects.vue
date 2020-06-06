<template>
  <div class="projectsContainer">
    <Header />
    <Meny />
    <div class="projectItem">Några av mina projekt:</div>
    <hr class="projectHr" />
    <div class="projectItemContainer">
      <div class="projectItems" v-for="project in projects" :key="project.id">
        <div>
          <img
            v-if="project.img"
            class="projectImg"
            :src="getImgUrl(project.img)"
            alt="img"
          />
        </div>
        <router-link class="projectLinks" :to="`/project:${project.id}`">{{
          project.name
        }}</router-link>
        <div class="projectShort">{{ project.short }}</div>
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
  name: 'Projects',
  components: {
    Header,
    Meny,
    Footer,
  },
  data() {
    return {
      projects: data,
    };
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
.projectsContainer {
  overflow-x: hidden;
  height: 100vh;
}
.projectItem {
  padding: 10px;
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.projectHr {
  position: relative;
  left: 50%;
  transform: translate(-50%);
  width: 720px;
  border-color: #004781;
}
.projectLinks {
  font-size: 25px;
  text-decoration: none;
  color: #004781;
  margin: 10px;
}
.projectItemContainer {
  position: relative;
  left: 50%;
  transform: translate(-50%);
  width: 700px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.projectItems {
  margin: 20px;
}
.projectShort {
  margin-left: 10px;
}
.projectImg {
  width: 100px;
  height: 50px;
  border: 1px solid #004781;
  margin: 5px;
  border-radius: 4px;
}
</style>
