<template>
  <div class="content-tpl-wrap">
    <div class="content-tpl-cover">
      <img src="../../assets/images/login-bg.png" alt />
    </div>
    <div class="content-tpl-name">未命名</div>
    <div class="content-tpl-operation">
      <div>编辑</div>
      <div>复制</div>
      <el-dropdown>
        <span>
          更多
          <i class="el-icon-more-outline"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>复制为模板</el-dropdown-item>
          <el-dropdown-item>上传封面</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class contentTemplate extends Vue {}
</script>
<style lang="less" scoped>
.content-tpl-wrap {
  width: 200px;
  height: 250px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 4px;
  font-size: 12px;
  margin: 0px 30px 20px 0px;
  &:hover {
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);
    transform: translate3d(0, -2px, 0);
  }
  .content-tpl-cover {
    width: 100%;
    height: 200px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 2px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content-tpl-name {
    width: 100%;
    height: 20px;
    border-bottom: 1px solid #ccc;
    line-height: 20px;
  }
  .content-tpl-operation {
    width: 100%;
    height: 30px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #25a589;
    /deep/ el-dropdown {
      color: #25a589;
      font-size: 12px;
    }
  }
}
</style>
