<template>
  <div class="div-cat">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 card div-filt-cat">
          <Categories />
        </div>

        <div class="col-lg-8 card">
          <div class="container containToas">
            <div
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
              v-show="isVisible"
            >
              <div class="toast-body d-flex">
                <span class="spanToasts"
                  ><i class="bi bi-exclamation-circle"></i
                ></span>
                <p class="paraToas">
                  L'offre qui s'affiche est un exemple de réservation sur les
                  prochains 5 jours. Pour avoir une offre adaptée, veuillez
                  remplir le formulaire adjacent, et cliquez sur le bouton
                  'Afficher les offres'
                </p>
                <span class="icnX"
                  ><i class="bi bi-x" @click="handleClick"></i
                ></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="col-lg-6 card div-hover mt-5"
              v-for="(item, index) in filteredData"
              :key="index"
            >
              <div class="div-bord-auto">
                <div class="div-im-sh">
                  <img :src="item.picture" alt="" />
                </div>
                <div class="div-item">
                  <h1 class="title-item">{{ item.title }}</h1>
                  <span>
                    {{ item.details }}
                  </span>
                  <span class="span-hr"> </span>
                  <div>
                    <p>
                      Price 5 days :
                      <span class="span-price">
                        {{ item.price }}
                      </span>
                    </p>
                    <button class="btn-reserve">
                      <router-link class="nav-link col-white" to="/reserve"
                        >Réserver !</router-link
                      >
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Categories from "./Categories.vue";
const data = ref([
  {
    title: "Suzuki Alto",
    details: "35 kW, 800 ccm • Manual",
    price: "€143.50",
    picture: `https://d12ittivwictyd.cloudfront.net/images/cars/suzuki-alto.png`,
  },
  {
    title: "Suzuki Alto K10",
    details: "48 kW, 1200 ccm • Automatic",
    price: "€143.50",
    picture: `https://d12ittivwictyd.cloudfront.net/images/cars/suzuki-alto-k10.png`,
  },
  {
    title: "Kia Picanto",
    details: "51 kW, 998 ccm • Automatic",
    price: "€172.35",
    picture: `https://d12ittivwictyd.cloudfront.net/images/cars/kia-picanto.png`,
  },
  {
    title: "Suzuki Spresso",
    details: "49 kW, 1000 ccm • Manual",
    price: "€172.35",
    picture: `https://d12ittivwictyd.cloudfront.net/images/cars/suzuki-spresso.png`,
  },
  {
    title: "Mitsubishi Mirage",
    details: "59 kW, 1100 ccm • Automatic",
    price: "€172.35",
    picture: `https://d12ittivwictyd.cloudfront.net/images/cars/mitsubishi-mirage-2014.png`,
  },
  {
    title: "Renault Kwid Climber",
    details: "49 kW, 999 ccm • Automatic",
    price: "€172.35",
    picture: `https://d12ittivwictyd.cloudfront.net/images/cars/renault-kwid-climber.png`,
  },
]);

const filteredData = ref(data.value);
const isVisible = ref(true);

const handleClick = () => {
  isVisible.value = false;
};
</script>
<style scoped>
.div-cat {
  margin-top: 80px;
}
.title-item {
  min-height: 90px;
}
.card {
  border: none;
}
.div-item {
  /* background-color: aqua; */
  padding: 10px 0;
}
.div-hover {
  transition: transform 0.7s cubic-bezier(0.2, 1, 0.2, 1);
  transform: translateY(0);
}
.div-hover:hover {
  transform: translateY(-10px);
}
.cont-it {
  margin-top: 60px;
}
.span-hr {
  width: 65%;
  height: 1px;
  background-color: #c9c9c9;
  display: inline-block;
  margin: 10px 0;
}
.span-price {
  font-size: 25px;
  color: #ffbf00;
  font-weight: 600;
}

.btn-reserve {
  width: 50%;
  height: 40px;
  border: none;
  background-color: #081c3b;
  color: #fff;
  font-weight: 700;
}
.div-bord-auto {
  padding: 25px;
  border: 1px solid #d5d5d5;
  text-align: center;
}

.containToas {
  background-color: #6dace6;
  margin-top: 20px;
  position: relative;
  padding:0 30px;
}
.spanToasts {
  /* background-color: red; */
  font-size: 2em;
  /* padding-right: 10px; */
  color: #fff;
  left: 5px;
  position: absolute;
}
.paraToas {
  /* background-color: aqua; */
  font-size: 16px;
  color: #fff;
  text-align: justify;
  margin-top: 10px;
}
.icnX {
  font-size: 1.5rem;
  /* background-color: red; */
  cursor: pointer;
  color: #fff;
  position: absolute;
  right: 5px;
  top: 0;
}
</style>
