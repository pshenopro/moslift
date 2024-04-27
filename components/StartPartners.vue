<script lang="ts" setup>
  const slides = [
    'partners-modtfil.png',
    'partners-eco.png',
    'partners-donstroy.png',
    'partners-sawatzky.png',
    'partners-flet.png',
    'partners-rosatom.png',
    'partners-medsi.png',
    'partners-monarh.png',
    'partners-city21.png',
    'fond-project.png',
    'klinika-fomina.png',
    'school.png',
    'oms.png',
    'monastery.png',
    '3gs.png',
    'city-xxi.png',
    'smart.png'

  ]
</script>

<template>
  <section class="partners">
    <div class="main-wrapper">
      <h2>Наши партнёры</h2>

      <Swiper
          :modules="[SwiperAutoplay]"
          :slides-per-view="2"
          :loop="true"
          :effect="'creative'"
          :autoplay="{
            delay: 1500,
            disableOnInteraction: true,
        }"
          :breakpoints="{
          991: {
            slidesPerView: 7
          },
          541: {
            slidesPerView: 4
          },
          430: {
            slidesPerView: 3
          },
          320: {
            slidesPerView: 2
          },
        }"
          :creative-effect="{
            prev: {
                shadow: false,
                translate: ['-20%', 0, -1],
            },
            next: {
                translate: ['100%', 0, 0],
            },
        }"
      >
        <SwiperSlide
            class="swiper-slide"
            v-for="(slide, i) in slides"
            :key="i"
        >
          <img :src="'/img/' + slide" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>


<style scoped>
  .partners {
    padding: 64px 0;
    width: 100%;

    h2 {
      padding-bottom: 64px;
      font-size: 36px;
      font-weight: 800;
    }

    @media (max-width: 540px) {
      padding: 32px 0;

      h2 {
        padding-bottom: 46px;
      }

      :deep(.swiper-wrapper) {
        align-items: center;
      }
    }
  }
</style>
