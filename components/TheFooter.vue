<script lang="ts" setup>
  import Vk from '../assets/icons/Vk.vue'
  import Dzen from '../assets/icons/Dzen.vue'
  import YouTube from '../assets/icons/YouTube.vue'
  import Telgr from '../assets/icons/Telgr.vue'

  const footer = [
    {
      title: 'Компания',
      links: [
        {
          text: 'О нас',
          href: ''
        },
        {
          text: 'Вакансии',
          href: ''
        },
        {
          text: 'Магазин',
          href: ''
        }
      ]
    },
    {
      title: 'Нормативные документы',
      links: [
        {
          text: 'Политика конфиденциальности',
          href: ''
        }
      ]
    },
    {
      title: 'Контакты',
      links: [
        {
          text: 'г. Москва, Черницынский проезд, д. 3, стр. 1',
          href: 'https://yandex.ru/maps/-/CDFTuWyR'
        },
        {
          text: 'тел. 8 968 328 66 70',
          phone: 'tel:+7968 328 66 70'
        },
        {
          text: 'modtfil.service@gmail.com <br> info.liftdom@gmail.com'
        }
      ]
    }
  ]
</script>

<template>
  <div class="footer">
    <div class="main-wrapper">
      <div class="footer-wrapper">
        <div v-for="item in footer" class="footer-item">
          <h6>{{ item.title }}</h6>
          <a
              v-for="link in item.links"
              :href="link.phone || link.href"
              v-html="link.text"
          />
        </div>
      </div>

      <div class="footer-social">
        <div class="footer-social__items">
          <a href="" target="_blanc"><Dzen /></a>
          <a href="" target="_blanc"><Vk /></a>
          <a href="" target="_blanc"><YouTube /></a>
          <a href="" target="_blanc"><Telgr /></a>
        </div>

        <p>
          © {{ new Date().getFullYear() }} Modtfil service. Все права сохранены
        </p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .footer {
    width: 100%;
    padding: 64px 0;

    h6 {
      color: var(--title-text-color);
      padding-bottom: 16px;
      font-size: 14px;
      font-weight: 500;
    }

    .footer-wrapper {
      display: flex;
      justify-content: space-between;
      padding-bottom: 50px;
    }

    &-item {
      width: 100%;
      max-width: 384px;

      a {
        display: block;
        font-size: 14px;
        padding-bottom: 12px;
        line-height: 20px;
        color: var(--second-text-color);
        text-decoration: none;
        cursor: pointer;
      }
    }

    &-social {
      display: flex;
      justify-content: space-between;
      padding-top: 64px;
      border-top: 1px solid #E5E5E5;

      &__items {
        display: flex;
        justify-content: space-between;
        width: 144px;
      }

      p {
        color: var(--second-text-color);
        font-size: 14px;
      }
    }
  }
</style>
