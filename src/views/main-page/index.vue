<template>
  <div class="main-page-wrap">
    <el-container>
      <lego-header></lego-header>
      <el-container>
        <aside-page></aside-page>
        <home-page></home-page>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import homePage from "../home-page/index.vue";
import legoHeader from "../../components/lego-header/index.vue";
import asidePage from "../../components/aside-page/index.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    homePage,
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
