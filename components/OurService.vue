<script lang="ts" setup>
import { UslugiList } from '/constants'
</script>

<template>
  <section id="uslugi" class="main-wrapper uslugi-block">
    <h2>Наши услуги</h2>

    <Swiper
        :modules="[SwiperAutoplay]"
        :slides-per-view="3"
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
          v-for="(slide, i) in UslugiList"
          :key="i"
      >
        <img :src="'/img/uslugi/' + slide.imgId[0]" alt="" />
        <NuxtLink :to="slide.path" class="slide-link">{{ slide.title }}</NuxtLink>
      </SwiperSlide>
    </Swiper>
  </section>
</template>


<style scoped>
  .uslugi-block {
    padding: 64px 0;

    h2 {
      font-size: 36px;
      padding-bottom: 48px;
      color: var(--title-text-color)
    }

    .swiper-slide {
      cursor: pointer;
      img {
        width: 350px;
        height: 216px;
        object-fit: cover;
        border-radius: 6px;
        overflow: hidden;
      }

      .slide-link {
        display: block;
        max-width: 350px;
        padding-top: 20px;
        font-size: 20px;
        line-height: 1.3;
        font-weight: 600;
        color: var(--title-text-color);
        cursor: pointer;
        text-decoration: none;
        transition: all .3s;

        &:hover {
          color: #6366F1
        }
      }
    }

    :deep(.swiper-wrapper) {
      align-self: center;
      cursor: pointer;
    }
  }
</style>
