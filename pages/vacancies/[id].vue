<script setup>
  import { VacList } from '/constants'
  import { computed } from "@vue/reactivity";

  const route = useRoute()
  const router = useRouter()

  const data = computed(() => VacList.find(el => el.id === route.params.id))
</script>

<template>
  <section class="vacancies-id main-wrapper">
    <template v-if="!data">
      <h2>Ошибка</h2>
    </template>
    <template v-else>
      <div class="back" @click="router.back()">Назад</div>
      <h1>{{ data.title }}</h1>
      <p v-html="data.desc" />
      <Button primary>Откликнуться</Button>
    </template>
  </section>
</template>

<style>
  .vacancies-id.main-wrapper {
    padding: 0 0 64px;

    .back {
      padding-top: 32px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #6366F1;
      cursor: pointer;
    }

    h1 {
      padding: 32px 0;
      font-weight: 800;
      font-size: 36px;
      line-height: 44px;
    }

    p {
      color: var(--primary-text-color);
      font-size: 18px;
      padding-bottom: 32px;

      h6 {
        padding: 20px 0;
        font-size: 20px;
        font-weight: 600;
      }

      ul {
        padding-left: 20px;
        padding-bottom: 30px;

        li {
          font-size: 16px;
        }
      }
    }
  }
</style>
