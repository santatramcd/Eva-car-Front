<template>
  <div>
    <div class="div-header">
      <div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 p-0">
              <div class="title-head">
                <h1>{{ $t("welcome") }}</h1>
                <p>{{ $t("remplir") }}</p>
              </div>
            </div>
            <div class="col-lg-6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.div-header {
  background-image: url("/public/image/car.jpg") !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* background-color: red; */
  width: 100%;
  /* min-height: 500px; */
  min-height: 600px;
  /* padding: 120px 0 80px; */
  position: relative;
  z-index: 10;
}
.title-head {
  background-color: rgba(11, 11, 11, 0.529);
  /* min-height: 320px; */
  min-height: 350px;
  /* padding: 10px 30px; */
  padding: 30px;
  display: flex;
  /* margin: 25px 0; */
  margin: 70px 0;
  justify-content: flex-start;
  align-content: space-around;
  flex-wrap: wrap;
  color: #fff;
}

.title-head h1 {
  text-transform: capitalize;
  font-size: 50px;
}
.title-head p {
  font-size: 32px;
  text-transform: capitalize;
}
@media (max-width: 765px) {
  .title-head h1 {
    font-size: 40px;
  }
  .title-head p {
    font-size: 27px;
  }
}
@media (max-width: 375px) {
  .title-head {
    margin: 40px 0;
  }
}
</style>
