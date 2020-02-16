import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCheck,
  faCheckCircle,
  faInfoCircle,
  faExclamationTriangle,
  faExclamationCircle,
  faArrowUp,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faEye,
  faEyeSlash,
  faCaretDown,
  faCaretUp,
  faUpload
} from "@fortawesome/free-solid-svg-icons";
import index from "./components/index.vue";
import subject from "./components/subject.vue";
import events from "./components/events.vue";
import mytrip from "./components/mytrip.vue";

library.add(
  faUserSecret,
  faCheck,
  faCheckCircle,
  faInfoCircle,
  faExclamationTriangle,
  faExclamationCircle,
  faArrowUp,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faEye,
  faEyeSlash,
  faCaretDown,
  faCaretUp,
  faUpload
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: index
  },
  {
    path: "/subject",
    component: subject
  },
  {
    path: "/events",
    component: events
  },
  {
    path: "/mytrip",
    component: mytrip
  }
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultIconComponent: "vue-fontawesome",
  defaultIconPack: "fas"
});

require("./assets/main.scss");

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
