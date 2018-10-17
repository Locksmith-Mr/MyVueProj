<template>
<div class="aaa">
 <div class=" container container--static">
    <div class="info-box left">
        <h2 class="heading">没有账号?</h2>
        <p class="info-text">这是一段文字</p>
        <button class="button button--signup">注册账号</button>
    </div>
    <!-- <div class="info-box right">
        <h2 class="heading">已有账号?</h2>
        <p class="info-text">这是文字</p>
        <button class="button button--login">登 陆</button>
    </div> -->
</div>
<div class="container container--sliding">
    <div class="slider-content login">
        <h2 class="heading alt">登 陆</h2>
        <form id="login">
            <input class="email" type="text" placeholder="邮箱">
            <p></p>
            <p></p>
            <input class="password" type="password" placeholder="密码">
        </form>
        <button class="button button--login alt">登 陆</button>
        <p class="info-text alt"><a href="">忘记密码?</a>
        </p>
    </div>
    <!-- <div class="slider-content signup">
        <h2 class="heading alt">注册账号</h2>
        <form id="signup">
            <input class="name" type="text" placeholder="Full Name">
            <input class="email" type="text" placeholder="邮箱">
            <input class="password" type="password" placeholder="密码">
        </form>
        <button class="button button--signup alt">注册账号</button>
    </div> -->
</div>
  </div>
  
</template>

<script>
 require('!vue-style-loader!css-loader!../../static/css/test.css');
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style>

</style>
