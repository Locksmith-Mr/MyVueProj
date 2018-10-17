
<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
require('!vue-style-loader!css-loader!../static/css/app.css');
import Header from './views/components/head.vue';
import Footer from './views/components/footer.vue';

export default {
  components: {Header, Footer},
  name: 'App',
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:0;
  padding: 0;
  list-style: none;
} */
</style>
