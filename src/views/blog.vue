<template>
    <div class="blog-wrap">

        <div class="mid-wrap">

            <ul>
                <li>
                    <div class="mid-wrap-inline">
                        <a href="">
                            <h2 >{{title}}</h2>
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
        <div class="right-wrap">
            <div class="border-right-info selfInfo">
                <img src="../../static/img/image-1.jpg" alt="">
                <p>姓名:</p>
                <p>岗位:</p>
                <p>个人介绍:</p>
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
        </div>

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
    };
  },
  methods: {},
  components: {},
  created: {},
};
</script>

<style>
</style>
