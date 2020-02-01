import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import IconSvg from './components/icon-svg/index.vue'
import './utils/icon-svg.ts'
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
  Popover,
  Menu,
  MenuItem,
  Submenu,
  Tabs,
  TabPane,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  MessageBox,
  Upload,
  Scrollbar,
  ColorPicker
} from 'element-ui'
;[
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
  Popover,
  Menu,
  MenuItem,
  Submenu,
  Tabs,
  TabPane,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Upload,
  Scrollbar,
  ColorPicker
].forEach(item => {
  Vue.use(item)
})
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
Vue.config.productionTip = false

// 全局注册svg组件
Vue.component('icon-svg', IconSvg)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
