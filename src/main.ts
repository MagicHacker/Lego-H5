import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
