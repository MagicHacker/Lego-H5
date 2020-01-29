<template>
  <div class="editor-aside-wrap">
    <el-tabs tab-position="left">
      <el-tab-pane label="组件列表">组件列表</el-tab-pane>
      <el-tab-pane label="页面管理">页面管理</el-tab-pane>
      <el-tab-pane label="模板列表">模板列表</el-tab-pane>
    </el-tabs>
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
  /deep/ .el-tabs {
    height: 100%;
  }
}
</style>
