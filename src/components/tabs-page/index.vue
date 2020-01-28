<template>
  <el-tabs v-model="activeTab" @tab-click="changeTab">
    <el-tab-pane name="1">
      <div slot="label" class="tabs-item">H5</div>
      <div class="tabs-pane-wrap">
        <slot name="H5">插槽后备内容</slot>
      </div>
    </el-tab-pane>
    <el-tab-pane label="长页H5" name="2">
      <div slot="label" class="tabs-item">长页H5</div>
      <div class="tabs-pane-wrap">
        <slot name="longH5">插槽后备内容</slot>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts">
import blankTemplate from '../blank-template/index.vue'
import contentTemplate from '../content-template/index.vue'
import { Component, Vue } from 'vue-property-decorator'
// 定义ts接口interface
interface Tabs {
  name: string
}
@Component({
  components: {
    blankTemplate,
    contentTemplate
  }
})
export default class TabsPage extends Vue {
  activeTab: string = '1'
  changeTab(tab: Tabs): void {
    this.activeTab = tab.name
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
.tabs-pane-wrap {
  display: flex;
  flex-wrap: wrap;
}
</style>
