<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <v-card class="vCard">
    <v-layout>
      <v-navigation-drawer
          expand-on-hover
          rail
      >
        <v-list>
          <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              subtitle="sandra_a88@gmailcom"
              title="Sandra Adams"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-email-arrow-left" title="Почта" value="mail" @click="router.push('/mail')" />
          <v-list-item prepend-icon="mdi-account-hard-hat" title="Профиль" value="profile" @click="router.push('/profile')" />
          <v-list-item prepend-icon="mdi-account-multiple" title="Роли" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Избранное" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<style scoped>
  .vCard {
    z-index: 999;
  }
</style>
