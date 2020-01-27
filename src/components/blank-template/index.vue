<template>
  <div class="blank-tpl-wrap">
    <div class="blank-tpl-item">
      <icon-svg icon-class="create"></icon-svg>
      <p>创建H5</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export default class blankTemplate extends Vue {}
</script>
<style lang="less" scoped>
.blank-tpl-wrap {
  width: 200px;
  height: 250px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);
    transform: translate3d(0, -2px, 0);
  }
  .blank-tpl-item {
    width: 160px;
    height: 210px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      margin: 6px 0px 0px;
    }
    &:hover {
      border-color: #25a589;
      color: #25a589;
    }
  }
}
</style>
