import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import Result from "../views/Result.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title:'Home'
    }
  },
  {
    path: "/", //default route on startup
    name: "login",
    component: Login,
    meta: {
      title:'Login'
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title:'Login'
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title:'Register'
    }
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title:'Forgot Password'
    }
  },
  {
    path: "/result",
    name: "Result",
    component: Result,
    meta: {
      title:'Result'
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to,from,next) =>{
  document.title = `${to.meta.title} | Roni's Course Project ` ; 
  next();
});

export default router;
