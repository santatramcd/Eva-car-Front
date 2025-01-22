<template>
  <div class="divmarque">
    <div class="container divcont">
      <h1 class="notmarq">{{ $t("Notremarque") }}</h1>
      <div class="division-grid">
        <!-- Slides originaux -->
        <div class="slide" v-for="(item, index) in slides" :key="index">
          <div class="card">
            <div class="peg">
              <img
                :src="item.src"
                :alt="item.alt"
                draggable="false"
                class="img-fluid imfluid"
                :title="item.title"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const slides = [
  {
    src: "https://d12ittivwictyd.cloudfront.net/images/as-seen-on/telegraph-travel.jpg",
    alt: "As Seen On",
    title: "Telegraph travel",
  },
  {
    src: "https://d12ittivwictyd.cloudfront.net/images/as-seen-on/merian.png",
    alt: "Merian",
    title: "Merian",
  },
  {
    src: "https://d12ittivwictyd.cloudfront.net/images/as-seen-on/petit-fute.png",
    alt: "Petit futé",
    title: "Petit futé",
  },
  {
    src: "https://d12ittivwictyd.cloudfront.net/images/as-seen-on/gq-za.png",
    alt: "GQ South Africa",
    title: "GQ South Africa",
  },
  {
    src: "https://d12ittivwictyd.cloudfront.net/images/as-seen-on/trustpilot.png",
    alt: "Trustpilot",
    title: "Trustpilot",
  },
  {
    src: "https://d12ittivwictyd.cloudfront.net/images/as-seen-on/routard.png",
    alt: "Routard",
    title: "Routard",
  },
];
</script>
<style lang="scss" scoped>
.divmarque {
  background-color: #fff;
  margin-top: 100px;
  margin-bottom: 80px;
}
.divcont {
  // background-color: #74881c;
  padding: 0px 50px;
}
.notmarq {
  /* background-color: #74881c; */
  padding: 20px 0px;
  font-size: 20px;
  color: #716d6e;
}
.peg {
  display: flex;
  height: 100px;
  border-radius: 10px;
  opacity: 0.5;
  filter: grayscale(100%);
  // background-color: red;
  flex-wrap: wrap;
  align-content: center;
}
.peg:hover {
  opacity: 1;
  filter: none;
}

.peg img {
  width: 80%;
  //   height: 100px;
}
.imfluid {
  border-radius: 5px;
}
.division-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-flow: row;
  gap: 20px;
}
.card {
  border: none;
}

</style>
