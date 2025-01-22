<template>
  <div>
    <section id="faq" class="faq section">
      <div class="container-fluid">
        <div class="row gy-4">
          <div
            class="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1"
          >
            <div
              class="content px-xl-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3><span>{{ $t("Frequently") }}</span><strong> Questions</strong></h3>
              <p class="param-text">
                {{ $t("messagefaq") }}
              </p>
            </div>

            <div
              class="faq-container px-xl-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="faq-item">
                <p
                  class="param-div"
                  data-bs-toggle="collapse"
                  href="#Example"
                  role="button"
                  aria-expanded="false"
                  aria-controls="Example"
                >
                  <span class="span-icone">
                    <i class="faq-icon bi bi-question-circle"></i>
                  </span>
                  <a class="nav-link">
                    {{ $t("conditionlouerfaq") }}
                  </a>
                  <span class="span-icone-right">
                    <i class="bi bi-caret-down-fill"></i>
                  </span>
                </p>
                <div class="collapse" id="Example">
                  <div class="card card-body">
                    {{ $t("conditionlouerfaqrep") }}
                  </div>
                </div>
              </div>
              <!-- End Faq item-->

              <div class="faq-item">
                <p
                  class="param-div"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span class="span-icone">
                    <i class="faq-icon bi bi-question-circle"></i>
                  </span>
                  <a class="nav-link">
                    {{ $t("assurancefaq") }}
                  </a>
                  <span class="span-icone-right">
                    <i class="bi bi-caret-down-fill"></i>
                  </span>
                </p>
                <div class="collapse" id="collapseExample">
                  <div class="card card-body">
                    {{ $t("assurancefaqrep") }}
                  </div>
                </div>
              </div>
              <!-- End Faq item-->
              <div class="faq-item">
                <p
                  class="param-div"
                  data-bs-toggle="collapse"
                  href="#collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapse"
                >
                  <span class="span-icone">
                    <i class="faq-icon bi bi-question-circle"></i>
                  </span>
                  <a class="nav-link">
                    {{ $t("reservefaq") }}
                  </a>
                  <span class="span-icone-right">
                    <i class="bi bi-caret-down-fill"></i>
                  </span>
                </p>
                <div class="collapse" id="collapse">
                  <div class="card card-body">
                    {{ $t("reservefasrep") }}
                  </div>
                </div>
              </div>
              <!-- End Faq item-->
            </div>
          </div>

          <div class="col-lg-5 order-1 order-lg-2 div-img">
            <img
              src="https://themewagon.github.io/KnightOne/assets/img/faq.jpg"
              class="img-fluid"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="100"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.faq{
  padding: 50px 0;
  margin-top: 80px;
}
.param-div {
  background-color: #ffffff;
  position: relative;
  padding: 8px 20px;
  margin-bottom: 20px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  /* justify-content: space-between; */
}
.faq .content h3 {
  font-weight: 400;
  font-size: 34px;
}
.faq-item {
  margin-top: 20px;
}
.span-icone-right,
.span-icone {
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  padding: 10px 0;
  color: #ffbf00;
}
.span-icone-right{
  position: absolute;
  right: 20px;
}
.nav-link {
  color: #333;
}
.param-text{
  text-align: justify;
}
a:hover{
  color: #ffbf00;
}

</style>
