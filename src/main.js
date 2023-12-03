import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BootstrapVue from "bootstrap-vue";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import "bootstrap/dist/css/bootstrap.css";
import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import Assets from "./assets";
import router from "./router";
import("@/styles/index.css");
import("@/styles/custom-bootstrap.scss");

library.add(Assets.solidIcon);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(BootstrapVue);
Vue.use(Vuex);

Vue.config.productionTip = false;

const app = new Vue({
  el: "#app",
  router: router,
  render: (h) => h(App),
});

app.$mount("#app");

window.addEventListener("popstate", () => {
  app.currentRoute = window.location.pathname;
});
