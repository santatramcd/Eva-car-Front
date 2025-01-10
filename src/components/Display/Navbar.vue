<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: #fff"
    >
      <div class="container-fluid cont-padd">
        <a class="navbar-brand" href="#" @click="home"
          ><img
            src="../../../public/image/logo-black.png"
            alt="logo"
            class="logo"
        /></a>
        <div class="langage">
          <span
            ><img :src="$t('drapeau')" alt="drapeau" class="drapeau"
          /></span>
          <select class="i18n" v-model="$i18n.locale">
            <option
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
              :value="locale"
            >
              {{ locale }}
            </option>
          </select>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleButtonText"
        >
          <i :class="buttonIconClass"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#" @click="home"
                >CAR RENTAL SEYCHELLES</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="about">CARS AND PRICES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="work">FAQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="cgv"
                >CGV et mentions légales</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="contact">CONTACT US</a>
            </li>
            <li class="nav-item">
              <a class="nav-link div-langage" href="#">
                <span
                  ><img :src="$t('drapeau')" alt="drapeau" class="drapeau"
                /></span>
                <select v-model="$i18n.locale" class="i18n">
                  <option
                    v-for="locale in $i18n.availableLocales"
                    :key="`locale-${locale}`"
                    :value="locale"
                  >
                    {{ locale }}
                  </option>
                </select>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div class="navbar-nav"></div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const home = () => {
  router.push("/");
};
const about = async () => {
  router.push("/about");
};
const work = () => {
  router.push("/work");
};
const contact = async () => {
  router.push("/contact");
};
const cgv = async () => {
  router.push("/cgv");
};

import { ref } from "vue";

const buttonIconClass = ref("bi bi-list");

function toggleButtonText() {
  if (buttonIconClass.value === "bi bi-list") {
    buttonIconClass.value = "bi bi-x";
  } else {
    buttonIconClass.value = "bi bi-list";
  }
}
</script>
<style scoped lang="scss">
.collapse {
  width: 100% !important;
  justify-content: center !important;
}

.navbar-nav {
  width: 90% !important;
  display: flex !important;
  justify-content: space-around !important;
}
.logo {
  width: 80%;
}
.navbar-brand {
  width: 20% !important;
  display: flex !important;
  justify-content: flex-end !important;
}
.nav-item a {
  font-weight: 400;
}
.nav-item a:hover {
  color: #ffbf00;
  font-weight: 500;
}
.navbar-toggler i {
  font-size: 35px;
}
.nav-link {
  text-transform: uppercase;
}
.div-langage {
  display: flex;
  justify-content: center;
}
.langage {
  display: none;
}
.drapeau {
  width: 30px;
}
@media (max-width: 1063px) {
  .navbar-nav {
    width: 100% !important;
  }

  .navbar-brand {
    width: auto !important;
  }
}
@media (max-width: 991px) {
  .cont-padd {
    padding: 15px;
  }
  .nav-item {
    background-color: #ffbf00;
    padding-left: 8px;
    margin: 5px 0;
  }
  .nav-item a {
    color: #fff;
  }
  .nav-item a:hover {
    color: #fff;
  }
  .navbar-nav {
    margin-top: 10px;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #fff;
  }
  .logo {
    width: 165px;
  }
  .langage {
    display: flex;
    justify-content: center;
  }
  .div-langage {
    display: none;
  }
}
</style>
