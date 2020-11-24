<template>
  <v-sheet class="mx-auto" max-width="1330px" max-height="338px">
    <v-slide-group v-model="model" class="pa-1 slide" multiple show-arrows>
      <v-slide-item
        v-for="(item, i) in items"
        :key="i"
        v-slot="{ active, toggle }"
      >
        <v-card
          :img="require('@/image/' + item.Src)"
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-4 card"
          height="329"
          width="172px"
          @click="toggle"
        >
          <v-row class="fill-height" align="end" justify="center">
            <v-scale-transition>
              <v-card-text v-if="active">
                <v-row class="bottom-text" justify="center">
                  <div>
                    <p class="text" v-on:click="comprarObj = item">COMPRAR</p>
                  </div>
                </v-row>
              </v-card-text>
            </v-scale-transition>
          </v-row>
          <v-row justify="center" class="cost_container">
            <div>
              <p class="cost">R${{ item.Cost }}</p>
            </div>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import ProductViewModel from "../../../../models/product-view-model";

export default {
  name: "headerMenuList",

  watch: {
    comprarObj() {
      this.$emit("comprar", { comprarObj: this.comprarObj });
    },
  },

  data() {
    return {
      comprarObj: ProductViewModel,
      items: [
        new ProductViewModel(1, 88.88, "carousel_men1.jpg"),
        new ProductViewModel(2, 88.88, "carousel_men2.jpg"),
        new ProductViewModel(3, 88.88, "carousel_men3.jpg"),
        new ProductViewModel(4, 88.88, "carousel_men4.jpg"),
        new ProductViewModel(5, 88.88, "carousel_men5.jpg"),
        new ProductViewModel(6, 88.88, "carousel_men6.jpg"),
        new ProductViewModel(7, 88.88, "carousel_men1.jpg"),
        new ProductViewModel(8, 88.88, "carousel_men2.jpg"),
        new ProductViewModel(9, 88.88, "carousel_men3.jpg"),
        new ProductViewModel(10, 88.88, "carousel_men4.jpg"),
        new ProductViewModel(11, 88.88, "carousel_men5.jpg"),
        new ProductViewModel(12, 88.88, "carousel_men6.jpg"),
      ],
    };
  },
};
</script>

<style scoped>
.bottom-text {
  background-color: #4e4d4b;
  max-width: 106%;
  margin-left: -3%;
  margin-bottom: -10%;
  opacity: 0.7;
  color: white;
}

.slide {
  height: 380px;
}
</style>