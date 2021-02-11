import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Conference from "../views/Conference.vue"
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/call/:callId",
    name: "Conference",
    component: Conference,
    props: true
  }
]

const router = new VueRouter({
  routes
});

export default router;
