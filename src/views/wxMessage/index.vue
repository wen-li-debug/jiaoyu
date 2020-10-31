<template>
  <div class="wxMessage-container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户信息</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="wxMessage-add">
      <el-button type="primary" class="wxMessage-btn" @click="addDialogVisible = true">添加</el-button>
    </div>
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 100%">
      <el-table-column
        type="index"
        label="序号"
        width="80px"
        >
      </el-table-column>
      <el-table-column
        prop="wx_name"
        label="微信名"
        >
      </el-table-column>
      <el-table-column
        prop="wx_id"
        label="微信号">
      </el-table-column>
      <el-table-column
        label="状态"
      >
        <template slot-scope="scope">
          {{scope.row.wx_status == '0' ? '开' : '关'}}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
      >
        <template slot-scope="scope">
          <el-button type="success" @click="changeClick(scope.row)">修改状态</el-button>
          <el-button type="danger" @click="delClick(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加的对话框 -->
    <el-dialog
      title="提示"
      :visible.sync="addDialogVisible"
      width="60%"
      >
      <el-form :model="wxForm" :rules="Formrules" ref="FormRef" label-width="100px">
        <el-form-item label="微信名" prop="wx_name">
          <el-input v-model="wxForm.wx_name"></el-input>
        </el-form-item>
         <el-form-item label="微信号" prop="wx_id">
          <el-input v-model="wxForm.wx_id"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addwxClick">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getwx, addwx, delwx, updatawx } from '@/api/login'

export default {
  name: 'wxMessageIndex',
  components: {},
  props: {},
  data () {
    return {
      value: true,
      tableData: [
        {
          id: 0,
          wx_name: '',
          wx_id: '',
          wx_status: 0
        }
      ],
      addDialogVisible: false,
      wxForm: {
        wx_id: '',
        wx_name: ''
      },
      Formrules: {
        wx_id: [
          { required: true, message: '请输入微信号', trigger: 'blur' }
        ],
        wx_name: [
          { required: true, message: '请输入微信名', trigger: 'blur' }
        ]
      }
    }
  },
  watch: {},
  computed: {},
  created () {
    this.getwx()
  },
  mounted () {},
  methods: {
    getwx () {
      getwx().then(res => {
        console.log(res)
        this.tableData = res.data
      })
    },
    addwxClick () {
      // 提交
      this.$refs.FormRef.validate(valid => {
        if (!valid) {
          return
        }
        addwx(this.wxForm).then(res => {
          if (res.data.status === 'ok') {
            this.$message({
              type: 'success',
              message: '添加成功'
            })
            this.wxForm = {}
            this.addDialogVisible = false
            this.getwx()
          } else {
            this.$message({
              type: 'error',
              message: '添加失败'
            })
          }
        })
      })
    },
    // 删除
    delClick (item) {
      const id = item.id
      this.$confirm('是否需要删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delwx({ id: id }).then(res => {
          if (res.data.status === 'ok') {
            this.$message({
              type: 'success',
              message: '删除成功'
            })
            this.getwx()
          } else {
            this.$message({
              type: 'error',
              message: '删除失败'
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 状态
    changeClick (item) {
      item.wx_status = item.wx_status === '0' ? '1' : '0'
      console.log(item)
      updatawx(item).then(res => {
        if (res.data.status === 'ok') {
          this.$message({
            type: 'success',
            message: '修改成功'
          })
        } else {
          this.$message({
            type: 'error',
            message: '修改失败'
          })
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.wxMessage-add{
  margin: 20px  0px;
  .wxMessage-btn{
    width: 120px;
  }
}
</style>
