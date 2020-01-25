<template>
  <div class="main-page-header">
    <div class="header-logo">
      <icon-svg :icon-class="iconClass"></icon-svg>Lego H5
    </div>
    <div class="header-person">
      <el-popover placement="bottom" width="100px" trigger="hover">
        <ul class="header-person-menu">
          <li>个人中心</li>
          <li>退出登录</li>
        </ul>
        <div slot="reference">
          <img src="../../assets/images/joker.jpeg" alt />
        </div>
      </el-popover>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class LegoHeader extends Vue {
  iconClass: string = "lego";
}
</script>
<style lang="less" scoped>
.main-page-header {
  height: 50px !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0px 20px;
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
</style>
