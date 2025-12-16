<script setup lang="ts">
import { Button } from 'primevue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import PageWrapper from '@/components/UI/PageWrapper.vue';

const $router = useRouter();

const search = ref<string>('');
</script>

<template>
  <PageWrapper v-model:search="search" title="Meню">
    {PAGE_CONTENT} {{ search }}
    <br>
    <Button label="Check router transition" size="large" @click="$router.push({ name: 'status', params: { type: 'approved' } })" />
  </PageWrapper>
</template>

<style scoped lang="scss">

</style>
