<template>
  <div class="login">
    <div class="login-logo">
      <img src="../../assets/logo_bg.png" alt="">
    </div>
    <el-form class="login-form" ref="form" :model="users" :rules="rules">
    <el-form-item prop="mobile">
      <el-input v-model="users.mobile" placeholder="请输入用户名"></el-input>
    </el-form-item>
     <el-form-item prop="code">
      <el-input v-model="users.code" placeholder="请输入密码" type="password"></el-input>
    </el-form-item>
    <el-form-item prop="agree">
      <el-checkbox v-model="users.agree" label="1">我已阅读并同意协议和隐私条件</el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-button class="login-btn" type="primary" @click="onSubmit" :loading="loginLoading">提交</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from '@/api/login'
export default {
  name: 'Login',
  components: {},
  props: {},
  data () {
    const checkLogin = (rule, value, callback) => {
      if (value) {
        callback()
      } else {
        callback(new Error('需要勾选协议'))
      }
    }
    return {
      users: {
        mobile: 'admin',
        code: ' ',
        agree: false
      },
      loginLoading: false,
      // 规则
      rules: {
        mobile: [
          { required: true, message: '请输入用户名', trigger: 'change' },
          { min: 5, max: 5, message: '请输入正常账号', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入密码', trigger: 'change' },
          { min: 6, max: 6, message: '请输入正确密码', trigger: 'blur' }
        ],
        agree: [
          { validator: checkLogin, trigger: 'change' }
        ]
      }
    }
  },
  watch: {},
  computed: {},
  methods: {
    // 判断规则
    async onSubmit () {
      this.$refs.form.validate(valid => {
        if (!valid) {
          return
        }
        this.loginLoading = true
        this.getLogin()
      })
    },
    // 发送登录请求
    async getLogin () {
      try {
        const res = await login(this.users)
        console.log(res)
        this.loginLoading = false
        const message = res.data.status
        console.log(message)
        if (message === 'ok') {
          this.$message({ message: '登录成功', type: 'success' })
          // 获取token
          localStorage.setItem('status', 'wl2020')
          this.$router.push({ name: 'home' })
        } else {
          this.$message.error('登录失败,账号或者密码错误!')
        }
      } catch (error) {
        console.log(error)
        this.loginLoading = false
        this.$message.error('登录失败,账号或者密码错误!')
      }
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="less" scoped>
.login{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('../../assets/login_bg.jpg') no-repeat;
  background-size: cover;  // 已最短的为基准
  .login-logo{
    background-color: #fff;
    width: 300px;
    text-align: center;
    padding: 20px 50px 0 50px;
    img{
      width: 200px;
    }
  }
  .login-form{
    background-color: #fff;
    padding: 50px;
    min-width: 300px;
  }
  .login-btn{
    width: 100%;
  }
}
</style>
