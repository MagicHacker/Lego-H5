<template>
  <el-tabs v-model="activeTab" @tab-click="changeTab">
    <el-tab-pane label="H5" name="1">H5</el-tab-pane>
    <el-tab-pane label="长页H5" name="2">长页H5</el-tab-pane>
  </el-tabs>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// 定义ts接口interface
interface Tabs {
  name: string;
}
@Component
export default class TabsPage extends Vue {
  activeTab: string = "1";
  changeTab(tab: Tabs): void {
    this.activeTab = tab.name;
  }
}
</script>
<style lang="less" scoped></style>
