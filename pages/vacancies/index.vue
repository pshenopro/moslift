<script lang="ts" setup>
  import { reactive, ref } from "@vue/reactivity";

  import { VacList } from '/constants'

  const dialog = ref(false)
  const data = reactive({
    name: '',
    email: '',
    vac: '',
    comment: ''
  })
  // const sendMail = useMail()

  const send = async () => {
    try {
      // await sendMail('Резюме', data)
    } finally {
      dialog.value = false
    }
  }
</script>

<template>
  <div class="main-wrapper">
    <div class="vacancies-page">
      <div class="vacancies-page__info">
        <h1>Присоединяйся к нам!</h1>
        <p>Не упусти шанс проявить себя и стать частью нашей команды!</p>
        <img src="/img/vacancies-page.png" />
      </div>

      <div class="vacancies-page__list">
        <NuxtLink
            v-for="({title, text, path}, i) in VacList"
            class="vacancies-page__list-item"
            :to="path"
            :key="i"
        >
          <div class="vacancies-page__list-count">{{ i + 1 }}</div>
          <div class="vacancies-page__list-text">
            <h6>{{ title }}</h6>
            <p>{{ text }}</p>
          </div>
        </NuxtLink>

        <Button v-if="false"  class="mt16" third bg="#6366F1" color="#fff" @click="dialog=true">Откликнуться</Button>
      </div>
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

      <UiFileupload class="file-upload" @onChange="data.files = $event" />

      <div class="btn-wrapper mt16">
        <Button primary @click="send">Откликнуться</Button>
        <div class="description">
          Откликаясь на вакансию, я принимаю условия политики конфиденциальности
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<style lang="scss" scoped>
  body {
    .v-card {
      border-radius: 6px !important;
    }
  }

  .vacancies-page {
    padding: 64px 0;
    display: flex;
    justify-content: space-between;
    width: 100%;

    &__list {
      width: 100%;
      max-width: 490px;
      padding-top: 10px;

      &-count {
        transition: all .3s;
      }

      &-item {
        display: flex;
        width: 100%;
        padding-bottom: 30px;
        transition: all .3s;
        text-decoration: none;

        &:hover {
          .vacancies-page__list-count {
            background: #6366f1;
            color: #fff;
          }
        }
      }

      &-text {
        position: relative;
        cursor: pointer;
        transition: all .3s;

        &::before,
        &::after {
          content: '';
          height: 14px;
          width: 14px;
          position: absolute;
          transition: all .3s ease;
          opacity: 0;
        }

        &:hover:before,
        &:hover:after {
          transform: translate(0,0);
          opacity: 1;
        }

        &::before {
          content: '';
          right: 0;
          top: 0;
          border-top: 3px solid #6366f1;
          border-right: 3px solid #6366f1;
          transform: translate(-100%, 50%);
        }

        &::after {
          content: '';
          left: -20px;
          bottom: -20px;
          border-bottom: 3px solid #6366f1;
          border-left: 3px solid #6366f1;
          transform: translate(100%, -50%)
        }
      }

      &-count {
        height: 36px;
        width: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background-color: #EEF2FF;
        color: #6366F1;
        margin-right: 21px;
        border-radius: 6px;
      }

      h6 {
        color: var(--title-text-color);
        font-weight: 800;
        font-size: 20px;
        line-height: 28px;
        padding-bottom: 16px;
      }

      p {
        color: var(--second-text-color);
      }
    }

    &__info {
      width: 100%;
      max-width: 490px;

      h1 {
        color: var(--title-text-color);
        font-size: 36px;
        line-height: 44px;
        font-weight: 800;
        padding-bottom: 16px;
      }

      p {
        color: var(--second-text-color);
        font-size: 16px;
        padding-bottom: 40px;
      }

      img {
        width: 100%;
      }
    }

    @media (max-width: 1200px) {
      &__list {
        max-width: none;
        width: 45%;
      }

      &__info {
        max-width: none;
        width: 45%;
      }
    }

    @media (max-width: 991px) {
      flex-direction: column;
      padding: 32px 0;

      &__info,
      &__list {
        width: 100%;
      }

      &__info {
        img {
          height: 276px;
          object-fit: cover;
        }
      }

      &__list {
        padding-top: 30px;
      }

      .mt16 {
        margin-top: 30px;
      }
    }

    @media (max-width: 540px) {
      &__info {
        p {
          padding-bottom: 20px;
        }

        img {
          height: 246px;
        }
      }

      &__list {
        padding-top: 20px;

        &-text {
          padding: 15px;
          border-bottom: 1px solid #6366f1;

          &::after,
          &::before {
            content: none;
          }
        }

        &-count {
          display: none;
        }
      }
    }
  }

  .modal-wrapper {
    :deep(textarea) {
      height: 90px;
    }
  }
</style>
