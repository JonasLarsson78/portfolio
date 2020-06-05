<template>
  <div class="projectsContainer">
    <Header />
    <Meny />
    <div class="projectItem">Projekt kommer snart...</div>
    <Footer />
  </div>
</template>

<script>
import Header from '../header';
import Meny from '../meny';
import Footer from '../footer';
export default {
  name: 'Projects',
  components: {
    Header,
    Meny,
    Footer,
  },
};
</script>

<style scoped>
.projectsContainer {
  overflow-x: hidden;
}
.projectItem {
  padding: 10px;
  font-size: 20px;
}
</style>
