<template>
  <div class="component-lists-wrap">
    <div class="component-lists-title">
      <span>组件列表</span>
    </div>
    <div class="component-lists-area">
      <div>
        <div class="component-lists-text">
          <span>基础组件</span>
        </div>
        <div class="base-component">
          <el-button>
            <icon-svg iconClass="text"></icon-svg>
            文字
          </el-button>
          <el-button>
            <icon-svg iconClass="rect"></icon-svg>
            矩形
          </el-button>
          <el-button>
            <icon-svg iconClass="picture"></icon-svg>
            图片
          </el-button>
          <el-button>
            <icon-svg iconClass="button"></icon-svg>
            按钮
          </el-button>
          <el-button>
            <icon-svg iconClass="line"></icon-svg>
            线段
          </el-button>
          <el-button>
            <icon-svg iconClass="swipper"></icon-svg>
            轮播
          </el-button>
        </div>
      </div>
      <div>
        <div class="component-lists-text">
          <span>表单组件</span>
        </div>
        <div class="form-component">
          <el-button>
            <icon-svg iconClass="text-box"></icon-svg>
            文本框
          </el-button>
          <el-button>
            <icon-svg iconClass="multi-text"></icon-svg>
            多行文本
          </el-button>
          <el-button>
            <icon-svg iconClass="radio"></icon-svg>
            单选框
          </el-button>
          <el-button>
            <icon-svg iconClass="checkbox"></icon-svg>
            复选框
          </el-button>
          <el-button>
            <icon-svg iconClass="date"></icon-svg>
            日期选择器
          </el-button>
        </div>
      </div>
      <div>
        <div class="component-lists-text">
          <span>功能组件</span>
        </div>
        <div class="features-component">
          <el-button>
            <icon-svg iconClass="music"></icon-svg>
            音乐
          </el-button>
        </div>
      </div>
      <div>
        <div class="component-lists-text">
          <span>业务组件</span>
        </div>
        <div class="business-component">
          <el-button>待开发……</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class ComponentLists extends Vue {}
</script>
<style lang="less" scoped>
.component-lists-wrap {
  width: 100%;
  height: 100%;
  font-weight: 700;
  overflow: auto;
  .component-lists-title {
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    padding-top: 20px;
  }
  .component-lists-area {
    width: 100%;
    .base-component,
    .form-component,
    .features-component,
    .business-component {
      width: 100%;
      text-align: left;
      /deep/ .el-button {
        margin: 10px 5px 10px 0px;
        padding: 10px;
        span {
          display: flex;
          align-items: center;
        }
        .icon-svg {
          width: 1em;
          height: 1em;
        }
      }
    }
    .component-lists-text {
      width: 100%;
      text-align: left;
      font-size: 16px;
      font-weight: 600;
    }
  }
}
</style>
