<template>
  <div>
    <div class="container divcont">
      <div class="divicol">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide-to="0"
              class="active btn-ronde"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              class="btn-ronde"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              class="btn-ronde"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-6 colonne1">
                  <!-- Contenu de la première colonne -->
                  <h2>Conseils locaux</h2>
                  <p>
                    Malgré les avis de certains locaux et habitués affirmant
                    qu'un GPS n'est pas nécessaire aux Seychelles, il peut
                    néanmoins s'avérer précieux, en particulier pour les
                    nouveaux visiteurs.
                  </p>
                  <button class="button" @click="VoitureBtn">
                    Réserver maintenant
                  </button>
                </div>
                <div class="col-md-6 colonne1">
                  <!-- Contenu de la deuxième colonne -->
                  <div class="text-center">
                    <img :src="Gps1" alt="gps" />
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-6 colonne1">
                  <!-- Contenu de la première colonne -->
                  <h2>Utilité du GPS</h2>
                  <p>
                    Pour ceux découvrant les Seychelles pour la première fois,
                    un GPS peut se révéler particulièrement utile. En effet, dès
                    votre arrivée, disposer d'un moyen fiable de navigation peut
                    grandement simplifier le trajet de l'aéroport jusqu'à votre
                    lieu de séjour.
                  </p>
                  <button class="button" @click="VoitureBtn">
                    Réserver maintenant
                  </button>
                </div>
                <div class="col-md-6 colonne1">
                  <!-- Contenu de la deuxième colonne -->
                  <div class="text-center">
                    <img :src="Gps2" alt="gps" />
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-6 colonne1">
                  <!-- Contenu de la première colonne -->
                  <h2>Avantages</h2>
                  <p>
                    Aux Seychelles, toutes les locations de voitures effectuées
                    via notre site incluent un GPS gratuit. Cette inclusion
                    offre aux voyageurs un avantage pratique pour explorer
                    l'archipel en toute simplicité.
                  </p>
                  <button class="button" @click="VoitureBtn">
                    Réserver maintenant
                  </button>
                </div>
                <div class="col-md-6 colonne1">
                  <!-- Contenu de la deuxième colonne -->
                  <div class="text-center">
                    <img :src="Gps3" alt="gps" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Gps1 from "../../../public/image/gps/1.png";
import Gps2 from "../../../public/image/gps/2.png";
import Gps3 from "../../../public/image/gps/3.png";
import { useRouter } from "vue-router";

const router = useRouter();
const VoitureBtn = () => {
  router.push("/about");
};
</script>

<style lang="scss" scoped>
.divcont {
  //   padding: 10px 50px;
  margin-top: 80px;
}
.divicol {
  background-color: #f5f5f5;
  // background-color: red;
  border-radius: 18px;
}
.colonne1 {
  padding: 40px 40px;
}
.row {
  width: 80%;
  margin: 0 auto;
}
h2 {
  font-size: 25px;
}
p {
  text-align: justify;
  margin-top: 15px;
}
.button {
  border: none;
  padding: 10px 20px;
  background-color: #ffbf00;
  color: #fff;
  font-weight: 600;
  margin-top: 20px;
}
img {
  width: 90%;
}
.btn-ronde {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #ffbf00;
  border: 2px solid #fff;
}
@media only screen and (max-width: 573px) {
  .divcont {
    padding: 20px;
  }
  .carousel-control-next,
  .carousel-control-prev {
    display: none;
  }
}
@media only screen and (max-width: 380px) {
  .colonne1 {
    padding: 40px 0px;
  }
}
</style>
