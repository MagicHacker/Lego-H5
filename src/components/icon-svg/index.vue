<template>
  <svg class="icon-svg" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class IconSvg extends Vue {
  @Prop(String) private iconClass!: string;
  get iconName(): string {
    console.log("x", this.iconClass);
    return `#icon-${this.iconClass}`;
  }
}
</script>
<style lang="less" scoped></style>
