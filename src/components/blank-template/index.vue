<template>
  <div class="blank-tpl-wrap" @click="createPage">
    <div class="blank-tpl-item">
      <icon-svg icon-class="create"></icon-svg>
      <p>创建{{ name }}H5</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class blankTemplate extends Vue {
  @Prop(String) name!: string
  createPage(): void {
    // 跳转到编辑页面
    this.$router.push({ path: '/editorPage' })
    this.$emit('createPage', this.name)
  }
}
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
  margin: 0px 30px 20px 0px;
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
