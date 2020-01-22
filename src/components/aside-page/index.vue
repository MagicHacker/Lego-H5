<template>
  <div class="aside-page-wrap">
    <el-menu :default-active="indexPath" :router="true">
      <el-menu-item index="/mainPage/worksPage">我的作品</el-menu-item>
      <el-menu-item index="/mainPage/templatePage">我的模板</el-menu-item>
      <el-menu-item index="/mainPage/personalCenter">个人中心</el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class AsidePage extends Vue {
  get indexPath(): string {
    return this.$route.path;
  }
}
</script>
<style lang="less" scoped>
.aside-page-wrap {
  width: 200px;
  height: 100%;
  float: left;
  /deep/ .el-menu {
    height: 100%;
  }
}
</style>
