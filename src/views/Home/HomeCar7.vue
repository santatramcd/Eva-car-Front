<template>
  <div class="div-mar-tp">
    <div class="container text-center">
      <h1 class="head-car">{{ $t("prqlouervoit") }}</h1>
      <p class="param">
        {{ $t("vousappreci") }}
      </p>
      <span class="span-hr"></span>
    </div>
    <!--  -->
    <div class="container">
      <div class="row">
        <div class="col-lg-6 card-division">
          <div class="card-icn">
            <div class="div-flex">
              <span class="span-icn"
                ><i class="bi bi-wrench-adjustable"></i
              ></span>
              <h2 class="head-h2">{{ $t("expfac") }}</h2>
            </div>
            <div>
              <p class="param-icn">
                {{ $t("utilvoit") }}
              </p>
            </div>
          </div>
        </div>
        <!-- 2 -->
        <div class="col-lg-6 card-division">
          <div class="card-icn">
            <div class="div-flex">
              <span class="span-icn"><i class="bi bi-gift"></i></span>
              <h2 class="head-h2">{{ $t("expers") }}</h2>
            </div>
            <div>
              <p class="param-icn">
                {{ $t("pourexp") }}
              </p>
            </div>
          </div>
        </div>
        <!-- 3 -->
        <div class="col-lg-6 card-division">
          <div class="card-icn">
            <div class="div-flex">
              <span class="span-icn"><i class="bi bi-send-fill"></i></span>
              <h2 class="head-h2">{{ $t("Acclieu") }}</h2>
            </div>
            <div>
              <p class="param-icn">
                {{ $t("psblacc") }}
              </p>
            </div>
          </div>
        </div>
        <!-- 4 -->
        <div class="col-lg-6 card-division">
          <div class="card-icn">
            <div class="div-flex">
              <span class="span-icn"><i class="bi bi-bus-front"></i></span>
              <h2 class="head-h2">{{ $t("transimple") }}</h2>
            </div>
            <div>
              <p class="param-icn">
                {{ $t("gracevoit") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>
<script setup></script>
<style scoped>
.div-mar-tp {
  margin-top: 120px;
}
.head-car {
  color: #716d6e;
  margin: 0px 0px 15px 0px;
  font-size: 46px;
  font-weight: 900;
  line-height: 1.1em;
}
.param {
  color: #716d6e;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4em;
  margin: 0px 0px 15px 0px;
}
.span-hr {
  width: 200px;
  height: 5px;
  background-color: #ffbf00;
  display: inline-block;
}
.span-icn {
  background: #ffbf00;
  width: 40px;
  height: 40px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  color: #fff;
  font-size: 1.2rem;
}
.head-h2 {
  margin: 5px 0px 30px 0px;
  padding: 0px 0px 0px 0px;
  color: #716d6e;
  font-size: 30px;
  font-weight: 900;
  line-height: 1.1em;
}
.param-icn {
  color: #716d6e;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7em;
  text-align: justify;
}
/* .card-icn {
  background-color: #ededed;
  padding: 30px;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-color: rgba(2, 1, 1, 0);
  border-radius: 0px 0px 0px 0px;
  margin-top: 30px;
} */
.card-icn {
  background-color: #f5f5f5;
  padding: 30px;
  border: 1px solid rgba(2, 1, 1, 0);
  border-radius: 0px;
  margin-top: 30px;
  display: flex; /* S'assurer que le contenu s'étire */
  flex-direction: column; /* Disposer le contenu verticalement */
  justify-content: space-between; /* Équilibrer l'espacement */
  /* min-height: 100%; */
  box-sizing: border-box; /* Inclure les bordures et le padding */
  height: 100%;
}

.card-division {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  /* word-wrap: break-word; */
  /* background-color: #fff; */
  background-clip: border-box;
  /* border: 1px solid rgba(0, 0, 0, 0.125); */
  border-radius: 0.25rem;
}

.div-flex {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-content: center;
}
</style>
