<template>
  <div class="aside-container">
    <el-aside width="200px">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      router
      active-text-color="#ffd04b">
      <div class="aside-img">
        <img src="~@/assets/logo.png" alt="">
      </div>
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/wxMessage">
        <i class="el-icon-menu"></i>
        <span slot="title">用户信息</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: 'asideIndex',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang="less" scoped>
.aside-container{
  height: 100%;
  .aside-img{
    width: 70px;
    margin-left: 30px;
    img{
      width: 100%;
    }
  }
}
</style>
