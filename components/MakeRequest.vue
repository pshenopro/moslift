<script lang="ts" setup>
  import { ref, reactive, computed } from "@vue/reactivity";
  import { defineProps, defineEmits } from 'vue'
  import axios from 'axios'

  import { UslugiList } from '/constants'

  // import { useCompiler } from '#vue-email'

  interface Props {
    modalUpdated: boolean
  }

  const props = defineProps<Props>()
  const emit = defineEmits(['updateModal'])

  const data = reactive({
    name: '',
    email: '',
    usluga: '',
    address: '',
    count: '',
    capacity: '',
    floor: '',
    marking: '',
    connectionType: '',
    comment: ''
  })

  const modal = computed(() => {
    return props.modalUpdated
  })

  // const mail = useMail()
  // const submitMail = () => {
  //   mail.send({
  //     from: 'John Doe',
  //     subject: 'Incredible',
  //     text: 'This is an incredible test message',
  //   })
  // }

  const send = () => {
    try {
      axios.post('http://localhost:8080/email', {
        email: 'nikin-z@yandex.ru',
        text: 'test test'
      })
    } catch (e) {
      console.log(e)
    }
  }
</script>

<template>
  <v-dialog
      v-model="modal"
      width="100%"
      max-width="768px"
      @update:model-value="$emit('updateModal')"
  >
    <div class="modal-wrapper">
      <h3>Оформите заявку</h3>
      <div class="close-icon" @click="$emit('updateModal')">+</div>

      <p class="text">
        Напишите нам и наши менеджеры свяжутся с вами в течение дня
      </p>

      <div class="flex-space double">
        <UiInput
            v-model="data.name"
            label="Как вас зовут?"
            placeholder="Алексей"
            required
            class="mb16"
        />

        <UiInput
            v-model="data.email"
            label="Ваш email"
            required
            placeholder="emailsample@domen.ru"
            class="mb16"
        />
      </div>

      <div class="flex-space double">
        <UiSelect
            v-model="data.usluga"
            label="Услуга"
            :options="UslugiList.map(el => el.title)"
            placeholder="Не указана"
        />

        <UiInput
            v-model="data.address"
            :icon="true"
            label="Расположение объекта"
            placeholder="Москва, проспект Вернадского 3"
        />
      </div>

      <div class="flex-space double">
        <UiInput
            v-model="data.count"
            label="Количество единиц"
            placeholder="3"
            class="mb16"
        />

        <UiInput
            v-model="data.capacity"
            label="Грузоподъемность"
            placeholder="500 кг"
            class="mb16"
        />
      </div>

      <div class="flex-space double">
        <UiInput
            v-model="data.floor"
            label="Этажность (для лифтов)"
            placeholder="20"
            class="mb16"
        />

        <UiInput
            v-model="data.marking"
            label="Марки оборудования"
            placeholder="Названия марок"
            class="mb16"
        />
      </div>

      <UiInput
          v-model="data.connectionType"
          label="Тип установленной связи"
          placeholder="Тип связи"
          class="mb16"
      />

      <UiTextarea
          v-model="data.comment"
          label="Комментарий"
          required
          placeholder="Текст обращения..."
          cols="5"
          :count-size="300"
          class="mb16"
      />

      <div class="btn-wrapper mt16">
        <Button primary @click="send">Откликнуться</Button>
        <div class="description">
          Откликаясь на заявку, я принимаю условия политики конфиденциальности
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<style lang="scss" scoped>
  .input-icon {
    margin-right: 10px;
  }

  .modal-wrapper {
    :deep(textarea) {
      height: 90px;
    }
  }
</style>
