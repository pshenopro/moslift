<script setup>
  import { ref } from "@vue/reactivity"

    import Arrow from 'icons/arrow.vue'
    import Vk from 'icons/Vk.vue'
    import Dzen from 'icons/Dzen.vue'
    import YouTube from 'icons/YouTube.vue'
    import Telgr from 'icons/Telgr.vue'

    const slides = [
        {
            text: 'Комплексное <br /> обслуживание лифтов <br />и эскалаторов',
            img: 'img/start-slide-1.png'
        },
        {
            text: 'Комплексное <br /> обслуживание лифтов <br />и эскалаторов',
            img: 'img/start-slide-1.png'
        },
    ]

    const openMakeRequest = ref(false)
    const openCallback = ref(false)
</script>

<template>
    <Swiper
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
                'background-image': `url(${slide.img})`
            }"
        >
            <div class="main-wrapper">
                <h2 v-html="slide.text" />
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

                <div class="social-wrapper">
                    <a href="" target="_blanc"><Dzen /></a>
                    <a href="" target="_blanc"><Vk /></a>
                    <a href="" target="_blanc"><YouTube /></a>
                    <a href="" target="_blanc"><Telgr /></a>
                </div>
            </div>
        </SwiperSlide>
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
    .social-wrapper {
        position: absolute;
        left: auto;
        right: auto;
        bottom: 90px;
        z-index: 999;
        display: flex;
        justify-content: space-between;
        width: 144px;
    }

    .swiper-slide {
        display: flex;
        align-items: center;
        height: 712px;
        background: black;
        background-repeat: no-repeat;
        background-size: cover;

        h2 {
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
