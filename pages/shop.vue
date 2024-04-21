<script lang="ts" setup>
import { ref, computed, reactive } from "@vue/reactivity"
import { UslugiList } from '/constants'

  const searchValue = ref('')
  const items = ref([
    {
      img: 'shop-item-1.png',
      text: 'Товар 1'
    },
    {
      img: 'shop-item-1.png',
      text: 'Товар 2'
    },
    {
      img: 'shop-item-1.png',
      text: 'Товар 3'
    },
    {
      img: 'shop-item-1.png',
      text: 'Товар 4'
    },
    {
      img: 'shop-item-1.png',
      text: 'Товар 5'
    },
    {
      img: 'shop-item-1.png',
      text: 'Товар 6'
    },
    {
      img: 'shop-item-1.png',
      text: 'Товар 7'
    }
  ])
  const openModal = ref(false)
const data = reactive({
  name: '',
  phone: '',
  usluga: '',
  comment: ''
})

  const itemsUpdated = computed(() => {
    const str = searchValue.value.toLowerCase()

    if (str.length) {
      return items.value.filter(el => el.text.toLowerCase().indexOf(str) !== -1)
    }

    return items.value
  })
</script>

<template>
  <section class="shop-page main-wrapper">
    <div class="shop-page__header">
      <v-menu
          :close-on-content-click="false"
          transition="scale-transition"
          min-width="200px"
      >
        <template v-slot:activator="{ props }">
          <v-app-bar-nav-icon v-bind="props" /> Все категории
        </template>
        <v-list min-width="200px" content-class="shop-page__list">
          <v-checkbox
              :label="'Категория ' + n"
              v-for="n in 5"
              :key="n"
              density="compact"
          />
        </v-list>
      </v-menu>
    </div>
    <div class="shop-page__items">
      <UiSearchLine
          v-model="searchValue"
          class="mb32"
          placeholder="Поиск"
      />
      <h3>Тип товаров</h3>

      <div class="shop-page__item">
        <ShopCard
          v-for="item in itemsUpdated" :key="item.text"
          :text="item.text"
          :src="item.img"
          @open-modal="openModal = true"
        />
      </div>
    </div>
  </section>

  <v-dialog
      v-model="openModal"
      width="768px"
  >
    <div class="modal-wrapper">
      <h3>Закажите товар или услугу</h3>

      <p class="text">
        Оставьте свои контакты и мы свяжемся с вами в течение дня
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
            v-model="data.phone"
            label="Ваш номер телефона"
            required
            placeholder="+ 7 999 99 99 99"
            class="mb32"
        />
      </div>

      <UiSelect
          v-model="data.usluga"
          label="Услуга или товар"
          :options="[...UslugiList.map(el => el.title), ...items.map(el => el.text)]"
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

      <div class="btn-wrapper mt16">
        <Button primary>Оставить заявку</Button>
        <div class="description">
          Оставляя заявку я принимаю условия политики конфиденциальности
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<style lang="scss" scoped>
  .shop-page {
    &__header {
      padding: 17px 0;
      border-bottom: 1px solid #E0E0E0;
    }

    &__items {
      padding: 30px 0 100px;

      h3 {
        color: var(--title-text-color);
        padding-bottom: 32px;
        font-weight: 500;
        font-size: 32px;
        line-height: 40px;
      }
    }

    &__item {
      display: grid;
      grid-template-columns: auto auto auto auto;
      grid-template-rows: auto auto;
      grid-auto-flow: row;
      gap: 32px;
    }

    .v-overlay__content {
      padding: 0 20px;
    }

    @media (max-width: 1124px) {
      &__item {
        grid-template-columns: auto auto auto;
      }
    }

    @media (max-width: 991px) {
      &__item {
        grid-template-columns: auto auto;
        gap: 20px;
      }
    }

    @media (max-width: 540px) {
      &__item {
        grid-template-columns: auto auto;
      }
    }

    @media (max-width: 414px) {
      &__item {
        grid-template-columns: auto;
      }
    }
  }

  .modal-wrapper {
    :deep(textarea) {
      height: 90px;
    }
  }
</style>
