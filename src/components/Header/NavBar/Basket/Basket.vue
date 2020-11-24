<template>
  <v-content id="basket">
    <div class="burger-menu-container">
      <div class="navbar-basket" v-on:click="show = !show">
        <img
          class="basket_image"
          src="../../../../image/basket.jpg"
          alt="basket"
        />
        <span class="basket_counter">
          <p class="basket_counter-data">
            {{ this.compars.reduce((a, b) => a + (b["Count"] || 0), 0) }}
          </p>
        </span>
      </div>
      <transition>
        <v-content v-if="show">
          <div class="newMenu" v-on:click="show = !show">
            <h1 class="newMenuText">MEU CARRINHO</h1>
            <div class="new_navbar-basket">
              <img
                class="new_basket_image"
                src="../../../../image/basket.jpg"
                alt="basket"
              />
              <span class="new_basket_counter">
                <p class="new_basket_counter-data">
                  {{ this.compars.reduce((a, b) => a + (b["Count"] || 0), 0) }}
                </p>
              </span>
              <div></div>
            </div>
          </div>

          <v-card class="mx-auto menu" max-width="594">
            <v-list class="menuList">
              <v-list-item-group class="menuListGroup" v-model="model" multiple>
                <v-list-item
                  class="list-item"
                  v-for="(item, i) in compars"
                  :key="i"
                >
                  <v-list-item-content class="menu-item">
                    <v-card class="image-container">
                      <img
                        class="card-image"
                        :src="require('@/image/' + item.Src)"
                        alt=""
                    /></v-card>
                    <v-list-item-title
                      class="produto"
                      v-text="'Nome do Produto ' + item.Id"
                    ></v-list-item-title>
                    <v-card class="plus" v-on:click="item.Count += 1">+</v-card>
                    <v-card class="count">{{ item.Count }}</v-card>
                    <v-card
                      class="minus"
                      v-if="item.Count > 1"
                      v-on:click="item.Count -= 1"
                      >-</v-card
                    >
                    <v-card class="minus" v-else>-</v-card>
                    <v-card class="remove" v-on:click="removeItem(item)"
                      >X</v-card
                    >
                    <v-card class="costItem">R${{ item.Cost }}</v-card>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <div class="footerMenu">
              <div class="total">
                <h1 class="textTotal">TOTAL</h1>
                <h1 class="costTotal">
                  R${{
                    this.compars
                      .reduce(
                        (a, b) => a + (b["Count"] || 0) * (b["Cost"] || 0),
                        0
                      )
                      .toFixed(2)
                  }}
                </h1>
              </div>
              <div class="checkout">
                <div class="checkoutText">
                  <h1 class="checkoutTextFirst">CONTINUAR</h1>
                  <h1 class="checkoutTextSecond">COMPRANDO</h1>
                </div>
                <div class="checkoutButton">
                  <h1 class="buttonChecoutText">CHECKOUT</h1>
                  <span class="buttonChecoutArrow">></span>
                </div>
              </div>
            </div>
          </v-card>
        </v-content>
      </transition>
    </div>
  </v-content>
</template>

<script>
import ProductViewModel from "../../../../models/product-view-model";
import BasketViewModel from "../../../../models/basket-view-model";

export default {
  name: "basket",
  methods: {
    removeItem(item) {
      this.compars = this.compars.filter((x) => {
        return x.Id !== item.Id;
      });
    },
    arrayExistItem(arr, item, propertyName) {
      return arr.find((x) => x[propertyName] == item[propertyName]);
    },
    getFirstItem(arr, item, propertyName) {
      arr.filter((x) => {
        return x[propertyName] == item[propertyName];
      })[0];
    },
  },
  props: {
    comparObj: {
      type: ProductViewModel,
      default() {
        return new ProductViewModel();
      },
    },
  },
  watch: {
    comparObj: function () {
      const item = new BasketViewModel(this.comparObj.data.data.comprarObj);
      if (this.arrayExistItem(this.compars, item, "Id")) {
        this.getFirstItem(this.compars, item, "Id").addProduct();
      } else {
        this.compars.push(item);
      }
    },
  },
  data() {
    return {
      show: false,
      compars: [],
      model: 0,
    };
  },
};
</script>

<style scoped>
.comparObj {
  background-color: aliceblue;
}

.navbar-basket {
  display: flex;
  position: relative;
  border: none;
  padding: 0;
  background-color: #000000;
  cursor: pointer;
}

.basket_image {
  height: 30px;
  widows: 39px;
  z-index: 1;
}

.basket_counter {
  display: flex;
  position: absolute;
  border: 1px solid #000000;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #ffffff;
  z-index: 2;
  align-items: center;
  justify-content: center;
  margin-left: -20%;
}

.basket_counter-data {
  margin: 0;
}

.burger-menu-container {
  display: flex;
  flex-direction: column;
}

.newMenu {
  display: flex;
  flex-direction: row;
  position: absolute;
  max-width: 594px;
  right: -372.5%;
  width: 594px;
  height: 47px;
  z-index: 5;
  margin-top: -39px;
  box-shadow: 0 0 0 99999px rgba(236, 233, 233, 0.5);
  background-color: black;
}

.newMenuText {
  color: #eeeeee;
  background-color: #000000;
  font-size: 20px;
  height: 47px;
  padding-top: 10px;
  padding-left: 4%;
}

.new_navbar-basket {
  position: absolute;
  z-index: 10;
  top: 0;
  right: 10px;
  left: 70%;
  cursor: pointer;
}

.new_basket_image {
  z-index: 10;
  position: absolute;
  top: 0;
}

.new_basket_counter {
  display: flex;
  position: absolute;
  border: 1px solid #000000;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #ffffff;
  z-index: 11;
  top: 5px;
  right: 21px;
  align-items: center;
  justify-content: center;
  margin-left: -20%;
  left: 19%;
}

.new_basket_counter-data {
  margin: 0;
}

.menu {
  max-width: 594px;
  width: 594px;
  position: absolute;
  right: -372%;
  height: 620px;
  z-index: 5;
  opacity: 1;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
  overflow-x: hidden;
}

.menuList {
  display: flex;
  flex-direction: row;
  padding-top: 0;
}

.menuListGroup {
  width: 100%;
}

.list-item {
  border: 1px solid #0000;
  display: flex;
  flex-direction: row;
  padding-left: 0;
  padding-right: 0;
}

.firstItem {
  background-color: #000000;
  color: #ffffff;
}

.activeItem {
  background-color: #000000;
  color: #ffff;
}

.menu-item {
  display: flex;
  flex-direction: row;
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
  background-color: #ffffff;
}

.produto {
  right: 60%;
  top: 5%;
  position: absolute;
}

.plus {
  position: absolute;
  right: 63%;
  top: 63%;
  padding: 5px;
  border: 2px solid #000000;
}

.count {
  position: absolute;
  right: 70%;
  top: 64%;
  padding: 5px;
  background-color: #d1d1d1;
}

.minus {
  position: absolute;
  right: 76%;
  top: 63%;
  padding: 6px;
  border: solid 2px #000000;
}

.remove {
  position: absolute;
  right: 20%;
  top: 5%;
}

.costItem {
  position: absolute;
  right: 20%;
  top: 63%;
}

.image-container {
  max-width: 64px;
  height: 119px;
}

.card-image {
  width: 64px;
  height: 119px;
}

.footerMenu {
  display: flex;
  flex-direction: column;
}

.checkout {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.total {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  background-color: #dcdcdc;
}

.costTotal {
  padding-right: 23%;
  font-size: 22px;
}

.textTotal {
  font-size: 22px;
  padding-left: 5%;
}

.checkoutText {
  color: #b3b3b3;
  padding-right: 5%;
  padding-left: 8%;
  cursor: pointer;
}

.checkoutTextFirst {
  font-size: 26px;
}

.checkoutTextSecond {
  font-size: 26px;
  margin-left: -3.5%;
}

.checkoutButton {
  display: flex;
  flex-direction: row;
  background-color: #000000;
  width: 67%;
  align-items: center;
  cursor: pointer;
}

.buttonChecoutText {
  font-size: 26px;
  color: #ffffff;
  padding-right: 10%;
  padding-left: 10%;
}

.buttonChecoutArrow {
  font-size: 26px;
  color: #ffffff;
}
</style>