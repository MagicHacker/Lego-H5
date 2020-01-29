<template>
  <div class="works-page-wrap">
    <tabs-page>
      <template v-slot:H5>
        <blank-template @createPage="createPage"></blank-template>
        <content-template
          v-for="item in listH"
          :key="item.id"
          :itemId="item.id"
          @deleteContent="deleteItem"
        ></content-template>
      </template>
      <template v-slot:longH5>
        <blank-template name="长页" @createPage="createPage"></blank-template>
        <content-template
          v-for="item in listLongH"
          :key="item.id"
          :itemId="item.id"
          @deleteContent="deleteLongItem"
        ></content-template>
      </template>
    </tabs-page>
  </div>
</template>
<script lang="ts">
import { generateUUid } from "../../utils/utils";
import { Component, Vue } from "vue-property-decorator";
import tabsPage from "../../components/tabs-page/index.vue";
import blankTemplate from "../../components/blank-template/index.vue";
import contentTemplate from "../../components/content-template/index.vue";
// 活动页接口
interface actPage {
  id: string;
}
@Component({
  components: {
    tabsPage,
    blankTemplate,
    contentTemplate
  }
})
export default class WorksPage extends Vue {
  // H5数组
  listH: Array<actPage> = [];
  listLongH: Array<actPage> = [];
  createPage(name: string): void {
    if (name === "长页") {
      this.createLongH();
    } else {
      this.createH();
    }
  }
  // 创建H5
  createH(): void {
    this.listH.push({
      id: generateUUid()
    });
  }
  // 创建长页H5
  createLongH(): void {
    this.listLongH.push({
      id: generateUUid()
    });
  }
  // 删除模板
  deleteItem(itemId: string): void {
    this.$confirm("是否删除?", "提示", {
      confirmButtonText: "确认",
      cancelButtonText: "取消"
    })
      .then(() => {
        this.listH.splice(
          this.listH.findIndex(item => item.id === itemId),
          1
        );
        this.$message({
          type: "success",
          message: "删除成功"
        });
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "取消删除"
        });
      });
  }
  // 删除长页模板
  deleteLongItem(itemId: string): void {
    this.$confirm("是否删除?", "提示", {
      confirmButtonText: "确认",
      cancelButtonText: "取消"
    })
      .then(() => {
        this.listLongH.splice(
          this.listLongH.findIndex(item => item.id === itemId),
          1
        );
        this.$message({
          type: "success",
          message: "删除成功"
        });
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "取消删除"
        });
      });
  }
}
</script>
<style lang="less" scoped>
.works-page-wrap {
  overflow: hidden;
}
</style>
