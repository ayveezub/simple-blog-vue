import { createRouter, createWebHistory } from "vue-router";
import Posts from "../views/Posts.vue";

const routes = [
  {
    path: "/",
    name: "Posts",
    component: Posts,
    //
    // To make vue router history mode work with github/gitlab pages,
    // in addition to correct 404.html file in the public folder,
    // add beforeEnter guard for the "/" route,
    // so that the home page will be skipped and directly go to the target page.
    //
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem("redirect") !== null) {
        const redirect = sessionStorage.redirect;
        delete sessionStorage.redirect;
        next(redirect);
      } else {
        next();
      }
    },
  },
  {
    path: "/:postName",
    name: "Post",
    props: true,
    component: () => import(/* webpackChunkName: "post" */ "../views/Post.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
