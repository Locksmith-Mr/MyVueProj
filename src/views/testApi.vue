<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    // 在这里把其他代码删除，添加button按钮注册一个点击事件
    <button @click="jsonpData">axios跨域获取数据</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    jsonpData: function () {
      //var url = '/api/v1/topics' // 这里就是刚才的config/index.js中的/api
      this.$axios
        .get('https://easy-mock.com/mock/5bc03e1ed359a01846d538f0/example/test')
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
