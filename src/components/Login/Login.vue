<template>
  <v-content id="login">
    <v-form ref="form" class="container" v-model="valid" lazy-validation>
      <div class="titleContainer">
        <h1 class="title">Bank</h1>
        <p class="text">Support Portal</p>
      </div>
      <v-card class="containerLogin">
        <v-col cols="12" sm="6" md="3" class="emailContainer">
          <v-text-field
            v-model="email"
            required
            :rules="emailRules"
            label="E-mail"
            solo
          ></v-text-field>
        </v-col>
        <v-col class="passwordContainer" cols="12" sm="6" md="3">
          <v-text-field
            v-model="password"
            solo
            :rules="[rules.required]"
            :type="show3 ? 'text' : 'password'"
            name="input-10-2"
            label="Password"
            class="input-group--focused"
            @click:append="show3 = !show3"
          ></v-text-field>
        </v-col>

        <v-btn
          :disabled="!valid"
          color="#36a2c1"
          class="mr-4 buttonLogin"
          @click="validate"
        >
          Login
        </v-btn>
        <div class="containerForgot">
          <p>Forgot your password?</p>
          <p class="reset">Reset it here</p>
        </div>
      </v-card>
    </v-form>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    show3: false,
    password: "",
    rules: {
      required: (value) => !!value || "Required.",
      emailMatch: () => `The email and password you entered don't match`,
    },
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$router.push({ name: "mainPage", params: { email: this.email } });
      } else {
        this.$refs.form.validate();
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
}

.titleContainer {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  max-width: 400px;
}

.title {
  color: #36a2c1;
  padding-right: 5%;
  font-size: 41px;
}

.text {
  margin: 0;
  padding-bottom: 2%;
  margin-right: -10%;
  font-size: 18px;
}

.containerLogin {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #e6e6e6;
  width: 500px;
  height: 350px;
}

.emailContainer {
  max-width: 80%;
  bottom: 2px solid #e6e6e6;
  padding-top: 10%;
}

.passwordContainer {
  max-width: 80%;
  bottom: 2px solid #e6e6e6;
}

.buttonLogin {
  background-color: #36a2c1;
  color: #ffff;
}

.containerForgot {
  display: flex;
  flex-direction: row;
  padding-top: 20px;
}

.reset {
  padding-left: 20px;
  color: #36a2c1;
}
</style>