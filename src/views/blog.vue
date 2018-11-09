<template>
    <div class="blog-wrap">
        <div class="top">
            <div class="top-l">
                <div class="carousel">
                    <el-carousel>
                        <el-carousel-item v-for="item in 1" :key="item">
                            <h3>{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>

                </div>
                <div class="carousel-r-img">
                    <ul>
                        <li> <img src="../../static/img/image-1.jpg" alt="">

                        </li>
                        <li>
                            <img src="../../static/img/image-1.jpg" alt="">
                        </li>
                    </ul>

                </div>
            </div>
            <!-- <div class="top-r">
                <div style="background: #838383;width: 300px;height: 75px;"></div>
                <div style="background: #222222;width: 300px;height: 75px;"></div>
                <div style="background: #919125;width: 300px;height: 75px;"></div>
                <div style="background: #481357;width: 300px;height: 75px;"></div>
            </div> -->

        </div>

        <div class="mid-wrap">

            <ul>
                <li>
                    <div class="mid-wrap-inline">
                        <a href="">
                            <h2>{{title}}</h2>
                        </a>
                        <div class="mid-wrap-inline-img">
                            <span>
                                <a href="">
                                    <img src="../../static/img/image-1.jpg" alt="" width="100px" height="90px">
                                </a>
                            </span>

                            <p class="context">“经过长期努力，中国特色社会主义进入了新时代，这是我国发展新的历史方位。”一年前，习近平总书记在中国共产党第十九次全国代表大会上这一郑重宣示，概括了中华民族的伟大飞跃，坚定了中国共产党的历史使命。这一宣示，明确了旗帜，更预示了未来。</p>

                        </div>

                        <div class="autor">
                            <span>浏览次数</span>
                            <span>点赞</span>
                            <span>踩</span>
                            <span style="float:right">阅读原文>></span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="mid-wrap-inline">
                        <a href="">
                            <h2 style="padding-bottom:8px">{{title}}</h2>
                        </a>
                        <div class="mid-wrap-inline-img">
                            <span>
                                <a href="">
                                    <img src="../../static/img/image-1.jpg" alt="" width="100px" height="90px">
                                </a>
                            </span>

                            <p class="context">“经过长期努力，中国特色社会主义进入了新时代，这是我国发展新的历史方位。”一年前，习近平总书记在中国共产党第十九次全国代表大会上这一郑重宣示，概括了中华民族的伟大飞跃，坚定了中国共产党的历史使命。这一宣示，明确了旗帜，更预示了未来。</p>

                        </div>

                        <div class="autor">
                            <span>浏览次数</span>
                            <span>点赞</span>
                            <span>踩</span>
                            <span style="float:right">阅读原文>></span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="mid-wrap-inline">
                        <a href="">
                            <h2 style="padding-bottom:8px">{{title}}</h2>
                        </a>
                        <div class="mid-wrap-inline-img">
                            <span>
                                <a href="">
                                    <img src="../../static/img/image-1.jpg" alt="" width="100px" height="90px">
                                </a>
                            </span>

                            <p class="context">“经过长期努力，中国特色社会主义进入了新时代，这是我国发展新的历史方位。”一年前，习近平总书记在中国共产党第十九次全国代表大会上这一郑重宣示，概括了中华民族的伟大飞跃，坚定了中国共产党的历史使命。这一宣示，明确了旗帜，更预示了未来。</p>

                        </div>

                        <div class="autor">
                            <span>浏览次数</span>
                            <span>点赞</span>
                            <span>踩</span>
                            <span style="float:right">阅读原文>></span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="mid-wrap-inline">
                        <a href="">
                            <h2 style="padding-bottom:8px">{{title}}</h2>
                        </a>
                        <div class="mid-wrap-inline-img">
                            <span>
                                <a href="">
                                    <img src="../../static/img/image-1.jpg" alt="" width="100px" height="90px">
                                </a>
                            </span>

                            <p class="context">“经过长期努力，中国特色社会主义进入了新时代，这是我国发展新的历史方位。”一年前，习近平总书记在中国共产党第十九次全国代表大会上这一郑重宣示，概括了中华民族的伟大飞跃，坚定了中国共产党的历史使命。这一宣示，明确了旗帜，更预示了未来。</p>

                        </div>

                        <div class="autor">
                            <span>浏览次数</span>
                            <span>点赞</span>
                            <span>踩</span>
                            <span style="float:right">阅读原文>></span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="mid-wrap-inline">
                        <a href="">
                            <h2 style="padding-bottom:8px">{{title}}</h2>
                        </a>
                        <div class="mid-wrap-inline-img">
                            <span>
                                <a href="">
                                    <img src="../../static/img/image-1.jpg" alt="" width="100px" height="90px">
                                </a>
                            </span>

                            <p class="context">“经过长期努力，中国特色社会主义进入了新时代，这是我国发展新的历史方位。”一年前，习近平总书记在中国共产党第十九次全国代表大会上这一郑重宣示，概括了中华民族的伟大飞跃，坚定了中国共产党的历史使命。这一宣示，明确了旗帜，更预示了未来。</p>

                        </div>

                        <div class="autor">
                            <span>浏览次数</span>
                            <span>点赞</span>
                            <span>踩</span>
                            <span style="float:right">阅读原文>></span>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
        <!-- <div class="right-wrap">
            <div class="border-right-info selfInfo">
                <img src="../../static/img/image-1.jpg" alt="">
                <p>姓名:123</p>
                <p>岗位:QQQ</p>
                <p>个人介绍:999999999454612132123132</p>
            </div>
            <div class="border-right-info sort">
                <h1>分类</h1>
                <p> <a href="">今日要点</a></p>
                <p><a href="">如何如何如</a></p>
                <p><a href="">奥术大师多所多所多所</a></p>

            </div>
            <div class="border-right-info weixin">
                <img src="../../static/img/image-1.jpg" alt="" style=" width: 100%;height:100%;">
            </div>
        </div> -->

        <div class="block">
            <span class="demonstration"></span>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000" background="false">
            </el-pagination>

        </div>

    </div>
</template>


<script >
require('!vue-style-loader!css-loader!../../static/css/blog.css');
export default {
  data() {
    return {
      title: '盛会一周年，习近平带领我们办了这些大事',
      imgHeight: '200px',
    };
  },

  methods: {},
  components: {},
  created: {},
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
