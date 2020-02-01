<template>
  <div class="page-config-wrap">
    <el-form label-width="80px" :model="pageData">
      <el-form-item label="页面宽度">
        <el-input v-model.number="pageData.width"></el-input>
      </el-form-item>
      <el-form-item label="页面高度">
        <el-input v-model.number="pageData.height"></el-input>
      </el-form-item>
      <el-form-item label="背景色">
        <el-color-picker v-model="pageData.pageColor"></el-color-picker>
      </el-form-item>
      <el-form-item label="背景图片">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="uploadPageImage"
        >
          <img v-if="pageData.pageImage" :src="pageData.pageImage" alt="" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class PageConfig extends Vue {
  pageData = {
    width: 375,
    height: 667,
    pageColor: '#409EFF',
    pageImage: ''
  }
  // 背景图上传
  uploadPageImage(res: any, file: any) {
    this.pageData.pageImage = URL.createObjectURL(file.raw)
  }
}
</script>
<style lang="less" scoped>
.page-config-wrap {
  width: 100%;
  /deep/ .el-upload {
    width: 80px;
    height: 80px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &:hover {
      border-color: #409eff;
    }
    img {
      width: 80px;
      height: 80px;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 80px;
      height: 80px;
      line-height: 80px;
      text-align: center;
    }
  }
}
</style>
