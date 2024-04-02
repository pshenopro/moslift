<script setup>
    import { ref } from "@vue/reactivity"

    const slides = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    const openMakeRequest = ref(false)
    const openCallback = ref(false)
</script>

<template>
    <Swiper
        class="swiper"
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
        :slides-per-view="1"
        :loop="true"
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
        :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }"
    >
        <SwiperSlide
            class="swiper-slide"
            v-for="(slide, i) in slides"
            :key="i"
            :style="{
                'background-image': `url(/img/start-slide-${slide}.png)`
            }"
        >
            <div class="drop-shadow-img" />
      </SwiperSlide>

      <div class="main-wrapper">
        <h2 v-html="'Комплексное <br /> обслуживание лифтов <br />и эскалаторов'" />
        <div class="slider-bts">
          <Button primary @click="openMakeRequest = true">Оформить заявку</Button>
          <Button third @click="openCallback = true">Заказать звонок</Button>
        </div>

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

        <SocialIcons class="social-wrapper" />
      </div>
    </Swiper>

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
    .swiper {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .social-wrapper {
        position: absolute;
        left: auto;
        right: auto;
        bottom: 90px;
        z-index: 999;
    }

    .drop-shadow-img {
      width: 100%;
      height: 100%;
      background: rgb(0,0,0);
      background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.43883490896358546) 17%, rgba(255,255,255,0) 35%);
    }

    .main-wrapper {
      position: absolute;
      top: 0;
      height: 712px;
      display: flex;
      flex-direction: column;
      z-index: 9999;
      justify-content: center;

      h2 {
        padding-top: 130px;
        font-family: 'Inter';
        font-size: 52px;
        font-weight: 700;
        line-height: 56px;
        letter-spacing: -0.02em;
        text-align: left;
        color: #fff;
        padding-bottom: 40px;
      }

      .slider-bts {
        display: flex;

        button:first-child {
          margin-right: 20px;
        }
      }
    }

    .swiper-slide {
        display: flex;
        align-items: center;
        width: 100%;
        height: 712px;
        background: black;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .swiper-nav {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding-top: 85px;
    }

    .nav-inner {
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
            background: #E5E5E5;
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
</style>
