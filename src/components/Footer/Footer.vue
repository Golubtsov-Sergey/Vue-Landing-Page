<template>
  <v-content>
    <div class="containerTitle">
      <img class="arrow-left" src="@/image/arrow-left.jpg" alt="arrow-left" />
      <h1 class="title">GALERIA DO INSTAGRAM</h1>
      <img
        class="arrow-right"
        src="@/image/arrow-right.jpg"
        alt="arrow-right"
      />
    </div>
    <div class="containerInstagramm">
      <div
        class="firstMenContainer"
        v-on:click="shadowFirstMen = !shadowFirstMen"
      >
        <img class="firstMen" src="@/image/firstMen.png" alt="" />
        <div class="shadowFirstMen" v-if="shadowFirstMen">
          <span class="shadowFirstMenHeart">heart</span>
          <p class="shadowFirstMenText">1.323 likes</p>
        </div>
      </div>
      <div
        class="secondMenContainer"
        v-on:click="shadowSecondMen = !shadowSecondMen"
      >
        <img class="secondMen" src="@/image/secondMen.png" alt="" />
        <div class="shadowSecondMen" v-if="shadowSecondMen">
          <span class="shadowSecondMenHeart">heart</span>
          <p class="shadowSecondMenText">1.323 likes</p>
        </div>
      </div>
      <div
        class="thirdMenContainer"
        v-on:click="shadowThirdMen = !shadowThirdMen"
      >
        <img class="thirdMen" src="@/image/thirdMen.png" alt="" />
        <div class="shadowThirdMen" v-if="shadowThirdMen">
          <span class="shadowThirdMenHeart">heart</span>
          <p class="shadowThirdMenText">1.323 likes</p>
        </div>
      </div>
      <div
        class="fourthMenContainer"
        v-on:click="shadowFourthMen = !shadowFourthMen"
      >
        <img class="fourthMen" src="@/image/fourthMen.png" alt="" />
        <div class="shadowFourthMen" v-if="shadowFourthMen">
          <span class="shadowFourthMenHeart">heart</span>
          <p class="shadowFourthMenText">1.323 likes</p>
        </div>
      </div>
      <div
        class="fifthMenContainer"
        v-on:click="shadowFifthMen = !shadowFifthMen"
      >
        <img class="fifthMen" src="@/image/fifthMen.png" alt="" />
        <div class="shadowFifthMen" v-if="shadowFifthMen">
          <span class="shadowFifthMenHeart">heart</span>
          <p class="shadowFifthMenText">1.323 likes</p>
        </div>
      </div>
    </div>
    <div class="containerTitle">
      <img class="arrow-left" src="@/image/arrow-left.jpg" alt="arrow-left" />
      <h1 class="title">QUEM USA</h1>
      <img
        class="arrow-right"
        src="@/image/arrow-right.jpg"
        alt="arrow-right"
      />
    </div>

    <div class="containerQuem">
      <div
        class="firstQuemContainer"
        v-on:click="shadowFirstQuem = !shadowFirstQuem"
      >
        <img class="firstQuem" src="@/image/firstQuem.png" alt="" />
        <div class="shadowFirstQuem" v-if="shadowFirstQuem">
          <p class="shadowFirstQuemText">Hands</p>
        </div>
      </div>
      <div
        class="secondQuemContainer"
        v-on:click="shadowSecondQuem = !shadowSecondQuem"
      >
        <img class="secondQuem" src="@/image/secondQuem.png" alt="" />
        <div class="shadowSecondQuem" v-if="shadowSecondQuem">
          <p class="shadowSecondQuemText">David Guetta</p>
        </div>
      </div>
      <div
        class="thirdQuemContainer"
        v-on:click="shadowThirdQuem = !shadowThirdQuem"
      >
        <img class="thirdQuem" src="@/image/thirdQuem.png" alt="" />
        <div class="shadowThirdQuem" v-if="shadowThirdQuem">
          <p class="shadowThirdQuemText">Mens</p>
        </div>
      </div>
      <div
        class="fourthQuemContainer"
        v-on:click="shadowFourthQuem = !shadowFourthQuem"
      >
        <img class="fourthQuem" src="@/image/fourthQuem.png" alt="" />
        <div class="shadowFourthQuem" v-if="shadowFourthQuem">
          <p class="shadowFourthQuemText">Men</p>
        </div>
      </div>
    </div>
    <div class="newsLetterContainer">
      <div class="newsLetter">
        <h1 class="newsLetterTitle">NEWSLETTER</h1>
      </div>
      <div class="nome">
        <h1 class="nomeTitle">NOME</h1>
      </div>
      <div class="email">
        <h1 class="emailTitle">ENDEREÇO DE EMAIL</h1>
      </div>
      <div class="cadastrar">
        <h1 class="cadastrarTitle">CADASTRAR</h1>
      </div>
    </div>
    <div class="footer">
      <div class="footerMenu">
        <p class="sobre">SOBRE</p>
        <p class="contato">CONTATO</p>
        <p class="termos">TERMOS & CONDIÇÕES</p>
        <p class="politica">POLÍTICA DE PRIVACIDADE</p>
      </div>
      <div class="icons">
        <img lass="facebook" src="../../image/facebook.png" alt="" />
        <img lass="twitter" src="../../image/twitter.png" alt="" />
        <img lass="instagramm" src="../../image/instagramm.png" alt="" />
      </div>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "footer-vue",
  data() {
    return {
      shadowFirstMen: false,
      shadowSecondMen: false,
      shadowThirdMen: false,
      shadowFourthMen: false,
      shadowFifthMen: false,
      shadowFirstQuem: false,
      shadowSecondQuem: false,
      shadowThirdQuem: false,
      shadowFourthQuem: false,
    };
  },
};
</script>

<style scoped>
.containerTitle {
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

.containerInstagramm {
  width: 86%;
  padding-left: 10.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.firstMenContainer,
.secondMenContainer,
.thirdMenContainer,
.fourthMenContainer,
.fifthMenContainer {
  position: relative;
}

.firstMen {
  width: 170px;
  height: 170px;
  cursor: pointer;
}

.shadowFirstMen {
  position: absolute;
  top: 0;
  width: 170px;
  height: 170px;
  background-color: #1e1e1e;
  opacity: 0.6;
  z-index: 15;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.shadowFirstMenHeart {
  color: #ffffff;
}

.shadowFirstMenText {
  color: #ffffff;
}

.secondMen {
  width: 170px;
  height: 170px;
  cursor: pointer;
}

.shadowSecondMen,
.shadowThirdMen,
.shadowFourthMen,
.shadowFifthMen {
  position: absolute;
  top: 0%;
  width: 170px;
  height: 170px;
  background-color: #1e1e1e;
  opacity: 0.6;
  z-index: 15;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.shadowSecondMen,
.shadowThirdMen,
.shadowFourthMen,
.shadowFifthMen {
  color: #ffffff;
}

.shadowSecondMen,
.shadowThirdMen,
.shadowFourthMen,
.shadowFifthMen {
  color: #ffffff;
}

.thirdMen {
  width: 170px;
  height: 170px;
  cursor: pointer;
}

.fourthMen {
  width: 170px;
  height: 170px;
  cursor: pointer;
}

.fifthMen {
  width: 170px;
  height: 170px;
  cursor: pointer;
}

.containerQuem {
  width: 86%;
  padding-left: 10.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.firstQuemContainer,
.secondQuemContainer,
.thirdQuemContainer,
.fourthQuemContainer {
  position: relative;
}

.firstQuem,
.secondQuem,
.thirdQuem,
.fourthQuem {
  width: 220px;
  height: 220px;
  cursor: pointer;
}

.shadowFirstQuem,
.shadowSecondQuem,
.shadowThirdQuem,
.shadowFourthQuem {
  position: absolute;
  top: 0%;
  width: 220px;
  height: 220px;
  background-color: #1e1e1e;
  opacity: 0.6;
  z-index: 15;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.shadowFirstQuemText,
.shadowSecondQuemText,
.shadowThirdQuemText,
.shadowFourthQuemText {
  color: #ffffff;
}

.newsLetterContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 86%;
  padding-left: 10.5%;
  padding-top: 74px;
}

.newsLetter {
  display: flex;
  border: 1px solid #000000;
  background-color: #000000;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
}

.newsLetterTitle {
  color: #ffffff;
  font-size: 19px;
  padding-top: 10%;
}

.nome,
.email {
  display: flex;
  border: 1px solid #959595;
  justify-content: center;
  align-items: center;
  width: 29%;
  cursor: pointer;
}

.nomeTitle,
.emailTitle {
  color: #959595;
  font-size: 19px;
}

.cadastrar {
  display: flex;
  border-bottom: 1px solid #4e4f51;
  justify-content: center;
  align-items: center;
  background-color: #d0d0d0;
  cursor: pointer;
}

.cadastrarTitle {
  color: #5f5f5f;
  font-size: 19px;
  padding: 0 20px 0 20px;
}

.footer,
.footerMenu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}

.footerMenu {
  margin-left: -3.5%;
}

.footer {
  margin-top: 56px;
  background-color: #000000;
}

.sobre,
.contato,
.termos,
.termos,
.politica {
  color: white;
  margin: 0;
  font-size: 15px;
  padding-right: 28px;
  cursor: pointer;
}

.icons {
  margin-left: -4%;
}

.facebook .twitter,
.instagramm {
  cursor: pointer;
}
</style>