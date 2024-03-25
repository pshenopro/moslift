<script lang="ts" setup>
import { defineEmits, defineProps } from "vue"

interface Props {
  placeholder?: string,
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="input">
    <img src="/img/Icon-search.svg" />
    <input
        class="input-search"
        type="text"
        :placeholder="placeholder"
        @input="emit('update:model-value', $event.target.value)"
    >
  </div>
</template>

<style lang="scss" scoped>
  .input {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;

    img {
      position: absolute;
      left: 10px;
      height: 16px;
      width: 16px;
    }

    &-search {
      width: 100%;
      outline: 0;
      padding: 12px 6px 12px 40px;
      border: 1px solid #E5E5E5;
      transition: all .3s;
      gap: 12px;
      border-radius: 6px;


      &:active,
      &:focus-visible {
        border-color: #A5B4FC;
      }
    }
  }
</style>
