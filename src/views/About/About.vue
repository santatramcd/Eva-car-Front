<template>
    <div>
        <AboutHead/>
        <AboutCat/>
        <div class="division">
            <HomeAv/>
        </div>
    </div>
</template>
<script setup>
import AboutHead from "./AboutHead.vue";
import AboutCat from "./Aboutcateg.vue";
import HomeAv from "../Home/Homediv.vue";
</script>
<style scoped>
.division{
    background-color: #bd162d;
    color:#fff;
    margin-bottom: -80px;
}
</style>
