<template>
  <div class="main-page-wrap">
    <el-container>
      <el-header>Header</el-header>
      <home-page></home-page>
    </el-container>
  </div>
</template>
<script lang="ts">
import homePage from "../home-page/index.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    homePage
  }
})
export default class MainPage extends Vue {}
</script>
<style lang="less" scoped>
.main-page-wrap {
  width: 1000px;
  height: 700px;
  border: 1px solid #ccc;
  margin: 30px auto 0px;
}
</style>
