<template>
  <div class="main-page-header">
    <div class="header-logo" @click="goToWorksPage">
      <icon-svg :icon-class="iconClass"></icon-svg>Lego H5
    </div>
    <div class="header-person">
      <el-dropdown @command="switchCommand">
        <img src="../../assets/images/joker.jpeg" alt />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="personal-center"
            >个人中心</el-dropdown-item
          >
          <el-dropdown-item command="sign-out">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class LegoHeader extends Vue {
  iconClass: string = "lego";
  switchCommand(command: string): void {
    if (command === "personal-center") {
      this.$router.push({ path: "/mainPage/personalCenter" }).catch(err => {});
    } else if (command === "sign-out") {
      this.$router.push({ path: "/login" }).catch(err => {});
    }
  }
  // 返回首页
  goToWorksPage(): void {
    this.$router.push({ path: "/mainPage/worksPage" }).catch(err => {});
  }
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
