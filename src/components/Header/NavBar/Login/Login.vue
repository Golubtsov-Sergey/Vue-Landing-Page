<template>
  <v-content id="login">
    <div class="navbar-login" v-on:click="goToLogin()">Login</div>
  </v-content>
</template>

<script>
export default {
  name: "login",
  methods: {
    goToLogin() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
.navbar-login {
  color: #ffffff;
  background-color: #000000;
  width: 65px;
  height: 18px;
  cursor: pointer;
  margin-right: 13%;
}
</style>