<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
import { ref } from "@vue/reactivity";

interface Props {
  label: string,
  placeholder?: string,
  required?: boolean,
  icon?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const valueInput = ref('')
</script>

<template>
  <div class="form-field">
    <label for="">
      {{ label }}
      <sup v-if="required" style="color:red">*</sup>
    </label>
    <div class="input">
      <img v-if="icon && !valueInput.length" class="icon" src="/img/address-Icon.svg" />
      <input
          v-model="valueInput"
          type="text"
          :placeholder="placeholder"
          @input="emit('update:model-value', $event.target.value)"
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .form-field {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      color: var(--title-text-color);
      font-size: 14px;
      font-weight: 500;
      padding-bottom: 4px;
    }

    .input {
      position: relative;
      width: 100%;

      .icon {
        bottom: 18px;
        position: absolute;
        left: 0;

        & + input::placeholder {
          padding-left: 20px;
        }
      }

      input {
        width: 100%;
        border: 0;
        outline: 0;
        padding: 12px 0;
        border-bottom: 1px solid #E5E5E5;
        transition: all .3s;

        &:active,
        &:focus-visible {
          border-color: #A5B4FC;
        }
      }
    }
  }
</style>
