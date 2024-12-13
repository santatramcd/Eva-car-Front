<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: #fff"
    >
      <div class="container-fluid cont-padd">
        <a class="navbar-brand" href="#" @click="home"
          >EVA CAR RENTAL</a
        >
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
              <a class="nav-link" href="#" @click="notice"
                >TERMS AND LEGAL NOTICE</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="contact">CONTACT US</a>
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
const notice = async () => {
  router.push("/notice");
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

.navbar-brand {
    width: 20% !important;
    display: flex !important;
    justify-content: flex-end !important;
}
.nav-item a {
    font-weight: 400;
}
.nav-item a:hover {
    color: #bd162d;
    font-weight: 500;
}
.navbar-toggler i {
    font-size: 35px;
}
@media (max-width: 1063px) {
    .navbar-nav {
        width: 100% !important;
    }

    .navbar-brand {
        width: auto !important;
    }
}
@media (max-width: 990px) {
    .cont-padd {
        padding: 15px;
    }
    .nav-item {
        background-color: #bd162d;
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
    .navbar-light .navbar-nav .nav-link{
      color: #fff;
    }
}
</style>
