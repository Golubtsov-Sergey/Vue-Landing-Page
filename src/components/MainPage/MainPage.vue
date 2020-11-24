<template>
  <v-content id="main-page">
    <Header :email="this.email" :comparObj="this.comparObj" />
    <Content @onDataComprar="dataComprar" />
    <Footer />
  </v-content>
</template>

<script>
import Header from "@/components/Header/Header";
import Content from "@/components/Content/Content";
import ProductViewModel from "../../models/product-view-model";
import Footer from "@/components/Footer/Footer";

export default {
  name: "main-page",
  props: {
    email: {
      email: "email",
    },
  },
  components: {
    Header,
    Content,
    Footer,
  },
  data() {
    return {
      comparObj: ProductViewModel,
    };
  },
  methods: {
    dataComprar(data) {
      this.comparObj = data;
    },
  },
};
</script>

<style scoped>
</style>