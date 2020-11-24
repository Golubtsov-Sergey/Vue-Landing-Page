<template >
  <div class="navbar-vue">
    <div class="burger-menu-container">
      <div class="burger-menu" v-on:click="show = !show">
        <span class="burger"></span>
      </div>
      <transition>
        <v-content v-if="show">
          <div class="newMenu" v-on:click="show = !show">
            <h1 class="newMenuText">MENU</h1>
            <span class="close"></span>
          </div>

          <v-card class="mx-auto menu" max-width="594">
            <div class="search">
              <input
                v-model="search"
                class="search-text"
                placeholder="O QUE ESTÁ PROCURANDO?"
              />
              <button class="button_search">
                <img class="image_serach" src="@/image/search.jpg" alt="" />
              </button>
            </div>

            <v-list>
              <v-list-item-group v-model="model" multiple>
                <v-list-item
                  class="list-item"
                  v-for="(item, i) in items"
                  :key="i"
                  v-on:click="item.isElVisieble = !item.isElVisieble"
                >
                  <v-list-item-content
                    class="menu-item"
                    active-class="firstItem"
                  >
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                    <v-list-item-content
                      class="activeItem"
                      v-if="item.isElVisieble"
                    >
                      <v-list-item-title
                        v-text="item.subText"
                      ></v-list-item-title>
                      <v-list-item-icon>
                        <v-icon v-text="item.icon" small></v-icon>
                      </v-list-item-icon>
                    </v-list-item-content>

                    <v-list-item-content
                      class="activeItem"
                      v-if="item.isElVisieble"
                    >
                      <v-list-item-title
                        v-text="item.subText"
                      ></v-list-item-title>
                      <v-list-item-icon>
                        <v-icon v-text="item.icon" small></v-icon>
                      </v-list-item-icon>
                    </v-list-item-content>

                    <v-list-item-content
                      class="activeItem"
                      v-if="item.isElVisieble"
                    >
                      <v-list-item-title
                        v-text="item.subText"
                      ></v-list-item-title>
                      <v-list-item-icon>
                        <v-icon v-text="item.icon" small></v-icon>
                      </v-list-item-icon>
                    </v-list-item-content>

                    <v-list-item-content
                      class="activeItem"
                      v-if="item.isElVisieble"
                    >
                      <v-list-item-title
                        v-text="item.subText"
                      ></v-list-item-title>
                      <v-list-item-icon>
                        <v-icon v-text="item.icon" small></v-icon>
                      </v-list-item-icon>
                    </v-list-item-content>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-icon v-text="item.icon" small></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-content>
      </transition>
    </div>

    <h1 class="navbar-title">CLOTH & FASHION</h1>
    <div class="navbar-data">
      <Login v-if="!email" />
      <span class="newEmail" v-else>{{ email }}</span>
      <Basket :comparObj="this.comparObj" />
    </div>
  </div>
</template>

<script>
import Login from "./Login/Login";
import Basket from "./Basket/Basket";

export default {
  name: "navbar-vue",
  components: {
    Login,
    Basket,
  },
  watch: {
    user() {
      console.log(this.email);
      this.user = this.email;
    },
  },
  props: ["comparObj", "email"],
  data() {
    return {
      user: "",
      show: false,
      items: [
        {
          icon: "mdi-plus",
          text: "SOBRE",
          subText: "SOBRE",
          id: 1,
          isElVisieble: false,
        },
        {
          icon: "mdi-plus",
          text: "COLEÇÕES ",
          subText: "COLEÇÕES",
          isElVisieble: false,
          id: 2,
        },
        {
          icon: "mdi-plus",
          text: "CATEGORIA",
          subText: "CATEGORIA",
          isElVisieble: false,
          id: 3,
        },
        {
          icon: "mdi-plus",
          text: "LOOKS",
          subText: "LOOKS",
          isElVisieble: false,
          id: 4,
        },
        {
          icon: "mdi-plus",
          text: "CONTATO",
          subText: "CONTATO",
          isElVisieble: false,
          id: 5,
        },
      ],
      model: 0,
    };
  },
};
</script>

<style scoped>
.navbar-vue {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 47px;
  background-color: #000000;
}

.burger-menu-container {
  margin-right: 9%;
  display: flex;
  flex-direction: column;
}

.search {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 20%;
  border-bottom: 1px solid #c6c6c6;
  padding-top: 8px;
  padding-bottom: 11px;
  background-color: #c6c6c6;
}

.search-text {
  width: 70%;
  padding-right: 3%;
  background-color: #ffff;
  padding-left: 5%;
  border-color: #c6c6c6;
}

.button_search {
  background-color: black;
  position: relative;
  z-index: 5;
  width: 48px;
  height: 42px;
  padding-bottom: 7%;
  padding-right: 7%;
}

.image_serach {
  position: absolute;
  width: 25px;
  height: 25px;
  z-index: 6;
}

.newMenu {
  position: absolute;
  width: 504px;
  height: 47px;
  z-index: 5;
  margin-top: -47px;
  left: -615%;
  box-shadow: 0 0 0 99999px rgba(236, 233, 233, 0.5);
}

.newMenuText {
  color: #eeeeee;
  background-color: #000000;
  padding-left: 27%;
}

.close {
  position: absolute;
  right: 8px;
  top: 8px;
  width: 32px;
  height: 32px;
  opacity: 0.5;
  cursor: pointer;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: " ";
  height: 33px;
  width: 2px;
  background-color: #eeeeee;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

.menu {
  width: 504px;
  height: 620px;
  z-index: 5;
  position: absolute;
  left: -615%;
  opacity: 1;
}

.burger-menu {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 33px;
  height: 22px;
  cursor: pointer;
  margin-bottom: 40%;
  margin-top: 12px;
  margin-right: 8%;
}

.burger {
  position: absolute;
  width: 100%;
  height: 4px;
  right: 0;
  top: 50%;
  margin-top: -2px;
  background-color: #ffffff;
}

.burger-menu::before,
.burger-menu::after {
  content: "";
  background-color: #ffffff;
  position: absolute;
  width: 100%;
  height: 4px;
  cursor: pointer;
}

.burger-menu::before {
  top: 0;
}

.burger-menu::after {
  bottom: 0;
}

.list-item {
  padding-left: 28%;
  border-bottom: 1px solid #c6c6c6;
}

.firstItem {
  background-color: #000000;
  color: #ffffff;
}

.activeItem {
  background-color: #000000;
  color: #ffffff;
}

.navbar-title {
  display: flex;
  align-items: center;
  font-size: 30px;
  color: #ffffff;
}

.navbar-data {
  display: flex;
  align-items: center;
  width: 140px;
  height: 100%;
}

.newEmail {
  color: #ffffff;
  margin-left: -40px;
  padding-right: 40px;
}
</style>