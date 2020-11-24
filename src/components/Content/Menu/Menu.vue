<template>
  <v-content id="menu">
    <div class="containerMenu">
      <div class="firstLineContainer">
        <div class="jacketContainer" v-on:click="shadowJacket = !shadowJacket">
          <img class="jacket" src="@/image/jacket.png" alt="" />
          <div class="shadowJacket" v-if="shadowJacket"></div>
          <h1 class="jacketTitle">JAQUETAS</h1>
        </div>
        <div class="shortsContainer" v-on:click="shadowShorts = !shadowShorts">
          <img class="shorts" src="@/image/shorts.png" alt="" />
          <div class="shadowShorts" v-if="shadowShorts"></div>
          <h1 class="shortsTitle">SHORTS</h1>
        </div>
      </div>
      <div class="secondLineContainer">
        <div
          class="cortaVentoContainer"
          v-on:click="shadowCortaVento = !shadowCortaVento"
        >
          <img class="cortaVento" src="@/image/cortaVento.png" alt="" />
          <div class="shadowCortaVento" v-if="shadowCortaVento"></div>
          <h1 class="cortaVentoTitle">CORTA-VENTO</h1>
        </div>
        <div
          class="camisasContainer"
          v-on:click="shadowCamisas = !shadowCamisas"
        >
          <img class="camisas" src="@/image/camisas.png" alt="" />
          <div class="shadowCamisas" v-if="shadowCamisas"></div>
          <h1 class="camisasTitle">CAMISAS</h1>
        </div>
      </div>
      <div class="thirdLineContainer">
        <div class="calcasContainer" v-on:click="shadowCalcas = !shadowCalcas">
          <img class="calcas" src="@/image/calcas.png" alt="" />
          <div class="shadowCalcas" v-if="shadowCalcas"></div>
          <h1 class="calcasTitle">CALÇAS</h1>
        </div>

        <div
          class="camisetasContainer"
          v-on:click="shadowCamisetas = !shadowCamisetas"
        >
          <img class="camisetas" src="@/image/camisetas.png" alt="" />
          <div class="shadowCamisetas" v-if="shadowCamisetas"></div>
          <h1 class="camisetasTitle">CAMISETAS</h1>
        </div>
      </div>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "main-page",
  data() {
    return {
      shadowJacket: false,
      shadowShorts: false,
      shadowCortaVento: false,
      shadowCamisas: false,
      shadowCalcas: false,
      shadowCamisetas: false,
    };
  },
};
</script>

<style scoped>
.containerMenu {
  display: flex;
  flex-direction: column;
}

.firstLineContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 27px;
}

.jacketContainer {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  width: 500px;
  height: 250px;
  margin-right: 28px;
  cursor: pointer;
  opacity: 2;
}

.jacket {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  object-fit: cover;
}

.jacketTitle {
  color: #ffffff;
  z-index: 15;
  align-self: center;
  font-size: 34px;
}

.shadowJacket {
  position: absolute;

  width: 600px;
  height: 600px;
  background-color: #1e1e1e;
  opacity: 0.6;
  z-index: 15;
}

.shortsContainer {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  width: 500px;
  height: 250px;
  cursor: pointer;
}

.shorts {
  position: absolute;
  top: 60%;
  left: 30%;
  transform: translate(-50%, -70%);
  width: 600px;
  height: 600px;
  object-fit: cover;
}

.shortsTitle {
  color: #ffffff;
  z-index: 15;
  align-self: center;
  font-size: 34px;
}

.shadowShorts {
  position: absolute;

  width: 450px;
  height: 600px;
  background-color: #1e1e1e;
  opacity: 0.6;
  z-index: 15;
  left: 0;
}

.secondLineContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 27px;
}

.cortaVentoContainer {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  width: 600px;
  height: 250px;
  margin-right: 28px;
  cursor: pointer;
}

.cortaVento {
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-62%, -30%);
  width: 600px;
  height: 600px;
  object-fit: cover;
}

.cortaVentoTitle {
  color: #ffffff;
  z-index: 15;
  align-self: center;
  font-size: 34px;
}

.shadowCortaVento {
  position: absolute;

  width: 587px;
  height: 600px;
  background-color: #1e1e1e;
  opacity: 0.6;
  z-index: 15;
  left: 0;
}

.camisasContainer {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  width: 400px;
  height: 250px;
  cursor: pointer;
}

.camisas {
  position: absolute;
  top: 60%;
  left: 20%;
  transform: translate(-55%, -48%);
  width: 600px;
  height: 600px;
  object-fit: cover;
}

.camisasTitle {
  color: #ffffff;
  z-index: 15;
  align-self: center;
  font-size: 34px;
}

.shadowCamisas {
  position: absolute;

  width: 350px;
  height: 600px;
  background-color: #1e1e1e;
  opacity: 0.6;
  z-index: 15;
  left: 0;
}

.thirdLineContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 27px;
}

.calcasContainer {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  width: 400px;
  height: 250px;
  margin-right: 28px;
  cursor: pointer;
}

.calcas {
  position: absolute;
  top: 60%;
  left: 20%;
  transform: translate(-20%, -40%);
  width: 600px;
  height: 600px;
  object-fit: cover;
}

.calcasTitle {
  color: #ffffff;
  z-index: 15;
  align-self: center;
  font-size: 34px;
}

.shadowCalcas {
  position: absolute;

  width: 600px;
  height: 600px;
  background-color: #1e1e1e;
  opacity: 0.6;
  z-index: 15;
}

.camisetasContainer {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  width: 600px;
  height: 250px;
  cursor: pointer;
}

.camisetas {
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-68%, -39%);
  width: 600px;
  height: 600px;
  object-fit: cover;
}

.camisetasTitle {
  color: #ffffff;
  z-index: 15;
  align-self: center;
  font-size: 34px;
}

.shadowCamisetas {
  position: absolute;

  width: 551px;
  height: 600px;
  background-color: #1e1e1e;
  opacity: 0.6;
  z-index: 15;
  left: 0;
}
</style>