<template>
  <div class="div-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 div-cent">
          <div class="card mt-5">
            <h2>{{ $t("excellencevolant") }}</h2>
            <h6>
              {{ $t("vehiculehautgame") }}
            </h6>
            <p class="param-right">
              {{ $t("decouvexper") }}
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card mt-5">
            <img
              src="https://demo.xpeedstudio.com/carrental/wp-content/uploads/2020/06/car_image.jpg"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.div-header {
  margin-top: 120px;
}
h2 {
  color: #716d6e;
  font-size: 36px;
  font-weight: 900;
  line-height: 1.1em;
}
h6 {
  color: #716d6e;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.4em;
}
.param-right {
  color: #716d6e;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7em;
  margin: 0px 0px 10px 0px;
  text-align: justify;
  padding-right: 10px;
}
h6,
p {
  margin-top: 10px;
}
.div-cent {
  /* background: red; */
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.card {
  border: none !important;
  background: transparent;
}
</style>
