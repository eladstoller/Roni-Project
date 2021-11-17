<template>
  <div class="app-wrapper">
    <div class="app">
      <router-view />
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "app",
  components: {},
  data() {
    return {};
  },
  created() {
    /*setTimeout(() => {},2000) //temporary fix for staying logged in when refreshing.
      console.log(firebase.auth().currentUser.email);*/
    
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser",user);
      if(user) {
        this.$store.dispatch("getCurrentUser");
        console.log(this.$store.state.user.email);
      }
    }); 
  },
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

.error{
  text-align: center;
  font-size: 14px;
  color: red;
}
</style>
