<template>
  <div class="container">
    <div class="nonloop-block-13 owl-carousel row">
      <div
        class="col-lg-4 div-hover item-1"
        v-for="(item, index) in filteredData"
        :key="index"
      >
        <div class="item-1-contents card">
          <div class="text-center">
            <a href="#" class="a-img"
              ><img :src="item.picture" alt="Image" class="img-fluid"
            /></a>
            <h3>
              <a href="#" class="titre-voiture">{{ item.title }}</a>
            </h3>
            <div class="rating">
              <span class="text-warning"><i class="bi bi-star-fill"></i></span>
              <span class="text-warning"><i class="bi bi-star-fill"></i></span>
              <span class="text-warning"><i class="bi bi-star-fill"></i></span>
              <span class="text-warning"><i class="bi bi-star-fill"></i></span>
              <span class="text-warning"><i class="bi bi-star-fill"></i></span>
            </div>
            <div class="rent-price">
              <span>{{ item.price }}/</span>day
            </div>
          </div>
          <ul class="specs">
            <li>
              <span>Doors</span>
              <span class="spec">4</span>
            </li>
            <li>
              <span>Seats</span>
              <span class="spec">5</span>
            </li>
            <li>
              <span>Transmission</span>
              <span class="spec">{{ item.details }}</span>
            </li>
            <li>
              <span>Minium age</span>
              <span class="spec">18 years</span>
            </li>
          </ul>
          <div class="d-flex action">
            <a href="contact.html" class="btn btn-primary">
              <router-link class="nav-link col-white" to="/reserve"
                >Rent Now</router-link
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const data = ref([
  {
    title: "Suzuki Alto",
    details: "Manual",
    price: "€143.50",
    picture: `https://d12ittivwictyd.cloudfront.net/images/cars/suzuki-alto.png`,
  },
  {
    title: "Suzuki Alto K10",
    details: "Automatic",
    price: "€143.50",
    picture: `https://d12ittivwictyd.cloudfront.net/images/cars/suzuki-alto-k10.png`,
  },
  {
    title: "Kia Picanto",
    details: "Automatic",
    price: "€172.35",
    picture: `https://d12ittivwictyd.cloudfront.net/images/cars/kia-picanto.png`,
  },
  {
    title: "Suzuki Spresso",
    details: "Manual",
    price: "€172.35",
    picture: `https://d12ittivwictyd.cloudfront.net/images/cars/suzuki-spresso.png`,
  },
  {
    title: "Mitsubishi Mirage",
    details: "Automatic",
    price: "€172.35",
    picture: `https://d12ittivwictyd.cloudfront.net/images/cars/mitsubishi-mirage-2014.png`,
  },
  {
    title: "Renault Kwid Climber",
    details: "Automatic",
    price: "€172.35",
    picture: `https://d12ittivwictyd.cloudfront.net/images/cars/renault-kwid-climber.png`,
  },
]);
const filteredData = ref(data.value);
</script>
<style scoped lang="scss">
.item-1 .item-1-contents {
  padding: 20px;
  background: #fff;
}
.item-1 .item-1-contents h3 {
  font-size: 18px;
}
.item-1 .item-1-contents .rent-price > span {
  font-size: 1.7rem;
}
.item-1 .item-1-contents ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.item-1 .item-1-contents ul li {
  margin-bottom: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid #efefef;
  display: block;
  position: relative;
}
.item-1 .item-1-contents ul li .spec {
  position: absolute;
  right: 0;
}
.item-1 .item-1-contents ul li:last-child {
  border-bottom: none;
}
.item-1 .item-1-contents .action {
  margin-top: 20px;
}
.card {
  //   border: none;
  margin-top: 30px;
}
.div-hover {
  transition: transform 0.7s cubic-bezier(0.2, 1, 0.2, 1);
  transform: translateY(0);
}
.div-hover:hover {
  transform: translateY(-10px);
}
img {
  display: block;
  width: 65%;
}
.a-img {
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.btn-primary {
  background-color: #ffbf00;
  border: none;
}
.rating {
  display: flex;
  gap: 5px;
  justify-content: center;
}
.titre-voiture {
  color: #007bff;
}
</style>
