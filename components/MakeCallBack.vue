<script lang="ts" setup>
import { ref, reactive, computed } from "@vue/reactivity";
import { defineProps, defineEmits } from 'vue'

import { UslugiList } from '/constants'
// const sendMail = useMail()

interface Props {
  modalUpdated: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['updateModal'])

const data = reactive({
  name: '',
  phone: '',
  usluga: '',
  address: '',
  comment: ''
})

const modal = computed(() => {
  return props.modalUpdated
})

const send = async () => {
  try {
    // await sendMail('Заказать звонок', data)
  } finally {
    emit('updateModal')
  }
}
</script>

<template>
  <v-dialog
      v-model="modal"
      width="768px"
      @update:model-value="$emit('updateModal')"
  >
    <div class="modal-wrapper">
      <h3>Закажите звонок</h3>
      <div class="close-icon" @click="$emit('updateModal')">+</div>

      <p class="text">
        Оставьте свои контакты и мы свяжется с вами в течение дня
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
            v-model="data.phone"
            label="Ваш номер телефона *"
            required
            placeholder="+ 7 999 99 99 99"
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

      <UiTextarea
          v-model="data.comment"
          label="Комментарий"
          required
          placeholder="Текст обращения..."
          cols="5"
          :count-size="300"
          class="mb16"
      />

      <div v-if="false" class="btn-wrapper mt16">
        <Button primary @click="send">Заказать звонок</Button>
        <div class="description">
          Заказывая звонок, я принимаю условия политики конфиденциальности
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
