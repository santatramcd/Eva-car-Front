<template>
  <div>
    <HomeHead />
    <Homeslider />
    <Bglinear />
    <HomeDiv data-aos="fade-up" />
    <Video data-aos="fade-up" />
    <HomeCar data-aos="fade-up" />
    <HomegpsVue data-aos="fade-up" />
    <Home data-aos="fade-up" />
    <HomeTech data-aos="fade-up" />
    <Homelocat data-aos="fade-up" />
    <Homefaq />
    <Homeproduct data-aos="fade-up" />
    <Voiture data-aos="fade-up" />
    <Homemarque data-aos="fade-up" />
  </div>
</template>
<script setup>
import HomeHead from "./HomeHead.vue";
import HomeTech from "./HomeTechnology.vue";
import HomeDiv from "./Homediv.vue/";
import Homeslider from "./Homeslider.vue";
import Homeproduct from "./produit5.vue";
import Home from "./Home6.vue";
import Homelocat from "./location.vue";
import HomeCar from "./HomeCar7.vue";
import HomegpsVue from "./Homegps.vue";
import Homemarque from "./Homemarque.vue";
import Homefaq from "./Homefaq.vue";
import Video from "./video.vue";
import Voiture from "./voiture.vue";
import Bglinear from "./Bglinear.vue";
AOS.init({
  offset: 400,
  duration: 1000,
});
</script>
<style scoped lang="scss"></style>
