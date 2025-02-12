<template>
  <div class="div-col">
    <div class="container">
      <div class="text-center">
        <h1 class="head-car">{{$t("tarifsemaine")}}</h1>
        <p class="param">{{$t("profiteprice")}}</p>
        <span class="span-hr"></span>
      </div>
    </div>
    <div>
      <!-- <div class="container">
        <div class="row">
          <div
            class="col-lg-4 card div-hover"
            v-for="(item, index) in filteredData"
            :key="index"
          >
            <div class="div-bord-auto">
              <div class="div-im-sh">
                <img class="img" :src="item.picture" alt="images" />
              </div>
              <div class="div-item">
                <h1 class="title-item">{{ item.title }}</h1>
                <span class="span-dtl"> {{ item.details }} </span>
                <span class="span-hr-auto"></span>
                <div>
                  <p>
                    {{$t("price")}} <span>5 {{$t("jours")}}</span> :
                    <span class="prom-price">€220.00</span>
                    <span class="span-price">
                      {{ item.price }}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
.div-col {
  margin-top: 120px;
}
.param-prod {
  font-size: 20px;
  text-align: justify;
}
.img-anime {
  width: 20%;
}
.title-item {
  font-size: 25px;
  font-weight: bolder;
}
.card {
  border: none;
  margin-top: 50px;
}
.div-bord-auto{
    padding: 25px;
    border: 1px solid #d5d5d5;
    text-align: center;
}
.div-im-sh {
  /* height: 270px; */
}
.div-item {
  /* background-color: aqua; */
  padding: 10px 0;
}
.span-hr-auto {
  width: 80%;
  height: 1px;
  background-color: #c9c9c9;
  display: inline-block;
  margin: 10px 0;
}
.span-price {
  font-size: 25px;
  color: #ffbf00;
  font-weight: 600;
}
.div-hover {
  transition: transform 0.7s cubic-bezier(0.2, 1, 0.2, 1);
  transform: translateY(0);
}
.div-hover:hover {
  transform: translateY(-10px);
}
.prom-price {
  text-decoration: line-through;
  color: #6c757d;
  padding: 0 8px;
}
.img {
  /* width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  height: 100%; */
}
.head-car {
  color: #716d6e;
  margin: 0px 0px 15px 0px;
  font-size: 46px;
  font-weight: 900;
  line-height: 1.1em;
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
h1,
p,
span{
    color: #716d6e;
    text-transform: capitalize;
}
.span-dtl{
    text-transform: uppercase;
}
</style>
