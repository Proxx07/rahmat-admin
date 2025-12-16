<script setup lang="ts">
import { Button, InputGroup, InputGroupAddon, InputText } from 'primevue';
import { computed } from 'vue';
import { selectArrow } from '@/assets/icons';
import VIcon from '@/components/UI/VIcon.vue';

const props = defineProps<{
  title?: string
  search?: string
  backEnabled?: boolean
  bgColor?: string
  textColor?: string
  contentScrollable?: boolean
}>();

const searchQuery = defineModel<string>('search');

const bg = computed<string>(() => props.bgColor ? props.bgColor : 'var(--site-bg)');
const color = computed<string>(() => props.textColor ? props.textColor : 'var(--text-color)');
</script>

<template>
  <div class="page-wrapper">
    <div class="page-header">
      <div class="page-header__left">
        <slot name="header-left">
          <Button label="Назад" severity="secondary" fluid class="h-full" />
        </slot>
      </div>
      <div class="page-header__center">
        <InputGroup>
          <InputGroupAddon>
            <VIcon :icon="selectArrow" color="var(--text-color)" />
          </InputGroupAddon>
          <InputText v-model="searchQuery" placeholder="Поиск" fluid />
        </InputGroup>
      </div>
      <div class="page-header__right">
        <slot name="header-right" />
      </div>
      <h1 v-if="title">
        {{ title }}
      </h1>
    </div>
    <div class="page-content" :class="[contentScrollable && 'scrollable']">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-wrapper {
  color: v-bind(color);
  background: v-bind(bg);
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.page-header {
  gap: 2rem;
  position: relative;
  display: grid;
  grid-template-columns: 2fr 6fr 4fr;
  &__center {
    --p-inputtext-background: var(--secondary-500);
    --p-inputgroup-addon-background: var(--secondary-500);
    --p-inputgroup-addon-min-width: 4.6rem;
    :deep(.p-inputtext) {
      //border: 0 !important;
      //border-block-start: 0;
      //border-block-end: 0;
      box-shadow: none;
      padding-left: .6rem;
    }
  }
  h1 {
    grid-column: span 2;
  }
}
.title {
  flex-grow: 1;
  text-align: center;
  font: var(--font-22-b);
}

.page-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 2rem;
  overflow: hidden;
  &.scrollable {
    overflow-x: hidden;
    overflow-y: auto;
  }
}
/*
.page-footer {
  padding: 1.5rem var(--px) 0;
  color: v-bind(color);
  background: v-bind(bg);
  transition: var(--transition-fast);
  position: relative;
  @include media-max($mobile) {
    padding-top: 1.3rem;
  }
  &.has-content {
    border-radius: var(--radius-l) var(--radius-l) 0 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
    padding-bottom: 1.5rem;
    @include media-max($mobile) {
      padding-bottom: 1.3rem;
    }
  }
}
*/
</style>
