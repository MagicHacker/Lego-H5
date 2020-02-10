<template>
  <div class="editor-center-wrap">
    <div class="editor-header">
      <div class="editor-item editor-zoom">
        <icon-svg iconClass="minify"></icon-svg>
        <el-dropdown>
          <span>100%</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>25%</el-dropdown-item>
            <el-dropdown-item>50%</el-dropdown-item>
            <el-dropdown-item>75%</el-dropdown-item>
            <el-dropdown-item>100%</el-dropdown-item>
            <el-dropdown-item>125%</el-dropdown-item>
            <el-dropdown-item>150%</el-dropdown-item>
            <el-dropdown-item>200%</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <icon-svg iconClass="increase"></icon-svg>
      </div>
      <div class="editor-item">
        <icon-svg iconClass="revoke"></icon-svg>
        <div>撤销</div>
      </div>
      <div class="editor-item">
        <icon-svg iconClass="redo"></icon-svg>
        <div>重做</div>
      </div>
      <div class="editor-item">
        <icon-svg iconClass="preview"></icon-svg>
        <div>预览</div>
      </div>
      <div class="editor-item">
        <icon-svg iconClass="psd"></icon-svg>
        <div>导入psd</div>
      </div>
      <div class="editor-item">
        <icon-svg iconClass="save"></icon-svg>
        <div>保存</div>
      </div>
      <div class="editor-item">
        <icon-svg iconClass="release"></icon-svg>
        <div>发布</div>
      </div>
      <div class="editor-item">
        <icon-svg iconClass="exit"></icon-svg>
        <div>退出</div>
      </div>
    </div>
    <div class="editor-area"></div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Ruler from "../../lib/ruler/ruler";
@Component
export default class EditorCenter extends Vue {
  mounted(): void {
    // 初始化ruler
    const ruler = new Ruler({
      container: document.querySelector(".editor-center-wrap"),
      rulerHeight: 15,
      strokeStyle: "black",
      lineWidth: 1,
      enableMouseTracking: true,
      enableToolTip: true
    });
    ruler.api.setPos({ x: 0, y: 0 });
  }
}
</script>
<style lang="less" scoped>
.editor-center-wrap {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  .rul_wrapper {
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .editor-area {
    width: 375px;
    height: 667px;
    background-color: #fff;
    margin: 40px auto 20px;
    border: 1px solid #ccc;
    position: relative;
  }
  .editor-header {
    width: 700px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    left: 330px;
    .editor-item {
      font-size: 14px;
      cursor: pointer;
      line-height: 16px;
      &:hover {
        font-weight: 800;
      }
      .icon-svg {
        width: 1.5em;
        height: 1.5em;
      }
    }
    .editor-zoom {
      width: 90px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
