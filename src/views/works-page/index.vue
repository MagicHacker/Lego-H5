<template>
  <div class="works-page-wrap">
    <tabs-page>
      <template v-slot:H5>
        <blank-template></blank-template>
        <content-template v-for="item in 10" :key="item"></content-template>
      </template>
      <template v-slot:longH5>
        <blank-template></blank-template>
        <content-template v-for="item in 10" :key="item"></content-template>
      </template>
    </tabs-page>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import tabsPage from "../../components/tabs-page/index.vue";
import blankTemplate from "../../components/blank-template/index.vue";
import contentTemplate from "../../components/content-template/index.vue";
@Component({
  components: {
    tabsPage,
    blankTemplate,
    contentTemplate
  }
})
export default class WorksPage extends Vue {}
</script>
<style lang="less" scoped>
.works-page-wrap {
  overflow: hidden;
}
</style>
