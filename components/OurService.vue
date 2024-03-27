<script lang="ts" setup>
  const slides = [
    {
      img: 'our-services_elevator.png',
      text: 'Техническое обслуживание лифтов',
      link: '/elevator-maintenance'
    },
    {
      img: 'our-services_escalator.png',
      text: 'Техническое обслуживание эскалаторов',
      link: '/escalator-maintenance'
    },
    {
      img: 'our-services_platform.png',
      text: 'Техническое обслуживание платформ подъемных',
      link: '/lifting-service'
    },
    {
      img: 'our-services_equipment.png',
      text: 'Эксплуатация подъемного оборудования',
      link: '/elevator-equipment'
    }
  ]
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
          v-for="(slide, i) in slides"
          :key="i"
      >
        <img :src="'/img/' + slide.img" alt="" />
        <NuxtLink :to="slide.link" class="slide-link">{{ slide.text }}</NuxtLink>
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
