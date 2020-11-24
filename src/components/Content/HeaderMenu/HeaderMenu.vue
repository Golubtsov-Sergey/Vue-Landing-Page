<template>
  <v-content class="headerMenu">
    <div class="headerMenuTitle">
      <img class="arrow-left" src="@/image/arrow-left.jpg" alt="arrow-left" />
      <h1 class="title">PRODUTOS EM DESTAQUE</h1>
      <img
        class="arrow-right"
        src="@/image/arrow-right.jpg"
        alt="arrow-right"
      />
    </div>
    <HeaderMenuList @comprar="onComprar" />
    <div class="headerMenuFooter">
      <img src="@/image/bell.jpg" alt="bell" />
    </div>
  </v-content>
</template>

<script>
import HeaderMenuList from "@/components/Content/HeaderMenu/HeaderMenuList/HeaderMenuList";

export default {
  name: "headerMenu",
  components: {
    HeaderMenuList,
  },
  methods: {
    onComprar(data) {
      this.$emit("onComprarData", { data });
    },
  },
};
</script>

<style scoped>
.headerMenu {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 42px;
  justify-content: center;
}
.headerMenuTitle {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 32px;
  padding-top: 42px;
}

.arrow-left {
  width: 69px;
  height: 15px;
}

.title {
  font-size: 24px;
  color: #535353;
  margin: 0;
  padding: 0 28px 0 28px;
}

.arrow-right {
  width: 69px;
  height: 15px;
}

.headerMenuFooter {
  display: flex;
  justify-content: center;
  padding-top: 106px;
}
</style>