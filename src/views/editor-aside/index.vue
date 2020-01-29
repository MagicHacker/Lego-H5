<template>
  <div class="editor-aside-wrap">
    <el-menu default-active="0">
      <el-menu-item index="0">组件列表</el-menu-item>
      <el-menu-item index="1">页面管理</el-menu-item>
      <el-menu-item index="2">模板库</el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class EditorAside extends Vue {}
</script>
<style lang="less" scoped>
.editor-aside-wrap {
  width: 100%;
  height: 100%;
  background-color: #fff;
  /deep/ .el-menu {
    height: 100%;
  }
}
</style>
