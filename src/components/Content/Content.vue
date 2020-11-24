<template>
  <v-content>
    <HeaderMenu @onComprarData="dataComprar" />
    <Menu />
  </v-content>
</template>

<script>
import HeaderMenu from "@/components/Content/HeaderMenu/HeaderMenu";
import Menu from "@/components/Content/Menu/Menu";

export default {
  name: "content-vue",
  components: {
    HeaderMenu,
    Menu,
  },
  methods: {
    dataComprar(data) {
      this.$emit("onDataComprar", { data });
    },
  },
};
</script>