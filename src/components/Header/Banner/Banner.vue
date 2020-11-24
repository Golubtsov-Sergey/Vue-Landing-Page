<template>
  <div class="banner">
    <p class="banner-text">FRETE GRÁTIS PARA COMPRAS ACIMA DE R$300,00</p>
    <ul class="items">
      <li class="item"></li>
      <li class="item item-second"></li>
      <li class="item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "banner",
};
</script>

<style scoped>
.banner {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 16px;
  background-color: #9999;
  cursor: pointer;
}

.banner-text {
  display: flex;
  margin: 0;
  font-size: 12px;
  color: #ffffff;
}

.items {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding-left: 32%;
  margin-right: -32%;
  list-style: none;
}

.item {
  border: 2px solid #303131;
  border-radius: 50%;
  height: 9px;
  width: 9px;
  margin-right: 3px;
  cursor: pointer;
}

.item-second {
  background-color: #000000;
}
</style>