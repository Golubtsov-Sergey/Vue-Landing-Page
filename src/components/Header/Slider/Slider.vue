<template>
  <div class="slider">
    <v-content>
      <v-carousel :show-arrows="false" height="100%" hide-delimiter-background>
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-sheet height="100%">
            <v-img :src="require('@/image/' + item.src)"></v-img>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-content>

    <div class="slider_container">
      <h1 class="container-title">C&F CLOTHING</h1>
      <div class="container-line"></div>
      <p class="container-text">Sports & Lifestyle</p>
      <button class="container-button">CONFIRA</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "slider",
  data() {
    return {
      items: [
        { src: "carousel_men.jpg" },
        { src: "carousel_men.jpg" },
        { src: "carousel_men.jpg" },
        { src: "carousel_men.jpg" },
        { src: "carousel_men.jpg" },
      ],
    };
  },
};
</script>

<style scoped>
.slider {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: flex-end;
}

.slider_img {
  width: 100%;
  z-index: 1;
}

.slider_container {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  margin-left: -57%;
  margin-bottom: 14.5%;
}

.container-title {
  font-size: 34.87px;
  margin-top: 0;
  margin-bottom: 13px;
}

.container-line {
  width: 316px;
  border: 2px solid #212120;
}

.container-text {
  font-size: 23.33px;
  margin-top: 13px;
  margin-bottom: 45px;
}

.container-button {
  font-size: 24.81px;
  padding: 9px;
  padding: 9px 15px 9px 15px;
  border: 3px solid #393939;
  background-color: #f8f7f3;
  width: 50%;
  cursor: pointer;
}

.slider_list {
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 2;
  list-style: none;
  margin-left: -3%;
}

.item {
  border: 2px solid #ffffff;
  border-radius: 50%;
  height: 16px;
  width: 16px;
  margin-right: 6px;
  cursor: pointer;
  background-color: #ffffff;
}

.third-item {
  background-color: #221f1f;
  border-color: #221f1f;
}
</style>