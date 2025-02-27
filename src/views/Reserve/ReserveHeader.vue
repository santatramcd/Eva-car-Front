<template>
  <div>
    <div class="head">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="h5">
              Complétez le formulaire suivant pour réserver votre voiture
            </h5>
          </div>
          <div class="col-md-6 divisquest">
            <ul class="d-flex">
              <a @click="home">
                <li class="li">ACCUEIL</li>
              </a>
              <a href="#">
                <li class="li">LOCATION DE VOITURES AU SEYCHELLES</li>
              </a>
              <a @click="contact">
                <li class="li1">CONTACTEZ-NOUS</li>
              </a>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const home = () => {
  router.push("/");
};
const contact = async () => {
  router.push("/contact");
};
</script>

<style scoped>
.head {
  width: 100%;
  background-color: #2d3e52;
  color: #fff;
}

.head a {
  color: #fff;
}

li {
  list-style: none;
}

.h5,
.li {
  /* background-color: aqua; */
  padding: 5px;
  margin-right: 5px;
}

.li {
  font-size: 12px;
  margin-top: 20px;
}

.h5 {
  margin-top: 15px;
  font-size: 1em;
}
.li1 {
  color: darkorange;
  font-size: 12px;
  margin-top: 25px;
}
</style>
