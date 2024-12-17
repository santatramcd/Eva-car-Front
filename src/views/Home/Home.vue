<template>
  <div>
    <HomeHead />
    <Homeslider />
    <HomeDiv />
    <!-- <HomeCar /> -->
    <!-- <Home /> -->
    <!-- <HomeTech /> -->
    <!-- <Homelocat /> -->
    <Homeproduct />
    <!-- <Homemarque /> -->
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
import Homemarque from "../Home/Homemarque.vue";
AOS.init({
  offset: 400,
  duration: 1000,
});
</script>
<style scoped lang="scss"></style>
