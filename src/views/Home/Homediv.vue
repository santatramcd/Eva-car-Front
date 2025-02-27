<template>
  <div>
    <div class="container divcont">
      <div class="division-grid">
        <div class="card">
          <div class="stepBox text-center">
            <h1><i class="bi bi-shield-check"></i></h1>
            <p>{{$t("assurrisq")}}</p>
          </div>
        </div>

        <div class="card">
          <div class="stepBox text-center">
            <h1><i class="bi bi-truck"></i></h1>
            <p>{{$t("livraison")}}</p>
          </div>
        </div>

        <div class="card">
          <div class="stepBox text-center">
            <h1><i class="bi bi-geo-alt"></i></h1>
            <p>{{$t("gpsgratuit")}}</p>
          </div>
        </div>

        <div class="card">
          <div class="stepBox text-center">
            <h1><i class="bi bi-speedometer"></i></h1>
            <p>{{$t("kilillimité")}}</p>
          </div>
        </div>

        <div class="card">
          <div class="stepBox text-center">
            <h1><i class="bi bi-person-plus-fill"></i></h1>
            <p>{{$t("conductadd")}}</p>
          </div>
        </div>

        <div class="card">
          <div class="stepBox text-center">
            <h1><i class="bi bi-clock"></i></h1>
            <p>{{$t("Annulation")}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.divcont {
  margin-top: 120px;
}
.row {
  align-items: stretch;
}
.stepBox {
  /* background: #2b2a2a; */
  padding: 18px 12px;
  border-radius: 12px;
  height: 100%;
  border: 1px solid #e3e3e3;
}
p {
  color: #716d6e;
  font-weight: 500;
  font-size: 14px;
}
h1 i {
  font-size: 4rem;
  /* color: #fff; */
  color: #ffbf00;
}
.division-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-flow: row;
  gap: 20px;
}
.card {
  border: none;
  background: transparent;
}
</style>
