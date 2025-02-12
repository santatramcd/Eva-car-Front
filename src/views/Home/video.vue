<template>
  <div>
    <div class="div-margin">
      <!-- About Start -->
      <div class="container-fluid py-5 about bg-light">
        <div class="container py-5">
          <div class="row g-5 align-items-center">
            <div class="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div class="video border">
                <button
                  type="button"
                  class="btn btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/FmvgQxwsCAY"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
              </div>
            </div>
            <div class="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
              <h4
                class="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius"
              >
                À propos de nous
              </h4>
              <h1 class="text-dark mb-4 display-5">
                Louez votre voiture avec Eva Car Rental aux Seychelles
              </h1>
              <p class="text-dark mb-4">
                Chez Eva Car Rental, nous offrons une expérience de location de
                voiture exceptionnelle aux visiteurs des Seychelles. Que vous
                soyez ici pour des vacances ou pour affaires, notre flotte de
                véhicules bien entretenus vous permettra de découvrir ces îles
                paradisiaques à votre rythme.
              </p>
              <div class="row mb-4">
                <div class="col-lg-6">
                  <h6 class="mb-3">
                    <i class="bi bi-check-circle-fill me-2"></i>Véhicules
                    récents et fiables
                  </h6>
                  <h6 class="mb-3">
                    <i class="bi bi-check-circle-fill me-2 text-primary"></i
                    >Service client attentionné
                  </h6>
                  <h6 class="mb-3">
                    <i class="bi bi-check-circle-fill me-2 text-secondary"></i
                    >Tarifs compétitifs
                  </h6>
                </div>
                <div class="col-lg-6">
                  <h6 class="mb-3">
                    <i class="bi bi-check-circle-fill me-2"></i>Assurance
                    incluse
                  </h6>
                  <h6 class="mb-3">
                    <i class="bi bi-check-circle-fill me-2 text-primary"></i
                    >Flexibilité des horaires
                  </h6>
                  <h6>
                    <i class="bi bi-check-circle-fill me-2 text-secondary"></i
                    >Livraison et reprise du véhicule
                  </h6>
                </div>
              </div>
              <a href="" class="btn btn-primary px-5 py-3 btn-border-radius" @click="about"
                >Plus d'informations</a
              >
            </div>
          </div>
        </div>
      </div>
      <!-- Modal Video -->
      <div
        class="modal fade"
        id="videoModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content rounded-0">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Youtube Video</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <!-- 16:9 aspect ratio -->
              <div class="ratio ratio-16x9">
                <iframe
                  class="embed-responsive-item"
                  src=""
                  id="video"
                  allowfullscreen
                  allowscriptaccess="always"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- About End -->
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

onMounted(() => {
  let $videoSrc;
  const btnPlay = document.querySelectorAll(".btn-play");
  const videoModal = document.getElementById("videoModal");
  const video = document.getElementById("video");

  btnPlay.forEach((btn) => {
    btn.addEventListener("click", () => {
      $videoSrc = btn.dataset.src;
    });
  });

  videoModal.addEventListener("shown.bs.modal", () => {
    video.src = `${$videoSrc}?autoplay=1&amp;modestbranding=1&amp;showinfo=0`;
  });

  videoModal.addEventListener("hide.bs.modal", () => {
    video.src = "";
  });
});

const router = useRouter();
const about = async () => {
  router.push("/about");
};
</script>

<style scoped lang="scss">
.div-margin {
  margin-top: 120px;
}
/*** About Start ***/
.video {
  position: relative;
  height: 100%;
  min-height: 400px;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url(https://themewagon.github.io/carrent/images/img_3.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
}

.video .btn-play {
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-sizing: content-box;
  display: block;
  width: 32px;
  height: 44px;
  border-radius: 50%;
  border: none;
  outline: none;
  padding: 18px 20px 18px 28px;
}

.video .btn-play:before {
  content: "";
  position: absolute;
  z-index: 0;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: block;
  width: 100px;
  height: 100px;
  background: #ffbf00;
  border-radius: 50%;
  animation: pulse-border 1500ms ease-out infinite;
}

.video .btn-play:after {
  content: "";
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: block;
  width: 100px;
  height: 100px;
  background: #ffbf00;
  border-radius: 50%;
  transition: all 200ms;
}

.video .btn-play img {
  position: relative;
  z-index: 3;
  max-width: 100%;
  width: auto;
  height: auto;
}

.video .btn-play span {
  display: block;
  position: relative;
  z-index: 3;
  width: 0;
  height: 0;
  border-left: 32px solid white;
  border-top: 22px solid transparent;
  border-bottom: 22px solid transparent;
}

@keyframes pulse-border {
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
}

#videoModal {
  z-index: 99999;
}

#videoModal .modal-dialog {
  position: relative;
  max-width: 800px;
  margin: 60px auto 0 auto;
}

#videoModal .modal-body {
  position: relative;
  padding: 0px;
}

#videoModal .close {
  position: absolute;
  width: 30px;
  height: 30px;
  right: 0px;
  top: -30px;
  z-index: 999;
  font-size: 30px;
  font-weight: normal;
  color: #ffffff;
  background: #000000;
  opacity: 1;
}

.video.border {
  border-radius: 50% 20% / 10% 40%;
}

.about {
  background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url(https://themewagon.github.io/carrent/images/hero_2.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
/*** About End ***/

.title-border-radius {
  border-radius: 10% 30%;
}

.text-primary {
  color: #ffbf00 !important;
}
.btn-primary {
  background-color: #ffbf00;
  border: none;
}
.border-primary {
  border-color: #ffbf00 !important;
}
.display-5 {
  font-weight: 600;
  color: #393d72 !important;
}
p {
  text-align: justify;
}
@media (max-width: 400px) {
    .wow{
        padding: 0;
    }
}
</style>
