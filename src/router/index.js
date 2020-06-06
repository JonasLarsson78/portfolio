import Vue from 'vue';
import Router from 'vue-router';
import Portfolio from '../components/portfolio';
import Projects from '../components/projects/projects';
import Project from '../components/projects/project';
import Aboute from '../components/aboute/aboute';
import Kontact from '../components/kontact/kontact';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Portfolio',
      component: Portfolio,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      props: true,
    },
    {
      path: '/project:id',
      name: 'Project',
      component: Project,
      props: true,
    },
    {
      path: '/aboute',
      name: 'Aboute',
      component: Aboute,
      props: true,
    },
    {
      path: '/kontact',
      name: 'Kontact',
      component: Kontact,
      props: true,
    },
  ],
});
