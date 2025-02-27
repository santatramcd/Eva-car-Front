<template>
  <div>
    <div className="bg-linear">
      <div className="blue">
        <img
          src="https://santatra-michado.vercel.app/assets/eclipse-red-KUx1m6La.webp"
          alt="image"
        />
      </div>
      <div className="red">
        <img
          src="https://santatra-michado.vercel.app/assets/eclipse-blue-tXu57pkr.webp"
          alt="image"
        />
      </div>
    </div>
  </div>
</template>
<script setup></script>
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
.bg-linear .red {
  left: -13%;
  top: 80px;
  height: 600px;
  width: 50%;
  position: absolute;
  // background:red;
}
.bg-linear .blue {
  bottom: -80px;
  right: -13%;
  height: 600px;
  width: 50%;
  position: absolute;
  // background: blue;
}
.bg-linear img {
  width: 700px;
}
@media (max-width: 400px) {
  .bg-linear .red,
  .bg-linear .blue {
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
