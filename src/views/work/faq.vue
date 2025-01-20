<template>
  <div>
    <div class="container mt-5">
      <div class="row division-position">
        <div class="col-md-4">
          <div class="divsearch">
            <h3 class="search-title">{{ $t("recherchenotrefaq") }}</h3>
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
            <li class="lisearch">{{ $t("systresenligne") }}</li>
            <li class="lisearch">{{ $t("accidentpannes") }}</li>
            <li class="lisearch">{{ $t("reglecircrout") }}</li>
            <li class="lisearch">{{ $t("politiqueassresp") }}</li>
            <li class="lisearch">{{ $t("tarifcondloc") }}</li>
            <li class="lisearch">{{ $t("condpaiement") }}</li>
            <li class="lisearch">{{ $t("aproposEvacar") }}</li>
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
                {{ $t("versionadaptée") }}
              </p>
            </div>
            <div class="div3">
              <span class="spanicone1"
                ><i class="bi bi-x" @click="handleClick"></i
              ></span>
            </div>
          </div>

          <div class="res-position"></div>

          <div
            class="container p-0"
            v-for="(item, index) in filteredData"
            :key="index"
          >
            <h4>{{ $t(item.h1) }}</h4>
            <p class="h1faq" @click="toggleIconNext(index)">
              <a
                data-bs-toggle="collapse"
                :href="'#collapseExample' + index"
                role="button"
                :aria-expanded="isIconChanged[index] ? 'true' : 'false'"
                :aria-controls="'collapseExample' + index"
              >
                {{ $t(item.title) }}
              </a>
              <span v-if="!isIconChanged[index]">
                <i class="bi bi-chevron-down"></i>
              </span>
              <span v-else><i class="bi bi-chevron-up"></i></span>
            </p>
            <div
              :class="{
                collapse: isIconChanged[index],
                show: !isIconChanged[index],
              }"
              :id="'collapseExample' + index"
            >
              <div
                class="card card-body paramfaq"
                v-html="$t(item.message)"
              ></div>
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
    h1: "faq.systemReservation",
    title: "faq.howToReserve",
    message: "faq.reservationDetails",
  },
  {
    h1: "",
    title: "faq.modepaiement",
    message: "faq.acceptdiff",
  },
  {
    h1: "",
    title: "faq.1-3obtenirvoiture",
    message: "faq.modelevoiture",
  },
  {
    h1: "",
    title: "faq.1-4duréminres",
    message: `faq.duréresmin`,
  },
  {
    h1: "",
    title: "faq.1-5ajoutoption",
    message: `faq.ajouteroption`,
  },
  {
    h1: "",
    title: "faq.1-6optionprem",
    message: `faq.voitureflotte`,
  },
  {
    h1: "",
    title: "faq.1-7conditionannulation",
    message: `faq.annulereserv`,
  },
  {
    h1: "faq.2-accidentspannes",
    title: "faq.2-1implisueaccident",
    message: `faq.Encasaccidents`,
  },
  {
    h1: "",
    title: "faq.2-2panne",
    message: `faq.mettonslocations`,
  },
  {
    h1: "faq.3-circulationroutiere",
    title: "faq.3-1circulationresp",
    message: `faq.ileseychelles`,
  },
  {
    h1: "",
    title: "faq.3-2condinternational",
    message: `faq.touristesSeychelles`,
  },
  {
    h1: "faq.4-Politiqueassur",
    title: "faq.4-1assinclu",
    message: `faq.assuremultirisque`,
  },
  {
    h1: "",
    title: "faq.4-2franchise",
    message: `faq.procedurereservation`,
  },
  {
    h1: "",
    title: "faq.4-3garentie",
    message: `faq.vehicleoptassur`,
  },
  {
    h1: "",
    title: "faq.4-4annulation",
    message: `faq.annulerassurance`,
  },
];

const isIconChanged = ref(Array(dataAuto.length).fill(false));
const searchQuery = ref("");

const filteredData = computed(() => {
  return dataAuto.filter((item) =>
    item.message.toLowerCase().includes(searchQuery.value.toLowerCase())
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
.division-position {
  position: relative;
  // background-color: red;
}
.res-position {
  height: 160px;
  // background-color: red;
  display: none;
}
h4 {
  padding: 10px;
}
@media (max-width: 768px) {
  .ulsearch {
    display: none;
  }
  .res-position {
    display: flex;
  }
  .divsearch {
    position: absolute;
    top: 185px;
    width: 95%;
    margin-bottom: 100px;
    // background: red;
  }
  .div3 {
    display: none;
  }
}

@media (max-width: 376px) {
  .param1 {
    padding: 15px;
    text-align: justify;
  }
}
</style>
