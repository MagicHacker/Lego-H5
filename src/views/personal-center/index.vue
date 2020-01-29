<template>
  <div class="personal-center-wrap">
    <div class="personal-center-avatar">
      <img :src="imgUrl" alt="" />
    </div>
    <el-form
      :model="formData"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="旧密码" prop="oldPassword">
        <el-input v-model="formData.oldPassword"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input v-model="formData.newPassword"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-success="uploadAvatarSuccess"
          :show-file-list="false"
        >
          <el-button>点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class PersonalCenter extends Vue {
  // 头像地址
  imgUrl: string = ''
  formData = {
    username: '',
    oldPassword: '',
    newPassword: ''
  }
  // 头像上传成功
  uploadAvatarSuccess(res: any, file: any): void {
    this.imgUrl = URL.createObjectURL(file.raw)
  }
}
</script>
<style lang="less" scoped>
.personal-center-wrap {
  width: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .personal-center-avatar {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
</style>
