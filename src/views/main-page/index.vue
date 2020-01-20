<template>
  <div class="main-page-wrap">
    <el-container>
      <el-header class="main-page-header">
        <div class="header-logo">
          <img src="../../assets/svg/lego.svg" alt="" />
          Lego H5
        </div>
        <div class="header-person">
          <el-popover placement="bottom" width="100px" trigger="hover">
            <ul class="header-person-menu">
              <li>个人中心</li>
              <li>退出登录</li>
            </ul>
            <div slot="reference">
              <img src="../../assets/images/joker.jpeg" alt="" />
            </div>
          </el-popover>
        </div>
      </el-header>
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
  width: 100%;
  height: 100%;
  .main-page-header {
    height: 50px !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    .header-logo {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
    .header-person {
      width: 44px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
}
</style>
