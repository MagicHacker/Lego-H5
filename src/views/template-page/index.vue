<template>
  <div class="template-page-wrap">
    <tabs-page></tabs-page>
  </div>
</template>
<script lang="ts">
import tabsPage from "../../components/tabs-page/index.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    tabsPage
  }
})
export default class TemplatePage extends Vue {}
</script>
<style lang="less" scoped>
.template-page-wrap {
  overflow: hidden;
}
</style>
