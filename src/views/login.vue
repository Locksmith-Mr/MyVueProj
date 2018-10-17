<template>
<div class="every">
  <div class="card">
    <div class="field">
        <span class="header">登陆</span>
        <div class="form-group">
            <input type="text" required="required" />
            <label for="input" class="control-label">Name</label><i class="bar"></i>
        </div>
        <div class="form-group">
            <input type="password" required="required" />
            <label for="input" class="control-label">Password</label><i class="bar"></i>
        </div>
        <div class="button-container">
            <button type="button" class="button"><span>Submit</span>
            </button>
        </div>
    </div>
    <div class="fab">
        <i class="el-icon-message"></i>
    </div>
</div>


</div>
</template>


<script >
 require('!vue-style-loader!css-loader!../../static/css/login.css');
export default {
  data() {
    return {
     
    };
  },
  methods: {
  },
  components: {},
  created:{
    
  }
 
};

</script>

<style>
</style>
