<template>
  <div>
    <div className="bg-linear">
      <div className="red">
        <img :src="Red" alt="image" />
      </div>
      <div className="blue">
        <img :src="Blue" alt="image" />
      </div>
    </div>
  </div>
</template>
<script setup>
import Blue from "../../assets/eclipse-blue.webp";
import Red from "../../assets/eclipse-red.webp";
</script>
<style scoped lang="scss">
.bg-linear {
  opacity: 0.9;
  position: fixed;
  z-index: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  // background: aquamarine;
  width: 100%;
  height: 100vh;
}
.bg-linear .blue {
  left: -13%;
  top: 80px;
  height: 600px;
  width: 50%;
  position: absolute;
  // background: blue;
}
.bg-linear .red {
  bottom: -80px;
  right: -13%;
  height: 600px;
  width: 50%;
  position: absolute;
  // background:red;
}
.bg-linear img {
  width: 700px;
}
@media (max-width: 400px) {
  .bg-linear .blue,
  .bg-linear .red {
    width: 80%;
    top: 0px;
  }
  .bg-linear img {
    width: 500px;
    height: 800px;
    margin-left: -80px;
  }
}
</style>
