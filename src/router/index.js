import Vue from "vue";
import Router from "vue-router";
const Container = () => import("@/views/container/Container");

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: configRouters(),
  scrollBehavior: () => ({ y: 0 }),
});

function configRouters() {
  return[
    {
      path: "/",
      redirect: "/",
      name: "",
      component: Container,
    }
  ]
}

export default router;
