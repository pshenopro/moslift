<script setup>
  import { VacList } from '/constants'
  import { computed, reactive, ref  } from "@vue/reactivity";

  const route = useRoute()
  const router = useRouter()

  const data = computed(() => VacList.find(el => el.id === route.params.id))

  const sendMail = useMail()
  const dialog = ref(false)
  const state = reactive({
    name: '',
    email: '',
    vac: '',
    comment: ''
  })

  const send = async () => {
    try {
      await sendMail('Резюме', data)
    } finally {
      dialog.value = false
    }
  }
</script>

<template>
  <section class="vacancies-id">
    <div class="main-wrapper">
      <template v-if="!data">
        <h2>Ошибка</h2>
      </template>
      <template v-else>
        <div class="back" @click="router.back()">Назад</div>
        <h1>{{ data.title }}</h1>
        <p v-html="data.desc" />
        <Button primary @click="dialog = true">Откликнуться</Button>
      </template>
    </div>
  </section>

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
            v-model="state.name"
            label="Как вас зовут?"
            placeholder="Алексей"
            required
            class="mb32"
        />

        <UiInput
            v-model="state.email"
            label="Ваш email"
            required
            placeholder="emailsample@domen.ru"
            class="mb32"
        />
      </div>

      <UiSelect
          v-model="state.vac"
          label="Вакансия или должность, которую рассматриваете"
          :options="VacList.map(el => el.title)"
          :placeholder="'Не указана'"
      />

      <UiTextarea
          v-model="state.comment"
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

<style>
  .vacancies-id {
    padding: 0 0 64px;

    .back {
      padding-top: 32px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #6366F1;
      cursor: pointer;
    }

    h1 {
      padding: 32px 0;
      font-weight: 800;
      font-size: 36px;
      line-height: 44px;
    }

    p {
      color: var(--primary-text-color);
      font-size: 18px;
      padding-bottom: 32px;

      h6 {
        padding: 20px 0;
        font-size: 20px;
        font-weight: 600;
      }

      ul {
        padding-left: 20px;
        padding-bottom: 30px;

        li {
          font-size: 16px;
        }
      }
    }

    @media (max-width: 540px) {
      padding-bottom: 32px;
    }
  }
</style>
