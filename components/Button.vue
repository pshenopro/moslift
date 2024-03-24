<script lang="ts" setup>
import { defineProps } from 'vue'

interface Props {
    primary?: boolean
    second?: boolean,
    third?: boolean,
    small?: boolean,
    bg?: string,
    color?: string
    remove?: boolean
}

const props = defineProps<Props>()

</script>

<template>
    <v-btn
        :outlined="second"
        :class="{
            'primary': primary,
            'second': second,
            'outlined': second,
            'small': small,
            'third': third,
            'remove': remove,
            'head-btn': true
        }"
        :style="{
          [bg ? 'background-color' : '']: bg || '',
          [color ? 'color' : '']: color || ''
        }"
        flat
    >
        <slot />
    </v-btn>
</template>

<style lang="scss" scoped>
    body {
        .v-btn {
            padding: 12px 20px;
            border-radius: 6px;
            line-height: 24px;
            font-size: 16px;
            font-weight: 500;
            font-family: inter;
            height: auto !important;
            width: auto;
            text-indent: unset;
            letter-spacing: normal;
            min-width: auto;
            text-transform: none;
            border: 1px solid var(--primary-color);
            color: black;
            transition: all .3s;

            &:hover {
                background: var(--primary-hover) !important;
            }

            &:active {
                background: var(--primary-active) !important;
            }
        }

        .v-btn.primary {
            background: var(--primary-color);
        }

        .v-btn.second {
            color: var(--primary-text-color);
        }
        .v-btn.third {
            background: #fff;
            color: var(--primary-text-color);
            border-color: transparent;
        }

        .v-btn.small {
            padding: 6px 12px;
            font-size: 12px;
            line-height: 20px;
        }

      .v-btn.remove {
        border: 1px solid #c01c1cfc;

        &:hover {
          color: #fff;
          background: #c01c1cfc !important;
        }
      }
    }
</style>
