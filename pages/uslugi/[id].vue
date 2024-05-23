<script setup>
import { ref, computed } from "@vue/reactivity"
import { UslugiList } from '/constants'

const route = useRoute()
const router = useRouter()

const data = computed(() => UslugiList.find(el => el.id === route.params.id))

const openMakeRequest = ref(false)
const openCallback = ref(false)
</script>

<template>
  <Head>
    <Title>{{ data?.title }}</Title>
    <Meta name="description" :content="data?.desc" />
  </Head>
  <section class="main-wrapper uslugi-page">
    <template v-if="!data">
      <h2>Ошибка</h2>
    </template>
    <template v-else>
      <h1>{{ data.title }}</h1>
      <div class=" uslugi-wrapper">
        <Swiper
            class="swiper"
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
              v-for="(slide, i) in data.imgId"
              :key="i"
          >
            <div class="swiper-slide">
              <img :src="'/img/uslugi/' + slide" alt="" />
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

        <div class="swiper-slide__text">
          <p v-html="data.desc" />

          <div class="swiper-slide__btns">
            <Button primary @click="openMakeRequest = true">Оформить заявку</Button>
            <Button second @click="openCallback = true">Заказать звонок</Button>
          </div>
        </div>
      </div>
    </template>
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
  h1 {
    padding: 64px 0;
    color: var(--title-text-color);
  }
}

.uslugi-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.swiper {
  width: 595px;
}

.swiper-slide {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 595px;
  width: 100%;

  img {
    width: 100%;
    object-fit: cover;
  }

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

@media (max-width: 1124px) {
  .swiper {
    width: 55%;
  }

  .swiper-slide__wrapper {
    .swiper-slide {
      height: 290px;

      img {
        width: 100%;
        height: 290px;
        object-fit: cover;
      }
    }
  }
}

@media (max-width: 991px) {
  .uslugi-wrapper {
    flex-direction: column;
  }

  .swiper {
    width: 100%;

    .swiper-slide {
      max-width: none;
    }
  }

  .swiper-slide__wrapper {
    .swiper-slide {
      height: 340px;
      max-width: none;

      img {
        height: 340px;
      }
    }
  }

  .swiper-slide__text {
    padding-top: 32px;
    max-width: none;
    padding-left: 0;
  }
}

@media (max-width: 540px) {
  .uslugi-page {
    h1 {
      padding: 32px 0;
      font-size: 26px;
    }
  }
}

@media (max-width: 414px) {
  .swiper-slide__wrapper {
    .swiper-slide {
      img {
        height: 290px;
      }
    }
  }

  .swiper-slide__btns {
    flex-direction: column;
    gap: 16px;
  }

  .uslugi-page {
    h1 {
      padding: 20px 0;
      font-size: 20px;
    }
  }
}
</style>
