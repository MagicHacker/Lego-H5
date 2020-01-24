<template>
  <div class="works-page-wrap">
    <tabs-page></tabs-page>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import tabsPage from "../../components/tabs-page/index.vue";
@Component({
  components: {
    tabsPage
  }
})
export default class WorksPage extends Vue {}
</script>
<style lang="less" scoped>
.works-page-wrap {
  float: left;
  background-color: #f0f3f4;
}
</style>
