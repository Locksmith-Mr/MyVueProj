<template>
  <!-- <div style="margin:0 auto;width:50%;margin-top:45px;">
  <div style="float:left;text-align:center;margin-right:200px;margin-top:170px;" ><h1 >文字啊啊啊 啊啊</h1><h1 >文字啊啊啊 啊啊</h1><h1 >文字啊啊啊 啊啊</h1></div>


  <section class="grid">
      <figure class="effect-oscar"> <img src="../../static/img/image-1.jpg" alt="" class="img-responsive">
        <figcaption>
          <h2>1+<span> 1</span></h2>
          <p>2</p>
          <a href="#">View more</a> </figcaption>
      </figure>
    </section>
</div> -->
  <!-- <div class="www" >
    <p id="offscreen-text" class="offscreen-text"></p>
    <p id="text" class="text"></p>
    <svg id="svg"> </svg>
    <input type="text" class="input" id="input"  visibility: hidden/>
    <remote-script src="../../static/js/CSSPlugin.min.js"></remote-script>
    <remote-script src="../../static/js/EasePack.min.js"></remote-script>
    <remote-script src="../../static/js/index.js"></remote-script>
    <remote-script src="../../static/js/TweenLite.min.js"></remote-script>
  </div> -->
  <div class="container">

    <div class="section">

      <div class="section-l">
        <article>
        <header>
          <h2><span>Hi</span> 这是一段文字</h2>
        </header>
        

        
        <p>对一幅画而言，论说是容易的，抒情是困难的，涂鸦是容易的，留白是困难的，签名是容易的，盖章时困难的。</p>
</article>
      </div>

      <div class="section-r">
        <article>
        <p>对一幅画而言，论说是容易的，抒情是困难的，涂鸦是容易的，留白是困难的，签名是容易的，盖章时困难的。</p>

        <p>对一幅画而言，论说是容易的，抒情是困难的，涂鸦是容易的，留白是困难的，签名是容易的，盖章时困难的。</p>
</article>
      </div>
    </div>
<div style="clear: both;"></div>
    <div class="main-bottom-img">
      <ul>
        <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540467186493&di=a521e8703892b9a1f351b6c1ab70c82b&imgtype=0&src=http%3A%2F%2Fimg5.178.com%2Fcsgo%2F201509%2F236115919665%2F236116189728.jpg" alt="">
          <h3>A</h3>
        </li>
        <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540467209792&di=84d4b0fd94d9f8f90defcfad42a18cd6&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F8b31eb89ba964ec70c64313593aa629d68e4f466.jpg" alt="">
          <h3>B</h3>
        </li>
        <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540467241697&di=a402fa9e4f1895296e51399a5b4e53e9&imgtype=0&src=http%3A%2F%2Fimg3.178.com%2Fcsgo%2F201509%2F236115919665%2F236116189727.jpg" alt="">
          <h3>C</h3>
        </li>
      </ul>
    </div>

    <!-- thumbnails -->

  </div>

</template>

<script>
require('!vue-style-loader!css-loader!../../static/css/main.css');
// require('!vue-style-loader!css-loader!../../static/js/style.css');
export default {
  data() {
    return {};
  },
  created: function() {
    this.$emit('public_header', true);
    this.$emit('public_footer', true);
  },

  methods: {},
  components: {},
};
</script>
     <style >
</style>
