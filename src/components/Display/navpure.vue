<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: #fff"
    >
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

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
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
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#" @click="home">{{ $t("evacar") }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="about">{{
                $t("carsprice")
              }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="work">FAQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="cgv">{{ $t("cgv") }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="contact">{{
                $t("contact")
              }}</a>
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
const isOpen = ref(false);
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
    width: 80px;
  }
  .langage {
    display: flex;
    // justify-content: center;
  }
  .div-langage {
    display: none;
  }
}
</style>
