<template>
  <div class="main-page-wrap">
    <lego-header></lego-header>
    <aside-page></aside-page>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import legoHeader from "../../components/lego-header/index.vue";
import asidePage from "../../components/aside-page/index.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    legoHeader,
    asidePage
  }
})
export default class MainPage extends Vue {}
</script>
<style lang="less" scoped>
.main-page-wrap {
  width: 100%;
  height: 100%;
  /deep/ .el-container {
    flex-direction: column;
  }
}
</style>
