<script lang="ts" setup>
import { ref } from "@vue/reactivity";

import { UslugiList } from '/constants'

  const data = ref({
    valid: false,
    firstname: '',
    textArea: '',
    usluga: '',
    uslugaItems: UslugiList,
    nameRules: [
      value => {
        if (value) return true

        return 'Name is required.'
      },
      value => {
        if (value?.length <= 10) return true

        return 'Name must be less than 10 characters.'
      },
    ],
    emailRules: [
      value => {
        if (value) return true

        return 'E-mail is requred.'
      },
      value => {
        if (/.+@.+\..+/.test(value)) return true

        return 'E-mail must be valid.'
      },
    ],
  })

  const submit = (values => {
    alert(JSON.stringify(values, null, 2))
  })
</script>

<template>
  <section class="question-form">
    <div class="main-wrapper">
      <div class="question-form__q">
        <h2>Остались вопросы?</h2>
        <p>Напишите нам и наши менеджеры свяжутся <br> с вами в течение дня</p>
        <p>
          Наш адрес
          <br>
          г. Москва, Черницынский проезд, д. 3, стр. 1
        </p>
        <p>
          Телефон
          <br>
          8 968 328 66 70
        </p>
        <p>
          Почта
          <br>
          modtfil.service@gmail.com
          <br>
          info.liftdom@gmail.com
        </p>
      </div>

      <form @submit.prevent="submit" class="question-form__f">
        <UiInput
          v-model="data.firstname"
          label="Как вас зовут?"
          placeholder="Алексей"
          class="mb32"
        />

        <UiInput
            v-model="data.email"
            label="Ваш email"
            placeholder="emailsample@domen.ru"
            class="mb32"
        />

        <UiSelect
            v-model="data.usluga"
            label="Услуга"
            :options="data.uslugaItems"
            :placeholder="'Не указана'"
            class="mb32"
        />

        <UiTextarea
          v-model="data.textArea"
          label="Опишите ваш запрос"
          placeholder="Текст обращения..."
          :count-size="300"
          class="mb32"
        />

        <div class="form-submit">
          <Button
            primary
          >
            Оставить заявку
          </Button>

          <p>Оставляя заявку я принимаю условия политики конфиденциальности</p>
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .question-form {
    padding: 64px 0;
    background: #FAFAFA;

    h2 {
      font-size: 36px;
      padding-bottom: 16px;
      color: var(--title-text-color)
    }

    &__q {
      max-width: 384px;
      width: 100%;

      p {
        padding-bottom: 16px;
        color: var(--primary-text-color);
        font-size: 16px;
      }
    }

    &__f {
      max-width: 700px;
      width: 100%;

      .form-submit {
        display: flex;
        align-items: center;

        p {
          margin-left: 24px;
          font-size: 12px;
          color: var(--second-text-color);
        }
      }
    }

    .main-wrapper {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
