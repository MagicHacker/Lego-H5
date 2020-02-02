<template>
  <div class="template-page-wrap">
    <tabs-page>
      <template v-slot:H5>
        <content-template></content-template>
      </template>
      <template v-slot:longH5>
        <content-template></content-template>
      </template>
    </tabs-page>
  </div>
</template>
<script lang="ts">
import tabsPage from "../../components/tabs-page/index.vue";
import { Component, Vue } from "vue-property-decorator";
import blankTemplate from "../../components/blank-template/index.vue";
import contentTemplate from "../../components/content-template/index.vue";
@Component({
  components: {
    tabsPage,
    blankTemplate,
    contentTemplate
  }
})
export default class TemplatePage extends Vue {}
</script>
<style lang="less" scoped>
.template-page-wrap {
  overflow: hidden;
}
</style>
