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
    return `#icon-${this.iconClass}`;
  }
}
</script>
<style lang="less" scoped>
.icon-svg {
  width: 2em;
  height: 2em;
  fill: currentColor;
  overflow: hidden;
}
</style>
