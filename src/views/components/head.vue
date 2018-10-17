<template>
 <div class="every-head">
        <div class="head">
            <div class="head-l">
                <a href="#/login">
                    <span class="el-icon-message">a</span>
                    <span>Icon</span>
                </a>

            </div>
            <div class="head-r">
                <span >我的博客</span>
                <span round @click="login">登录</span>
            </div>
        </div>
         </div>
</template>

<script>
// require('!vue-style-loader!css-loader!../../../static/css/head.css');
export default {
  data() {
    return {
    
    };
},
  methods: {
  login:function(){
      this.$router.push({path:'/login'})
  }

  },
  components: {

  }
}

</script>

<style>

</style>
