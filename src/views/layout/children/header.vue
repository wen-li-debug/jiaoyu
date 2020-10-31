<template>
  <div class="header-container">
    <div class="header-context">
      <div>广州未来网络有限公司</div>
      <div class="header-img">
        <el-avatar src="http://toutiao-img.itheima.net/Fk8PmKUcezgJqKLeXrJI-D-sTDT6" alt="" />
        <span>admin</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerIndex',
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
.header-context{
  border-bottom: 1px solid #ccc;
  height: 40px;
  .header-context{
    margin-top: 30px;
  }
  .header-img{
    display: flex;
    align-items: center;
    position: absolute;
    right: 20px;
    top: 20px;
    .el-avatar{
      margin-right: 10px;
      border-radius: 50%;
    }
  }
}
</style>
