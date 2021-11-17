import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vue2Editor);

Vue.config.productionTip = false;

let app; //this is for keeping the user logged in/out regardless of refreshing. we are syncing between the app and firebase.
firebase.auth().onAuthStateChanged(() => {
  if(!app){
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});


