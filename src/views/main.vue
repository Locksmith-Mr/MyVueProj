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
  <!-- background-image: linear-gradient( 135deg, #C2FFD8 10%, #465EFB 100%); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, red, blue); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, red, blue); /* Firefox 3.6 - 15 */
  background-image: linear-gradient( 135deg, #F1CA74 10%, #A64DB6 100%); /* 标准的语法 */" -->
  <div >
    <!-- <div style="    position: fixed;
height: 100%;
width: 100%;">

  </div> -->

    <p id="offscreen-text" class="offscreen-text"></p>
    <p id="text" class="text"></p>
    <svg id="svg"> </svg>
    <input type="text" class="input" id="input"  visibility: hidden/>
    <remote-script src="../../static/js/CSSPlugin.min.js"></remote-script>
    <remote-script src="../../static/js/EasePack.min.js"></remote-script>
    <remote-script src="../../static/js/index.js"></remote-script>
    <remote-script src="../../static/js/TweenLite.min.js"></remote-script>

  </div>

</template>

<script>
require('!vue-style-loader!css-loader!../../static/css/main.css');
require('!vue-style-loader!css-loader!../../static/js/style.css');
export default {
  data() {
    return {};
  },
  created: function() {
    this.$emit('public_header', true);
    this.$emit('public_footer', false);
  },

  methods: {},
  components: {},
};
</script>
     <style >
</style>
