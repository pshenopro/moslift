<script lang="ts" setup>
  import { defineProps, defineEmits } from 'vue'

  interface Props {
    src: string,
    text: string
  }

  defineProps<Props>()
  const emit = defineEmits(['openModal'])
</script>

<template>
  <div class="item-card">
    <img :src="'img/' + src" />

    <div class="item-card__text">
      <h6>{{ text }}</h6>

      <Button second small @click="emit('openModal')">Заказать</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .item-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 280px;
    border: 1px solid #E5E5E5;
    border-radius: 8px;
    box-shadow: 0px 1px 2px 0px #1018280D;
    overflow: hidden;

    &__text {
      padding: 8px 20px 16px;
    }

    h6 {
      color: #6366F1;
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      padding-bottom: 16px;
    }
  }
</style>
