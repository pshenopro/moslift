<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

interface Props {
  label: string,
  options: any[],
  placeholder?: string
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="select">
    <label class="select-label" v-html="label" />
    <v-layout>
      <v-select
          class="ui-select"
          bg-color="transparent"
          color="#171717"
          :items="options"
          :placeholder="placeholder"
          :persistent-hint="true"
          @update:modelValue="emit('update:model-value', $event)"
      />
    </v-layout>
  </div>
</template>

<style lang="scss">
.v-layout {
  width: 100%;
}

.select {
  display: flex;
  flex-direction: column;
  width: 100%;

  &-label {
    color: var(--title-text-color);
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
}

.ui-select {
  border-color: #E5E5E5 !important;
  width: 100%;

  &.v-input {
    * {
      background: transparent !important;
    }

    .v-field__input {
      padding-left: 0;
      font-size: 14px;
      color: var(--title-text-color);
    }

    .v-field--variant-filled {
      min-height: 56px;
    }

    .v-field--variant-filled .v-field__outline::before,
    .v-field--variant-underlined .v-field__outline::before {
      border-color: #E5E5E5 !important;
      opacity: 1;
    }

    .v-label.v-field-label {
      visibility: visible !important;
      color: var(--title-text-color);
      font-size: 14px;
      font-weight: 500;
      padding-bottom: 4px;
      padding-left: 0;
      left: 0 !important;
      top: 11px !important;
      --v-field-label-scale: 1;
      --v-field-padding-start: 0;
      opacity: 1 !important;
      transform: none !important;
      transform-origin: 0 0;
    }

    .v-label.v-field-label--floating {
      display: none !important;
    }

    .v-field__outline::after {
      border-color: #A5B4FC !important;
    }
  }
}
</style>
