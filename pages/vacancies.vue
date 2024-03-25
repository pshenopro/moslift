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
</script>

<template>
  <div class="main-wrapper">
    <div class="vacancies-page">
      <div class="vacancies-page__info">
        <h1>Присоединяйся к нашей команде!</h1>
        <p>Мы всегда поисках новых талантов. Напишите нам, если хотели бы сотрудничать </p>
        <img src="/img/vacancies-page.png" />
      </div>

      <div class="vacancies-page__list">
        <div v-for="({title, text}, i) in VacList" class="vacancies-page__list-item">
          <div class="vacancies-page__list-count">{{ i + 1 }}</div>
          <div class="vacancies-page__list-text">
            <h6>{{ title }}</h6>
            <p>{{ text }}</p>
          </div>
        </div>

        <Button third bg="#6366F1" color="#fff" @click="dialog=true">Откликнуться</Button>
      </div>
    </div>
  </div>

  <v-dialog
      v-model="dialog"
      width="768px"
  >
    <div class="modal-wrapper">
      <h3>Откликнуться</h3>

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
  body {
    .v-card {
      border-radius: 6px !important;
    }
  }

  .vacancies-page {
    padding: 64px 0;
    display: flex;
    justify-content: space-between;

    &__list {
      width: 100%;
      max-width: 490px;
      padding-top: 10px;

      &-item {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 30px;
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
  }

  .modal-wrapper {
    :deep(textarea) {
      height: 90px;
    }
  }
</style>
