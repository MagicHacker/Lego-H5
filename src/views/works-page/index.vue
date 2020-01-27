<template>
  <div class="works-page-wrap">
    <tabs-page>
      <template v-slot:blank>
        <blank-template></blank-template>
      </template>
    </tabs-page>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import tabsPage from "../../components/tabs-page/index.vue";
import blankTemplate from "../../components/blank-template/index.vue";
@Component({
  components: {
    tabsPage,
    blankTemplate
  }
})
export default class WorksPage extends Vue {}
</script>
<style lang="less" scoped>
.works-page-wrap {
  overflow: hidden;
}
</style>
