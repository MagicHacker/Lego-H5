<template>
  <div class="editor-aside-wrap">
    <el-tabs tab-position="left">
      <el-tab-pane label="组件列表">
        <component-lists></component-lists>
      </el-tab-pane>
      <el-tab-pane label="页面管理">
        <page-manage></page-manage>
      </el-tab-pane>
      <el-tab-pane label="模板列表">
        <template-lib></template-lib>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import componentLists from "../component-lists/index.vue";
import pageManage from "../page-manage/index.vue";
import templateLib from "../template-lib/index.vue";
@Component({
  components: {
    componentLists,
    pageManage,
    templateLib
  }
})
export default class EditorAside extends Vue {}
</script>
<style lang="less" scoped>
.editor-aside-wrap {
  width: 100%;
  height: 100%;
  background-color: #fff;
  /deep/ .el-tabs {
    height: 100%;
    .el-tabs__content {
      height: 100%;
      .el-tab-pane {
        height: 100%;
      }
    }
  }
}
</style>
