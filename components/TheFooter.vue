<script lang="ts" setup>
  import { ref } from "@vue/reactivity";

  const modal = ref(false)
  const footer = [
    {
      title: 'Компания',
      links: [
        {
          text: 'О нас',
          href: '/about'
        },
        {
          text: 'Вакансии',
          href: '/vacancies'
        },
        {
          text: 'Магазин',
          href: '/shop'
        }
      ]
    },
    {
      title: 'Нормативные документы',
      click: true,
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
  const docs = [
      'Профстандарт_Электромеханик_по_эксплуатации,_техническому_обслуживанию.rtf',
      'Федеральный_закон_от_03_07_2016_N_238_ФЗ_О_независимой_оценке_квалификации.rtf',
      'Постановление_Правительства_РФ_от_16_11_2016_N_1204_Об_утверждении.rtf',
      'Федеральное_тарифное_соглашение_в_лифтовой_отрасли_и_сфере_в_вертикального.rtf',
      'Профстандарт_Диспетчер_аварийно_диспетчерской_службы.rtf',
      'Профстандарт_Специалист_по_оборудованию_диспетчерского_контроля.rtf',
      'Профстандарт_Наладчик_электронного_оборудования_лифтов,_подъемных.rtf',
      'Профстандарт_Специалист_по_эксплуатации_лифтового_оборудования.rtf',
      'Профстандарт_Специалист_по_эксплуатации_эскалаторов,_пассажирских.rtf',
      'Профстандарт_Электромеханик_по_лифтам.rtf',
      'Профстандарт_Электромеханик_по_эксплуатации_и_обслуживанию_подъемных.rtf',
      'Профстандарт_Лифтер_оператор_по_обслуживанию_лифтов_и_платформ_подъемных.rtf',
      'Жилищный_кодекс_Российской_Федерации_от_29_12_2004_N_188_ФЗ.rtf',
      'ГОСТ_5746_2015_ISO_4190_1_2010_Межгосударственный_стандар.rtf',
      'ГОСТ_8823_2018_Межгосударственный_стандарт_Лифты_грузовые_.rtf',
      'ГОСТ_33605_2021_Межгосударственный_стандарт_Лифты_Термины.rtf',
      'ГОСТ_33652_2019_EN_81_70_2018_Межгосударственный_стандарт.rtf',
      'ГОСТ_33653_2019_EN_81_71_2018_Межгосударственный_стандарт.rtf',
      'ГОСТ_33984_1_2016_EN_81_20_2014_Межгосударственный_станда.rtf',
      'ГОСТ_33984_2_2016_EN_81_20_2014_Межгосударственный_станда.rtf',
      'ГОСТ_33984_3_2017_EN_81_50_2014_Межгосударственный_станда.rtf',
      'ГОСТ_33984_4_2017_EN_81_50_2014_Межгосударственный_станда.rtf',
      'ГОСТ_34583_2019_Межгосударственный_стандарт_Лифты_Правила.rtf',
      'ГОСТ_34682_1_2020_EN_81_40_2008_Межгосударственный_станда.rtf',
      'ГОСТ_34682_2_2020_EN_81_41_2010_Межгосударственный_станда.rtf',
      'ГОСТ_Р_53296_2009_Установка_лифтов_для_пожарных_в_зданиях_и.rtf',
      'ГОСТ_Р_53387_2009_ИСО_ТС_14798_2006_Национальный_стандарт.rtf',
      'ГОСТ_Р_53780_2010_ЕН_81_1_1998,_ЕН_81_2_1998_Национальный.rtf',
      'ГОСТ_Р_53782_2010_Национальный_стандарт_Российской_Федераци.rtf',
      'ГОСТ_Р_55964_2022_Национальный_стандарт_Российской_Федераци.rtf',
      'ГОСТ_Р_55965_2014_Национальный_стандарт_Российской_Федераци.rtf',
      'ГОСТ_Р_55966_2014_CEN_TS_81_76_2011_Национальный_стандарт.rtf',
      'ГОСТ_Р_56943_2016_Национальный_стандарт_Российской_Федераци.rtf',
      'ГОСТ_1_4_2020_Межгосударственный_стандарт_Межгосударственн.rtf',
      'ПП_РФ_от_24_06_2017_N_743_Об_организации_безопасного_использования.rtf',
      'ТР_ТС_0112011_Технический_регламент_Таможенного_союза_0112011_Безопасность.rtf',
      'ГОСТ_34305_2017_EN_81_72_2015_Межгосударственный_стандарт.rtf',
      'ГОСТ_34303_2017_EN_13015_2001_A1_2008_Межгосударственный.rtf',
      'ГОСТ_34489_2018_Межгосударственный_стандарт_Эскалаторы_и_п.rtf',
      'ГОСТ_34581_2019_EN_81_21_2018_Межгосударственный_стандарт.rtf',
      'ГОСТ_33966_1_2016_EN_115_1_2008_A1_2010_Межгосударственный_стандарт.rtf',
      'ГОСТ_34582_2019_Межгосударственный_стандарт_Лифты_Правила_и_методы.rtf'
  ]
</script>

<template>
  <div id="contact" ref="contact" class="footer">
    <div class="main-wrapper">
      <div class="footer-wrapper">
        <div v-for="item in footer" class="footer-item">
          <h6 :class="{'pointer': item.click}" @click="item.click ? modal = true : () => ({})">{{ item.title }}</h6>
          <component
              :is="link.click ? 'span' : 'a'"
              v-for="link in item.links"
              :href="link.phone || link.href"
          >
            <span v-html="link.text" />
          </component>
        </div>
      </div>

      <div class="footer-social">
        <SocialIcons class="social-wrapper" />

        <p>
          © {{ new Date().getFullYear() }} Modtfil service. Все права сохранены
        </p>
      </div>
    </div>
  </div>

  <v-dialog
      v-model="modal"
      width="1200px"
      @update:model-value="$emit('updateModal')"
  >
    <div class="modal-wrapper">
      <h3>Нормативные документы</h3>
      <div class="close-icon" @click="modal = false">+</div>

      <div class="modal-docs">
        <div v-for="item in docs" class="modal-docs__items">
          <a :href="`/doc/${item}`" download>{{ item }}</a>
          <Download />
        </div>
      </div>
    </div>
  </v-dialog>
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

      a,
      span {
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

    @media (max-width: 991px) {
      &-item {
        max-width: 32%;
        padding-right: 30px;
      }
    }

    @media (max-width: 540px) {
      &-item {
        max-width: 38%;
        padding-right: 18px;

        &:first-child {
          max-width: 18%;
        }
      }
    }

    @media (max-width: 414px) {
      padding: 32px 0;

      .footer-wrapper {
        flex-direction: column;
      }

      &-item {
        max-width: 100%;
      }

      .footer-social {
        padding-top: 20px;
        flex-direction: column-reverse;
        align-items: center;
        gap: 20px;
      }
    }
  }

  .modal-docs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    &__items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      margin-bottom: 16px;
      width: 100%;
      font-weight: 500;
      font-size: 16px;
      line-height: 1;
      border-bottom: 1px solid #E5E5E5;
      box-shadow: 0px 1px 2px 0px #1018280D;
      transition: all .3s;

      &:hover {
        box-shadow: 0px 2px 3px 1px rgb(16 24 40 / 13%);
      }

      a {
        color: #6366F1;
        text-decoration: none;
      }
    }
  }

  .modal-wrapper {
    border-radius: 6px;
    height: 700px;
    overflow-y: scroll;
    background-color: #FAFAFA;

    h3 {
      font-weight: 800;
      font-size: 36px;
      padding-bottom: 32px;
    }

    @media (max-width: 540px) {
      border-radius: 0;
      height: 90vh;
      padding-top: 30px;
      padding-bottom: 30px;

      h3 {
        font-size: 30px;
      }

      a {
        word-break: break-all;
        padding-right: 20px;
        text-align: left;
        width: 80%;
      }
    }
  }
</style>
