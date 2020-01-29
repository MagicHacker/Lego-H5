<template>
  <div class="editor-page-wrap">
    <lego-header></lego-header>
    <el-row>
      <el-col :span="5"><editor-aside></editor-aside></el-col>
      <el-col :span="13"><editor-center-page></editor-center-page></el-col>
      <el-col :span="6"><editor-right-panel></editor-right-panel></el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import editorRightPanel from '../editor-right-panel/index.vue'
import editorCenterPage from '../editor-center-page/index.vue'
import editorAside from '../editor-aside/index.vue'
import { Component, Vue } from 'vue-property-decorator'
import legoHeader from '../../components/lego-header/index.vue'
@Component({
  components: {
    legoHeader,
    editorAside,
    editorCenterPage,
    editorRightPanel
  }
})
export default class EditorPage extends Vue {}
</script>
<style lang="less" scoped>
.editor-page-wrap {
  width: 100%;
  height: 100%;
  background-color: #f0f3f4;
  /deep/ .el-row {
    height: calc(100% - 51px);
    .el-col {
      height: 100%;
    }
  }
}
</style>
