<script setup>
import Navbar from './components/Display/Navbar.vue';
import Footer from './components/Display/Footer.vue';
</script>

<template>
  <div>
    <Navbar />
    <router-view v-slot="{ Component }">
      <transition appear name="fade-page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer/>
  </div>
</template>

<style scoped lang="scss">

</style>
