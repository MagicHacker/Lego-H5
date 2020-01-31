<template>
  <div class="page-manage-wrap">
    <div class="page-manage-title">
      <span>页面管理</span>
    </div>
    <div class="page-manage-area">
      <el-scrollbar tag="ul" :native="false">
        <li v-for="(item, index) in pageList" :key="item.pageId">
          <div class="page-number">
            <span>第{{ index + 1 }}页</span>
          </div>
          <div class="page-operation">
            <el-dropdown>
              <i class="el-icon-more-outline"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>复制页面</el-dropdown-item>
                <el-dropdown-item @click.native="deletePage(index)"
                  >删除页面</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </li>
      </el-scrollbar>
    </div>
    <div class="page-manage-add">
      <el-button type="primary" @click="addPage">新增页面</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { generateUUid } from '../../utils/utils'
// 构建接口
interface pages {
  pageId: string
}
@Component
export default class PageManage extends Vue {
  pageList: Array<pages> = [{ pageId: generateUUid() }]
  // 新增页面
  addPage(): void {
    this.pageList.push({
      pageId: generateUUid()
    })
  }
  // 删除页面
  deletePage(index: number): void {
    this.pageList.splice(index, 1)
  }
}
</script>
<style lang="less" scoped>
.page-manage-wrap {
  width: 100%;
  height: 100%;
  font-weight: 700;
  position: relative;
  .page-manage-title {
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    padding-top: 20px;
  }
  .page-manage-area {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0px 0px 100px;
    /deep/ .el-scrollbar {
      height: 100%;
      .el-scrollbar__wrap {
        overflow-x: hidden;
      }
    }
    ul > li {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
      padding-right: 10px;
      cursor: pointer;
      color: #666;
      &:hover {
        background-color: #409eff;
      }
    }
  }
  .page-manage-add {
    width: 100%;
    height: 50px;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
