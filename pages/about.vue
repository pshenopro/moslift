<script lang="ts" setup>
import {reactive, ref} from "@vue/reactivity";

  import { VacList } from '/constants'

const dialog = ref(false)
  const data = reactive({
    name: '',
    email: '',
    vac: '',
    comment: ''
  })
</script>

<template>
  <div class="main-wrapper">
    <div class="about-page">
      <div class="about-description">
        <h1>О нас</h1>
        <h6>Команда ООО «Модтфил-Сервис» и ООО «Лифтдом» сформировалась из состава ООО «Модтфил», работающего на рынке сферы вертикального транспорта с 2002 года. </h6>
        <p>
          Наша команда имеет большой опыт в эксплуатации и обслуживании подъемного оборудования. Мы имеем круглосуточную диспетчерскую и круглосуточную аварийную службы, службу связи, участок наладки и службу снабжения.
          Каждый объект находится под пристальным вниманием начальника участка и специалиста по организации технического обслуживания и ремонта, закрепленными организационно-распорядительным документом за обслуживаемым объектом.
          Все сотрудники своевременно проходят независимую оценку квалификации и имеют свидетельства, подтверждающие занесение оценки соответствия квалификации в Реестр.
        </p>
      </div>

      <img class="about-pic" src="/img/about-page.png" alt="О нас" />
    </div>

    <div class="about-callback">
      <h6>Хочешь стать частью нашей команды?</h6>
      <p>Мы всегда рады новым талантам и готовы к сотрудничеству.</p>
      <Button class="about-btn" third small @click="dialog = true">Написать</Button>
    </div>
  </div>

  <v-dialog
      v-model="dialog"
      width="768px"
  >
    <div class="modal-wrapper">
      <h3>Откликнуться</h3>
      <div class="close-icon" @click="dialog = false">+</div>

      <p class="text">
        Оставьте своё резюме и мы свяжемся с вами
      </p>

      <div class="flex-space double">
        <UiInput
            v-model="data.name"
            label="Как вас зовут?"
            placeholder="Алексей"
            required
            class="mb32"
        />

        <UiInput
            v-model="data.email"
            label="Ваш email"
            required
            placeholder="emailsample@domen.ru"
            class="mb32"
        />
      </div>

      <UiSelect
          v-model="data.vac"
          label="Вакансия или должность, которую рассматриваете"
          :options="VacList.map(el => el.title)"
          :placeholder="'Не указана'"
      />

      <UiTextarea
          v-model="data.comment"
          label="Комментарий"
          required
          placeholder="Текст обращения..."
          cols="5"
          :count-size="300"
          class="mb32"
      />

      <UiFileupload class="file-upload" />

      <div class="btn-wrapper mt16">
        <Button primary>Откликнуться</Button>
        <div class="description">
          Откликаясь на вакансию, я принимаю условия политики конфиденциальности
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<style lang="scss" scoped>
  .about {
    &-page {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 64px 0;
    }

    &-pic {
      width: 656px;
    }

    &-description {
      width: 100%;
      max-width: 592px;
      margin-right: 80px;

      h1 {
        font-weight: 800;
        font-size: 36px;
        line-height: 44px;
        padding-bottom: 48px;
        color: var(--title-text-color);
      }

      h6 {
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        color: var(--title-text-color);
        padding-bottom: 28px;
      }

      p {
        font-size: 16px;
        line-height: 24px;
        color: var(--second-text-color);
      }
    }

    &-callback {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: #FAFAFA;
      padding: 20px;

      h6 {
        color: var(--title-text-color);
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
        padding-bottom: 10px;
      }

      p {
        color: var(--second-text-color);
        font-size: 14px;
        line-height: 20px;
        padding-bottom: 24px;
      }

      :deep(.v-btn) {
        width: 98px;
        border: 1px solid #E5E5E5 !important;
      }
    }

    @media (max-width: 1200px) {
      &-pic {
        width: 50%;
      }
    }

    @media (max-width: 991px) {
      &-page {
        flex-direction: column;
      }

      &-pic {
        padding-top: 20px;
        width: 100%;
        height: 400px;
        object-fit: cover;
      }

      &-description {
        max-width: none;
        margin-right: 0;
      }
    }

    @media (max-width: 540px) {
      &-page {
        padding: 32px 0;
      }

      &-description {
        h1 {
          padding-bottom: 24px;
        }
      }
    }
  }
</style>
