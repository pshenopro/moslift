<script setup>
  import { ref } from "@vue/reactivity";

  const openMakeRequest = ref(false)
  const openCallback = ref(false)
</script>

<template>
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
              <NuxtLink to="/shop">Магазин</NuxtLink>
              <NuxtLink :to="{ hash: '#contact' }" :external="true">Контакты</NuxtLink>
              <NuxtLink to="/vacancies">Вакансии</NuxtLink>
            </div>

            <div class="main-nav-btns">
              <Button primary small @click="openMakeRequest = true">Оформить заявку</Button>
              <Button second small @click="openCallback = true">Заказать звонок</Button>
            </div>

            <SecondLogo />
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
    }
</style>
<script>export default {
  components: {}
}
</script>
