<template>
  <div class="div-foot-div">
    <footer class="bd-footer py-5 mt-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-3 mb-3">
            <a
              class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none"
              href="/"
              aria-label="Bootstrap"
            >
              <img src="../../../public/image/logo-white.png" alt="logo" />
            </a>
            <ul class="list-unstyled small text-muted">
              <li class="mb-2 text-justify">
                {{ $t("evacarfooter") }}
              </li>
            </ul>
          </div>
          <div class="col-6 col-lg-2 offset-lg-1 mb-3">
            <h5>MENU</h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="#" @click="home" class="route-a"
                  >CAR RENTAL SEYCHELLES
                </a>
              </li>
              <li class="mb-2">
                <a href="#" @click="about" class="route-a">CARS AND PRICES</a>
              </li>
              <li class="mb-2">
                <a href="#" @click="work" class="route-a">FAQ</a>
              </li>
              <li class="mb-2">
                <a href="#" @click="cgv" class="route-a"
                  >CGV et mentions légales</a
                >
              </li>
              <li class="mb-2">
                <a href="#" @click="contact" class="route-a">CONTACT US</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-lg-2 mb-3">
            <h5>Guides</h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="#">Getting started</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-lg-2 mb-3">
            <h5>PAYEMENT</h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="#">Stripe</a>
              </li>
              <li class="mb-2">
                <a href="#">PayPal</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-lg-2 mb-3">
            <h5>Contactez-nous</h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="#"
                  >Retrouvez nos offres et bénéficiez de conseils d'experts</a
                >
              </li>
              <li class="mb-2">
                <a href="#">+49-000-000000-00</a>
              </li>
            </ul>
            <ul class="list-unstyled reseau">
              <li class="mb-2">
                <a href="#"><i class="bi bi-facebook"></i></a>
              </li>
              <li class="mb-2">
                <a href="#"><i class="bi bi-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <div
      class="div-fixed"
      :class="{ show: isVisible, hide: !isVisible }"
      @click="scrollToTop"
    >
      <a href="#">
        <i class="bi bi-chevron-up"></i>
      </a>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

// Fonction pour gérer le scroll
const handleScroll = () => {
  isVisible.value = window.scrollY > 200;
};

// Ajouter l'écouteur d'événements au montage du composant
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Supprimer l'écouteur d'événements lors du démontage du composant
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Fonction pour remonter en haut
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
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
</script>
<style scoped>
img {
  width: 90px;
}
li,
a {
  text-decoration: none;
  color: #fff;
}
a:hover{
  color: #fff;
}
.text-justify {
  text-align: justify;
}
footer {
  background-color: #333;
  color: #fff;
  position: relative;
  z-index: 10;
}
.route-a {
  font-size: 13px;
}
.reseau {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 1.4rem;
}
.div-fixed {
  position: fixed;
  text-align: center;
  cursor: pointer;
  z-index: 99;
  width: 2.1em;
  height: 2.1em;
  line-height: 2.1;
  border-radius: 2px;
  outline: inherit;
  right: 60px;
  bottom: 30px;
  background-color: #ffbf00;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  transform: translateY(50px);
}

.div-fixed a {
  font-size: 15px;
  color: #ffffff;
}

.div-fixed.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.div-fixed.hide {
  opacity: 0;
  visibility: hidden;
  transform: translateY(50px);
}
@media (max-width: 996px) {
  .div-fixed {
    right: 30px;
  }
}
</style>
