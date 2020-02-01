<template>
  <div class="editor-right-wrap">
    <el-tabs>
      <el-tab-pane label="属性">请选中需要编辑的元件</el-tab-pane>
      <el-tab-pane label="动画">请选中需要编辑的元件</el-tab-pane>
      <el-tab-pane label="事件">请选中需要编辑的元件</el-tab-pane>
      <el-tab-pane label="页面设置">
        <page-config></page-config>
      </el-tab-pane>
      <el-tab-pane label="JS脚本"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import pageConfig from '../page-config/index.vue'
@Component({
  components: {
    pageConfig
  }
})
export default class EditorRightPanel extends Vue {}
</script>
<style lang="less" scoped>
.editor-right-wrap {
  height: 100%;
  background-color: #fff;
  padding: 0px 5px;
}
</style>
