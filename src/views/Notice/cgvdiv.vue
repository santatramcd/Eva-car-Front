<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4">
          <h2 class="title-header">Conditions générales de vente</h2>
          <div class="divsearch">
            <h3 class="search-title">Recherche dans nos CGV</h3>
            <div class="divisionsear">
              <input
                type="text"
                class="form-control formcont"
                aria-label="Amount"
                placeholder="Faites votre recherche ici"
                v-model="searchQuery"
              />
              <span class="spanserch"><i class="bi bi-search"></i></span>
            </div>
          </div>
          <ul class="ulsearch">
            <li
              v-for="(item, index) in filteredDataWithTitle"
              :key="index"
              class="lisearch"
              :class="{ active: activeIndex === item.title }"
            >
              <a
                :href="'#' + item.title"
                @click.prevent="handleItemClick(item.title)"
              >
                {{ $t(item.title) }}
              </a>
            </li>
          </ul>
        </div>
        <!-- Contenu de la page avec les sections -->
        <div class="col-md-8">
          <div v-for="(item, index) in filteredData" :key="index">
            <h4 class="title-header" :id="item.title">{{ $t(item.title) || "" }}</h4>
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">{{ item.number }}</th>
                  <td>{{ $t(item.description) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const dataAuto = [
  {
    number: "1-1",
    title: "notice.généralités",
    description: `notice.1-1courtier`,
  },
  {
    number: "1-2",
    title: "",
    description: `notice.1-2services`,
  },
  {
    number: "1-3",
    title: "",
    description: `notice.1-3remise`,
  },
  {
    number: "1-4",
    title: "",
    description: `notice.1-4contrat`,
  },
  {
    number: "1-5",
    title: "",
    description: `notice.1-5reservation`,
  },
  {
    number: "1-6",
    title: "",
    description: `notice.1-6client`,
  },
  {
    number: "1-7",
    title: "",
    description: `notice.1-7agence`,
  },
  {
    number: "1-7-1",
    title: "",
    description: `notice.1-7-1totalité`,
  },
  {
    number: "1-7-2",
    title: "",
    description: `notice.1-7-2autre`,
  },
  {
    number: "1-7-3",
    title: "",
    description: `notice.1-7-3terme`,
  },
  {
    number: "1-7-4",
    title: "",
    description: `notice.1-7-4limite`,
  },
  {
    number: "1-8",
    title: "",
    description: `notice.1-8malheur`,
  },
  {
    number: "1-9",
    title: "",
    description: `notice.1-9possible`,
  },
  {
    number: "1-9-1",
    title: "",
    description: `notice.1-9-1annulations`,
  },
  {
    number: "2-1",
    title: "notice.2-condition",
    description: `notice.2-1notice`,
  },
  {
    number: "3-1",
    title: "notice.3-permis",
    description: `notice.3-1prise`,
  },
  {
    number: "3-2-1",
    title: "",
    description: `notice.3-2-1vehicule`,
  },
  {
    number: "3-2-2",
    title: "",
    description: `notice.3-2-2conducteurs`,
  },
  {
    number: "4-1",
    title: "notice.4-tarifs",
    description: `notice.4-1paiement`,
  },
  {
    number: "5-1",
    title: "notice.5-Assurance",
    description: `notice.5-1assurance`,
  },
  {
    number: "5-1-1",
    title: "",
    description: `notice.5-1-1dommages`,
  },
  {
    number: "5-1-2",
    title: "",
    description: `notice.5-1-2assurance`,
  },
];

const searchQuery = ref("");
const activeIndex = ref("");

const filteredData = computed(() => {
  return dataAuto.filter((item) =>
    item.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Filtrer uniquement les données avec un title non vide
const filteredDataWithTitle = computed(() => {
  return dataAuto.filter((item) => item.title);
});

// Gérer le clic sur un élément de la liste
const handleItemClick = (titleValue) => {
  activeIndex.value = titleValue;
  const element = document.getElementById(titleValue);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Suivi du défilement pour activer l'élément de la liste correspondant
const checkActiveSection = () => {
  const sections = document.querySelectorAll("h4");
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
      activeIndex.value = section.id;
    }
  });
};

// Écouter le défilement pour changer l'élément actif
onMounted(() => {
  window.addEventListener("scroll", checkActiveSection);
});
</script>


<style lang="scss" scoped>
th{
  min-width: 60px;
}
.title-header {
  font-size: 25px;
  color: #2d3e52;
  padding: 5px 20px;
}
.lisearch a{
  color: #2d3e52;
}
.active a {
  color: #4a9fef;
  // border-left: 1px solid #4a9fef;
  font-weight: 600;
}

.divsearch {
  background-color: #fff;
  padding: 20px;
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
li {
  list-style: none;
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
.divsearch h5 {
  background-color: #6dace6;
  font-size: 20px;
}
.divsearch p {
  background-color: cyan;
}
.table td {
  text-align: justify;
}
</style>
