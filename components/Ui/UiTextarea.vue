<script lang="ts" setup>
import { defineProps, defineEmits, ref } from 'vue'

interface Props {
  label: string,
  placeholder?: string,
  countSize?: number,
  cols?: string,
  required?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const textArea = ref('')
</script>

<template>
  <div class="form-field">
    <div v-if="countSize" class="form-textarea-count">
      {{ textArea.length }}/{{ countSize }}
    </div>
    <label for="">{{ label }} <sup v-if="required" style="color:red">*</sup></label>
    <textarea
        v-model="textArea"
        placeholder="Текст обращения..."
        :maxlength="countSize"
        :cols="cols || 10"
        @input="emit('update:model-value', $event.target.value)"
    />
  </div>
</template>

<style lang="scss" scoped>
.form-field {
  position: relative;
  display: flex;
  flex-direction: column;

  label {
    color: var(--title-text-color);
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 4px;
  }

  textarea {
    outline: none;
    height: 155px;
    padding: 10px 50px 8px 12px;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0px 1px 2px 0px #1018280D;
    border: 1px solid #E5E5E5;
    resize: none;
    transition: all .3s;

    &:active,
    &:focus-visible {
      border-color: #A5B4FC;
    }
  }

  .form-textarea-count {
    position: absolute;
    right: 10px;
    top: 30px;
    color: #71717A;
    font-size: 12px;
  }
}
</style>
