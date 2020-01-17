<template>
  <div class="lego-login-wrap">
    <div class="lego-login-area">
      <el-form :model="formData" label-width="70px" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="signIn">登录</el-button>
          <el-button type="info" @click="signUp">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
@Component
export default class Login extends Vue {
  formData = {
    username: "",
    password: ""
  };
  rules = {
    username: [
      { required: true, message: "输入不能为空", trigger: ["blur", "change"] }
    ],
    password: [
      { required: true, message: "输入不能为空", trigger: ["blur", "change"] }
    ]
  };
  public signIn(): void {
    alert(1);
  }
  public signUp(): void {
    alert(2);
  }
}
</script>
<style lang="less" scoped>
.lego-login-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  .lego-login-area {
    width: 400px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -200px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px 10px;
  }
}
</style>
