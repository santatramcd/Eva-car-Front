<template>
  <div class="div-margin">
    <div class="div-back">
      <div class="container">
        <div class="row al-cent">
          <div class="col-lg-6">
            <h1>{{ $t("livrhotel") }}</h1>
            <p>
              {{ $t("Nouspouvonslivrer") }}
            </p>
          </div>
          <div class="col-lg-6 div-cent">
            <div class="divisionseardate">
              <input
                type="email"
                class="formcont"
                placeholder="Enter Your Email Address"
              />
              <button class="spandate">{{ $t("send") }}</button>
            </div>
          </div>
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
.div-back {
  background-color: #ffbf00;
  padding: 80px 0;
}
.divisionseardate {
  position: relative;
  margin: 15px 0px;
  top: -15px;
  bottom: 0px;
}
.spandate {
  font-size: 1rem;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 75%;
  width: 25%;
  height: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: none;
}
input {
  outline: none;
  border: none;
}
.al-cent {
  display: flex;
  align-items: center;
}
.formcont {
  /* border-radius: 8px; */
  height: 50px;
  width: 100%;
  padding: 10px;
}
.formcont::-webkit-calendar-picker-indicator {
  position: absolute;
  z-index: 20;
  cursor: pointer;
  /* left: 15px; */
  /* font-size: 3rem; */
  opacity: 0;
  width: 100%;
}
.div-cent {
  height: 50px;
}
h1 {
  font-size: 30px;
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
}
p {
  color: #716d6e;
  font-size: 18px;
  font-weight: 400;
  /* text-transform: uppercase; */
  line-height: 1.1em;
  text-align: justify;
}
</style>
