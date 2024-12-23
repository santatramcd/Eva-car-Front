<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4">
          <div class="divsearch">
            <h3 class="search-title">Recherche dans notre FAQ</h3>
            <div class="divisionsear">
              <input
                type="text"
                class="form-control formcont"
                aria-label="Amount"
                placeholder="Faite votre recherche ici"
                v-model="searchQuery"
              />
              <span class="spanserch"><i class="bi bi-search"></i></span>
            </div>
          </div>
          <ul class="ulsearch">
            <li class="lisearch">Le système de réservation en ligne</li>
            <li class="lisearch">Accidents et pannes</li>
            <li class="lisearch">Les règles de circulation routière</li>
            <li class="lisearch">Politique d'assurance et de responsabilité</li>
            <li class="lisearch">Tarifs et autres conditions de location</li>
            <li class="lisearch">Conditions de paiement</li>
            <li class="lisearch">À propos de Eva Car Rental</li>
          </ul>
        </div>
        <!-- Contenu de la page avec les sections -->
        <div class="col-md-8">
          <div
            class="toast-body divi1"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            v-show="isVisible"
          >
            <div class="div1">
              <span class="span1"
                ><i class="bi bi-exclamation-circle"></i
              ></span>
            </div>
            <div class="div2">
              <p class="param1">
                Vous êtes bien sur la version adaptée à la destination choisie :
                Seychelles.
              </p>
            </div>
            <div class="div3">
              <span class="spanicone1"
                ><i class="bi bi-x" @click="handleClick"></i
              ></span>
            </div>
          </div>

          <div
            class="container p-0"
            v-for="(item, index) in filteredData"
            :key="index"
          >
            <p class="h1faq" @click="toggleIconNext(index)">
              <a
                data-bs-toggle="collapse"
                :href="'#collapseExample' + index"
                role="button"
                :aria-expanded="isIconChanged[index] ? 'true' : 'false'"
                :aria-controls="'collapseExample' + index"
              >
                {{ item.title }}
              </a>
              <span v-if="!isIconChanged[index]"
                ><i class="bi bi-chevron-down"></i
              ></span>
              <span v-else><i class="bi bi-chevron-up"></i></span>
            </p>
            <div
              :class="{
                collapse: isIconChanged[index],
                show: !isIconChanged[index],
              }"
              :id="'collapseExample' + index"
            >
              <div class="card card-body paramfaq">
                {{ item.message }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const dataAuto = [
  {
    title: "Le système de réservation en ligne",
    message: `1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                  eum debitis ab! Dolorum, illum unde amet animi quasi eaque rerum.
                  Ipsum eius excepturi harum placeat qui obcaecati rem inventore
                  soluta.`,
  },
  {
    title: "Accidents et pannes",
    message: `2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                  eum debitis ab! Dolorum, illum unde amet animi quasi eaque rerum.
                  Ipsum eius excepturi harum placeat qui obcaecati rem inventore
                  soluta.`,
  },
  {
    title: "Les règles de circulation routière",
    message: `2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                  eum debitis ab! Dolorum, illum unde amet animi quasi eaque rerum.
                  Ipsum eius excepturi harum placeat qui obcaecati rem inventore
                  soluta.`,
  },
  {
    title: "L'option premium, c'est quoi exactement ?",
    message: `1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                  eum debitis ab! Dolorum, illum unde amet animi quasi eaque rerum.
                  Ipsum eius excepturi harum placeat qui obcaecati rem inventore
                  soluta.`,
  },
  {
    title: " Quelles sont les conditions d'annulation ?",
    message: `2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                  eum debitis ab! Dolorum, illum unde amet animi quasi eaque rerum.
                  Ipsum eius excepturi harum placeat qui obcaecati rem inventore
                  soluta.`,
  },
  {
    title: "Dois-je verser un dépôt de garantie ?",
    message: `2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                  eum debitis ab! Dolorum, illum unde amet animi quasi eaque rerum.
                  Ipsum eius excepturi harum placeat qui obcaecati rem inventore
                  soluta.`,
  },
];

const isIconChanged = ref(Array(dataAuto.length).fill(false));
const searchQuery = ref("");

const filteredData = computed(() => {
  return dataAuto.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const toggleIconNext = (index) => {
  isIconChanged.value[index] = !isIconChanged.value[index];
};

const isVisible = ref(true);

const handleClick = () => {
  isVisible.value = false;
};
</script>

<style lang="scss" scoped>
.custom-hover:hover {
  color: #6dace6;
}
.divsearch {
  background-color: #fff;
  padding: 20px;
  color: #2d3e52;
}
.divisionsear {
  position: relative;
}
.spanserch {
  font-size: 1rem;
  position: absolute;
  top: 0;
  left: 85%;
  width: 15%;
  height: 100%;
  background-color: #899e27;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.formcont {
  border-radius: 8px;
  height: 50px;
}
.search-title {
  font-size: 20px;
  padding: 8px 0px;
  color: #2d3e52;
}
.ulsearch {
  background-color: #f5f5f5;
  margin-top: 20px;
  padding: 20px;
  position: sticky;
  top: 70px;
}
.lisearch {
  margin-top: 5px;
  padding: 5px 10px;
  cursor: pointer;
  color: #2d3e52;
}
.lisearch:hover {
  color: #4a9fef;
  border-left: 1px solid #4a9fef;
}

/* example */
.divi1 {
  background-color: #f5cf77;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.div1 {
  /* background-color: #899e27; */
  width: 10%;
  padding: 5px;
}
.div2 {
  /* background-color: aquamarine; */
  width: 80%;
}
.div3 {
  /* background-color: crimson; */
  width: 5%;
}
.span1 {
  /* background-color: chartreuse; */
  font-size: 2rem;
  color: #2d3e52;
}
.param1 {
  /* background-color: lightpink; */
  padding: 15px 0px;
  font-weight: bold;
  color: #2d3e52;
}
.spanicone1 {
  /* background-color: slategray; */
  font-size: 2rem;
  cursor: pointer;
  color: #fff;
}
/* style param */
.h1faq {
  background-color: #f5f5f5;
  font-size: 20px;
  margin-top: 20px;
  color: #2d3e52;
  width: 100%;
  display: flex;
  border-radius: 10px;
}
.h1faq a {
  width: 90%;
  // background-color: red;
  padding: 5px 10px;
}
.h1faq span {
  width: 10%;
  // background-color: #f5cf77;
  font-size: 1.2rem;
  padding: 5px 15px;
  color: #333;
  font-weight: 900;
  text-align: center;
  padding: 10px 0px;
}
a {
  color: #333;
}
.paramfaq {
  // background-color: #f5cf77;
  margin-top: 10px;
  text-align: justify;
  border: none;
}
li {
  list-style: none;
}
.bi-chevron-down,
.bi-chevron-up {
  //   transition: transform 0.5s ease;
  cursor: pointer;
}

@media (max-width: 376px) {
  .param1 {
    padding: 15px;
    text-align: justify;
  }
}
</style>
