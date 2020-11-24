<template>
  <v-content>
    <Banner />
    <Slider />
    <NavBar :email="this.email" :comparObj="this.comparObj" />
  </v-content>
</template>

<script>
import Banner from "@/components/Header/Banner/Banner";
import Slider from "@/components/Header/Slider/Slider";
import NavBar from "@/components/Header/NavBar/NavBar";

export default {
  name: "header-vue",
  components: {
    Banner,
    Slider,
    NavBar,
  },
  props: ["comparObj", "email"],
};
</script>