<template>
  <div class="div-margin">
    <div class="text-center container">
      <h1 class="head-car">{{ $t("plusservice") }}</h1>
      <p class="param">{{ $t("Unaccomp") }}</p>
      <span class="span-hr"></span>
    </div>
    <div class="container mt-5">
      <div class="division-grid">
        <div class="card">
          <span class="span-icone"><i class="bi bi-geo-alt-fill"></i></span>
          <h6>{{ $t("gpsgratuit") }}</h6>
          <p>
            {{ $t("gpsoffert") }}
          </p>
        </div>
        <div class="card">
          <span class="span-icone"><i class="bi bi-car-front"></i></span>
          <h6>{{ $t("flexibAssur") }}</h6>
          <p>
            {{ $t("auccunfrais") }}
          </p>
        </div>
        <div class="card">
          <span class="span-icone"><i class="bi bi-person"></i></span>
          <h6>{{ $t("choixpers") }}</h6>
          <p>
            {{ $t("vouspouvezreserve") }}
          </p>
        </div>
        <div class="card">
          <span class="span-icone"><i class="bi bi-taxi-front-fill"></i></span>
          <h6>{{ $t("condsanssurp") }}</h6>
          <p>
            {{ $t("pasdefrais") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.div-margin {
  margin-top: 120px;
}
h2 {
  padding: 40px 0;
  /* background-color: red; */
}
.division-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-flow: row;
  gap: 20px;
}
.span-icone {
  width: 60px;
  height: 60px;
  background: #f4f4f4;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  font-size: 1.8rem;
  color: #ffbf00;
  justify-content: center;
  border-radius: 50%;
}
.card {
  padding: 15px;
  background: transparent;
}
h6 {
  margin-top: 15px;
  font-weight: bolder;
}
p {
  text-align: justify;
}
.head-car {
  color: #716d6e;
  margin: 0px 0px 15px 0px;
  font-size: 46px;
  font-weight: 900;
  line-height: 1.1em;
}
h6,
p {
  color: #716d6e;
}
.span-hr {
  width: 200px;
  height: 5px;
  background-color: #ffbf00;
  display: inline-block;
}
.param {
  color: #716d6e;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4em;
  text-align: center;
  margin: 0px 0px 15px 0px;
}
</style>
