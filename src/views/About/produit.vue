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
          <Voituresdispo />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Categories from "./Categories.vue";
import Voituresdispo from "./Voituresdispo.vue";

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
.containToas {
  background-color: #6dace6;
  margin-top: 20px;
  position: relative;
  padding: 0 30px;
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
