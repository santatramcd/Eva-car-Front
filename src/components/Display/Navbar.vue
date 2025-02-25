<template>
  <header :class="{ 'navbar-shrink': isShrunk }" id="mainNav">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid cont-padd">
        <a class="navbar-brand" href="#" @click="home"
          ><img
            src="../../../public/image/logo-black-2.png"
            alt="logo"
            class="logo"
        /></a>
        <div class="div-lang-i18">
          <ul class="langage">
            <li class="dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>
                  <img :src="$t('drapeau')" alt="drapeau" class="drapeau" />
                </span>
                {{ $i18n.locale.toUpperCase() }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li
                  v-for="locale in $i18n.availableLocales"
                  :key="`locale-${locale}`"
                >
                  <a
                    class="dropdown-item"
                    href="#"
                    @click.prevent="$i18n.locale = locale"
                  >
                    {{ locale.toUpperCase() }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <button class="navbar-toggler" type="button">
          <div
            id="menu"
            class="hamburger-menu"
            :class="{ active: isOpen }"
            @click="isOpen = !isOpen"
          >
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </button>
        <div class="collapses navbar-collapses" :class="{ active: isOpen }">
          <span class="span-image">
            <img src="../../../public/image/logo-black-2.png" alt="logo" />
          </span>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#" @click="home"
                ><i class="bi bi-house-door"></i>{{ $t("evacar") }}</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="about"
                ><i class="bi bi-tag"></i>{{ $t("carsprice") }}</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="work"
                ><i class="bi bi-exclamation-circle"></i>FAQ</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="cgv"
                ><i class="bi bi-gear"></i>{{ $t("cgv") }}</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="contact"
                ><i class="bi bi-telephone"></i>{{ $t("contact") }}</a
              >
            </li>
            <li class="nav-item dropdown div-langage">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>
                  <img :src="$t('drapeau')" alt="drapeau" class="drapeau" />
                </span>
                {{ $i18n.locale.toUpperCase() }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li
                  v-for="locale in $i18n.availableLocales"
                  :key="`locale-${locale}`"
                >
                  <a
                    class="dropdown-item"
                    href="#"
                    @click.prevent="$i18n.locale = locale"
                  >
                    {{ locale.toUpperCase() }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="div-ov-icn">
            <li>
              <a href="#"><i class="bi bi-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="bi bi-instagram"></i></a>
            </li>
            <li>
              <a href="#"><i class="bi bi-linkedin"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="overlay" :class="{ show: isOpen }" @click="toggleMenu"></div>
  </header>
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
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
import { onMounted, onUnmounted } from "vue";

const isShrunk = ref(false);

const navbarShrink = () => {
  isShrunk.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", navbarShrink);
});

onUnmounted(() => {
  window.removeEventListener("scroll", navbarShrink);
});
</script>
<style scoped lang="scss">
.collapses {
  width: 100% !important;
  justify-content: center !important;
}
.navbar-light .navbar-nav .nav-link {
  color: #333;
}
.navbar-nav {
  width: 90% !important;
  display: flex;
  justify-content: space-around !important;
}
.logo {
  width: 35%;
}
.navbar-brand {
  width: 20% !important;
  display: flex !important;
  justify-content: center !important;
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
  padding: 0;
}
.langage li {
  list-style: none;
}
.drapeau {
  width: 30px;
  margin-top: -3px;
  margin-right: 5px;
}
.langage li a {
  color: #333;
}
.div-lang-i18 {
  display: flex;
  height: 35px;
  padding-top: 20px;
  flex-wrap: wrap;
  align-content: center;
}
// navbar animation
.hamburger-menu {
  // width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  z-index: 1000;
}

.line {
  width: 40px;
  height: 5px;
  background: #333;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}

/* Active state */
.hamburger-menu.active .line:nth-child(1) {
  transform: translateY(12.5px) rotate(45deg);
}

.hamburger-menu.active .line:nth-child(2) {
  opacity: 0;
  width: 36px;
}

.hamburger-menu.active .line:nth-child(3) {
  transform: translateY(-12.5px) rotate(-45deg);
}
.navbar-toggler {
  border: none;
  padding: 0 !important;
}
.navbar-toggler:focus,
.navbar-toggler:active {
  outline: none !important; /* Supprime le contour bleu */
  box-shadow: none !important; /* Supprime l'ombre */
  border: none !important; /* Supprime la bordure */
}
.span-image {
  display: none;
}
.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  opacity: 0;
  z-index: 900;
}

.overlay.show {
  display: block;
  opacity: 1;
}

.nav-link i {
  display: none;
}
.div-ov-icn {
  display: none;
}
.div-ov-icn li {
  list-style: none;
  border: 1px solid #ffbf00;
  border-radius: 50%;
}
.div-ov-icn li a {
  color: #ffbf00;
}
.div-ov-icn li i {
  display: block;
  font-size: 30px;
  font-weight: 700;
  margin: 4px 11px;
}
header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #fff;
  transition: all 0.3s ease-in-out;
  padding: 0;
  z-index: 100;
}

@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.navbar-shrink {
  // padding: 0;
  // background-color: #ffffff;
  // backdrop-filter: blur(10px);
  // -webkit-backdrop-filter: blur(10px);
  // animation: slideInFromTop 0.5s ease-out forwards;
  background: rgba(255, 255, 255, 0.95);
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 999;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  -webkit-backface-visibility: hidden;
  .navbar-light .navbar-nav .nav-link {
    color: #000;
  }
  nav.navbar.navbar-expand-lg.navbar-light {
    padding: 0;
  }
  .logo {
    width: 60px;
  }
}

//
@media (max-width: 1063px) {
  .navbar-nav {
    width: 100% !important;
  }

  .navbar-brand {
    width: auto !important;
  }
}
@media (max-width: 996px) {
  .navbar-shrink {
    background: #fff;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    .navbar-light .navbar-nav .nav-link {
      color: #000000;
    }
  }
}

@media (max-width: 991px) {
  .cont-padd {
    padding: 0;
  }
  .nav-item {
    // background-color: #ffbf00;
    padding-left: 8px;
    margin: 5px 0;
  }
  .nav-item a {
    color: #fff;
  }
  .nav-item a:hover {
    color: #fff;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #000000;
  }
  .logo {
    width: 80px;
  }
  .langage {
    display: flex;
    // justify-content: center;
  }
  .div-langage {
    display: none;
  }
  .navbar-nav {
    display: block;
  }
  /* Ajoutez ceci dans votre fichier CSS */
  .navbar-collapses {
    transition: transform 0.3s ease;
    transform: translateX(-100%);
    position: absolute;
    top: 0;
    left: 0;
    width: 300px !important;
    height: 100vh !important;
    background: #fff;
    z-index: 1000;
  }
  .navbar-collapses.active {
    transform: translateX(0); /* Afficher le menu */
    position: fixed;
    top: 0;
    left: 0;
    width: 300px !important;
    height: 100vh !important;
  }
  .container-fluid.cont-padd {
    padding: 15px !important;
  }
  .span-image {
    // background: red;
    width: 100%;
    /* height: 178px; */
    padding: 20px;
    display: inline-block;
  }
  .span-image img {
    width: 50%;
  }
  .nav-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 10px;
    font-size: 18 px;
    /* background-color: red; */
  }
  .nav-link i {
    display: block;
    font-size: 24px;
    margin-right: 18px;
    color: #ffbf00;
  }
  .navbar {
    padding: 0;
  }
  .div-ov-icn {
    /* background: red; */
    position: absolute;
    left: 0;
    width: 100%;
    display: flex;
    bottom: 25px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0;
  }
  .navbar-shrink {
    animation: none;
  }
}
</style>
