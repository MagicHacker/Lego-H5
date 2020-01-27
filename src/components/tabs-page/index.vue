<template>
  <el-tabs v-model="activeTab" @tab-click="changeTab">
    <el-tab-pane name="1">
      <div slot="label" class="tabs-item">H5</div>
      <slot name="blank">插槽后备内容</slot>
    </el-tab-pane>
    <el-tab-pane label="长页H5" name="2">
      <div slot="label" class="tabs-item">长页H5</div>长页H5
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// 定义ts接口interface
interface Tabs {
  name: string;
}
@Component({
  components: {}
})
export default class TabsPage extends Vue {
  activeTab: string = "1";
  changeTab(tab: Tabs): void {
    this.activeTab = tab.name;
  }
}
</script>
<style lang="less" scoped>
/deep/ .el-tabs__header {
  background-color: #fff;
  margin: 0px;
  .el-tabs__nav-wrap {
    padding: 0px 20px;
  }
}
/deep/ .el-tab-pane {
  padding: 30px 0px 0px 30px;
}
.tabs-item {
  width: 50px;
}
</style>
