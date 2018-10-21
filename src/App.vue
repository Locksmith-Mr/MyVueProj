
<template>
  <div id="app">
    <Header v-if="header_show"></Header>
    <router-view style=" padding-bottom: 60px;" v-on:public_header="public_header" v-on:public_footer="public_footer"></router-view>
    <Footer v-if="footer_show"></Footer>
  </div>
</template>

<script>
require('!vue-style-loader!css-loader!../static/css/app.css');
import Header from './views/components/head.vue';
import Footer from './views/components/footer.vue';

export default {
  components: {Header, Footer},
  name: 'App',
  data() {
    return {
      header_show: true,
      footer_show: true,
    };
  },
  methods: {
    //是否显示头部
    public_header: function(bool) {
      this.header_show = bool;
    },
    //是否显示底部
    public_footer: function(bool) {
      this.footer_show = bool;
    },
  },
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
