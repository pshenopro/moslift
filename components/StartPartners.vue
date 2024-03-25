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
    'partners-city21.png'
  ]
</script>

<template>
  <section class="partners">
    <div class="main-wrapper">
      <h2>Наши партнёры</h2>

      <Swiper
          :modules="[SwiperAutoplay]"
          :slides-per-view="7"
          :effect="'creative'"
          :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
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
  }
</style>
