<template>
  <div class="layout-container">
    <el-container>
      <aside-index  class="aside-context"/>
      <el-container>
        <el-header>
          <header-index class="header-context"/>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import asideIndex from './children/aside'
import headerIndex from './children/header'

export default {
  name: 'layoutIndex',
  components: {
    asideIndex,
    headerIndex
  },
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
.el-container{
  height: 100vh;
}
.aside-context{
  background-color: #545c64;
}
</style>
