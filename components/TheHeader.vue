<script setup>
  import { ref } from "@vue/reactivity";

  const openMakeRequest = ref(false)
  const openCallback = ref(false)

  const menu = ref(false)

  watch(menu, val => {
    if (val) document.getElementsByTagName('html')[0].style.overflow = 'hidden'
    else document.getElementsByTagName('html')[0].style.overflow = 'auto'
  })
</script>

<template>
    <Head>
        <Title>Модтфил-Сервис - Комплексное обслуживание лифтов и эскалаторов</Title>
        <Meta name="description" content="Модтфил-Сервис - Комплексное обслуживание лифтов и эскалаторов" />
        <Meta name="robots" content="index,follow" />
        <Meta property="og:title" content="Модтфил-Сервис - Комплексное обслуживание лифтов и эскалаторов" />
        <Meta property="og:type" content="article" />
    </Head>
    <header>
        <div class="main-wrapper">
          <nav class="main-nav">
            <NuxtLink class="head-logo" to="/">
              <HeaderLogo />
            </NuxtLink>

            <div class="main-nav-routes">
              <NuxtLink to="/">Главная</NuxtLink>
              <NuxtLink :to="{ path:'/',  hash: '#uslugi' }" :external="true">Услуги</NuxtLink>
              <NuxtLink to="/about">О нас</NuxtLink>
              <NuxtLink v-if="false" to="/shop">Магазин</NuxtLink>
              <NuxtLink :to="{ hash: '#contact' }" :external="true">Контакты</NuxtLink>
              <NuxtLink to="/vacancies">Вакансии</NuxtLink>
            </div>

            <div class="main-nav-btns">
              <Button primary small @click="openMakeRequest = true">Оформить заявку</Button>
              <Button second small @click="openCallback = true">Заказать звонок</Button>
            </div>

            <SecondLogo />
          </nav>

          <nav class="main-nav main-nav__mob hamburger-menu">
            <NuxtLink class="head-logo" to="/">
              <HeaderLogo />
            </NuxtLink>
            <input v-model="menu" id="menu__toggle" type="checkbox" :checked="menu" hidden/>

            <div class="ui-flex-space ui-flex-space-center">
              <SecondLogo class="mr32" />
              <label class="menu__btn-wrapper" for="menu__toggle">
                <div class="menu__btn">
                  <span></span>
                </div>
              </label>
            </div>

            <div class="menu__box" @click="menu = false">
              <NuxtLink to="/">Главная</NuxtLink>
              <NuxtLink :to="{ path:'/',  hash: '#uslugi' }" :external="true">Услуги</NuxtLink>
              <NuxtLink to="/about">О нас</NuxtLink>
              <NuxtLink v-if="false" to="/shop">Магазин</NuxtLink>
              <NuxtLink :to="{ hash: '#contact' }" :external="true">Контакты</NuxtLink>
              <NuxtLink to="/vacancies">Вакансии</NuxtLink>

              <v-divider />
              <div class="main-nav-btns">
                <Button primary small @click="openMakeRequest = true">Оформить заявку</Button>
                <Button second small @click="openCallback = true">Заказать звонок</Button>
              </div>
            </div>
          </nav>
        </div>
    </header>

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
    header {
      width: 100%;
      box-shadow: 0px 7px 20px 6px #0000001c;
    }

    .main-nav {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 34px 0;

      .head-logo {
        height: 40px;
        display: block;
      }

      a {
          font-size: 16px;
          font-weight: 500;
          text-transform: none;
          text-decoration: none;
          color: var(--primary-text-color);

          &:active {
              color: currentColor;
          }
      }

      &-btns {
          display: flex;
          justify-content: space-between;
          width: 271px;
          max-width: 100%;
      }

      &-routes {
          display: flex;
          justify-content: space-between;
          width: 543px;
          max-width: 100%;
      }

      &__mob {
        display: none;
      }

      @media (max-width: 1240px) {
        display: none;

        &__mob {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .main-nav-btns {
          padding: 16px 0;
          width: 100%;

          :deep(.v-btn) {
            width: 49%;
          }
        }
      }

      &.hamburger-menu {
        position: relative;
        z-index: 99;

        #menu__toggle {
          opacity: 0;
        }
        #menu__toggle:checked + div .menu__btn-wrapper span {
          transform: rotate(45deg);
        }
        #menu__toggle:checked + div .menu__btn-wrapper span::before {
          top: 0;
          transform: rotate(0deg);
        }
        #menu__toggle:checked + div .menu__btn-wrapper span::after {
          top: 0;
          transform: rotate(90deg);
        }
        #menu__toggle:checked ~ .menu__box {
          right: 0 !important;
        }
        .menu__btn {
          display: block;
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 1;

          &-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 36px;
            height: 36px;
            border-radius: 6px;
            border: 1px solid #E5E5E5;
            padding: 11px;
            cursor: pointer;
          }
        }
        .menu__btn > span,
        .menu__btn > span::before,
        .menu__btn > span::after {
          display: block;
          position: absolute;
          left: 0;
          right: 0;
          top: 5px;
          border-radius: 6px;
          width: 100%;
          height: 2px;
          background-color: #616161;
          transition-duration: .25s;
        }
        .menu__btn > span::before {
          content: '';
          top: -6px;
        }
        .menu__btn > span::after {
          content: '';
          top: 6px;
        }
        .menu__box {
          display: flex;
          flex-direction: column;
          position: fixed;
          top: 104px;
          right: -100%;
          width: 100%;
          margin: 0;
          padding: 0 30px;
          list-style: none;
          background-color: #ffffff;
          transition-duration: .25s;

          a {
            display: block;
            padding: 12px 0px;
            text-decoration: none;
            transition-duration: .25s;
          }
        }
      }
    }
</style>
<script>export default {
  components: {}
}
</script>
