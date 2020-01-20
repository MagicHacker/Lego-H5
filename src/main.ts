import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import IconSvg from "./components/icon-svg/index.vue";
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Row,
  Col,
  Popover
} from "element-ui";
[
  Button,
  Form,
  FormItem,
  Input,
  Container,
  Header,
  Aside,
  Main,
  Row,
  Col,
  Popover
].forEach(item => {
  Vue.use(item);
});
Vue.prototype.$message = Message;
Vue.config.productionTip = false;

// 全局注册svg组件
Vue.component("icon-svg", IconSvg);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
