<template>
  <div>
    <HomeHead />
    <Homeslider />
    <HomeDiv data-aos="fade-up" />
    <HomeCar data-aos="fade-up" />
    <HomegpsVue data-aos="fade-up" />
    <Home data-aos="fade-up" />
    <HomeTech data-aos="fade-up" />
    <Homelocat data-aos="fade-up" />
    <Homefaq />
    <Homeproduct data-aos="fade-up" />
    <Homemarque data-aos="fade-up" />
    <Maps data-aos="fade-up"/>
  </div>
</template>
<script setup>
import HomeHead from "../Home/HomeHead.vue";
import HomeTech from "../Home/HomeTechnology.vue";
import HomeDiv from "../Home/Homediv.vue/";
import Homeslider from "./Homeslider.vue";
import Homeproduct from "../Home/produit5.vue";
import Home from "../Home/Home6.vue";
import Homelocat from "../Home/location.vue";
import HomeCar from "../Home/HomeCar7.vue";
import HomegpsVue from "./Homegps.vue";
import Homemarque from "../Home/Homemarque.vue";
import Maps from "../contact/maps.vue";
import Homefaq from "./Homefaq.vue";
AOS.init({
  offset: 400,
  duration: 1000,
});
</script>
<style scoped lang="scss"></style>
