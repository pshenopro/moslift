<script lang="ts" setup>
  import { ref } from "@vue/reactivity"

  import Arrow from '/assets/icons/Arrow.vue'

  const slides = [
    {
      title: 'Наладка электронного оборудования подъемных устройств',
      text: 'Для корректной работы подъемных сооружений, инженеры и техники службы наладки проведут необходимое считывание, обработку, загрузку и установку данных, в случае необходимости, подберут необходимое электронное оборудование, произведут его замену, настроят, выставят нужные параметры работы лифтов, эскалаторов, подъёмных платформ, проверят точность работы внесенных изменений и оборудования в целом',
      img: 'uslugi-slider-1.png'
    },
    {
      title: 'Техническое обслуживание лифтов',
      text: 'Наши сотрудники обеспечат надлежащее состояние лифтовой шахты и подъемного оборудования, а проведение обслуживания ваших лифтов в соответствии со сроками регламента и постоянный контроль всех составляющих оборудования обеспечат бесперебойную работу и продление срока службы лифтов.',
      img: 'uslugi-slider-2.png'
    },
    {
      title: 'Техническое обслуживание эскалаторов',
      text: 'Регулярная проверка нашими специалистами состояния всех звеньев, элементов, внешних и внутренних механизмов эскалаторов,  качественное и своевременное техническое обслуживание нашими профессионалами - вот что нужно для надежной и безопасной работы ваших эскалаторов.',
      img: 'uslugi-slider-1.png'
    },
    {
      title: 'Техническое обслуживание платформ подъемных',
      text: 'Опыт и профессионализм нашего персонала и строгое выполнение всех требований эксплуатационной документации завода-изготовителя позволяют нам обеспечивать высокую работоспособность любых видов и типов подъемных платформ (грузовых, гидравлических, инвалидных, столовых и т.п.)',
      img: 'uslugi-slider-2.png'
    }
  ]

  const openMakeRequest = ref(false)
  const openCallback = ref(false)
</script>

<template>
  <section class="main-wrapper uslugi-page">
    <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
        :slides-per-view="1"
        :effect="'Coverflow'"
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
        :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }"
    >
      <SwiperSlide
          class="swiper-slide__wrapper"
          v-for="(slide, i) in slides"
          :key="i"
      >
        <h2>{{ slide.title }}</h2>
        <div class="swiper-slide">
          <nuxt-img :src="slide.img" alt="" />
          <div class="swiper-slide__text">
            <p>{{ slide.text }}</p>

            <div class="swiper-slide__btns">
              <Button primary @click="openMakeRequest = true">Оформить заявку</Button>
              <Button second @click="openCallback = true">Заказать звонок</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <div class="swiper-nav">
        <div class="nav-inner">
          <div class="swiper-button-prev">
            <Arrow />
          </div>
          <div class="swiper-button-next">
            <Arrow />
          </div>
        </div>
      </div>
    </Swiper>
  </section>

  <MakeRequest
      :modal-updated="openMakeRequest"
      @update-modal="openMakeRequest = false"
  />

  <MakeCallBack
      :modal-updated="openCallback"
      @update-modal="openCallback = false"
  />
</template>

<style lang="scss" scoped>
  .uslugi-page {
    h2 {
      padding: 64px 0;
      color: var(--title-text-color);
    }

    .swiper-slide {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      &__wrapper {
        display: block;
        width: 100%;
      }

      &__text {
        width: 100%;
        max-width: 620px;
        padding-left: 30px;

        p {
          color: var(--second-text-color);
          font-size: 18px;
          line-height: 28px;
          padding-bottom: 32px;
        }
      }

      &__btns {
        width: 100%;
        max-width: 371px;
        display: flex;
        justify-content: space-between;
      }

      img {
        height: 452px;
        width: 597px;
        object-fit: cover;
      }
    }

    .nav-inner {
      margin-top: 24px;
      width: 96px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      :deep(.swiper-button-prev),
      :deep(.swiper-button-next) {
        position: static;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
        border-radius: 6px;
        background: #fff;
        border: 1px solid #E5E5E5;
        --swiper-navigation-size: auto;

        &:hover {
          svg {
            color: var(--primary-hover)
          }
        }

        &::after {
          display: none;
        }

        svg {
          width: 10px;
          color: var(--title-text-color);
          transition: all .3s;
        }
      }

      :deep(.swiper-button-next) {
        transform: rotate(180deg);
      }
    }
  }
</style>
