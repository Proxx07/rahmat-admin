<script setup lang="ts">
import logo from '@/assets/rahmat-logo.svg?raw';
import VIcon from '@/components/UI/VIcon.vue';
import { useThemeMode } from '@/composables/UI';

const { isDark } = useThemeMode();
</script>

<template>
  <div class="app-inner">
    <header class="colspan-2">
      <VIcon :icon="logo" no-fill />
    </header>
    <aside :class="[isDark && 'dark']">
      <nav>
        {NAVIGATION}
      </nav>
    </aside>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.app-inner {
  display: grid;
  grid-template-columns: 31rem auto;
  grid-template-rows: auto 1fr;

  width: 100%;
  position: relative;
  overflow: hidden;
  max-height: 100dvh;
  min-height: 100dvh;
}
header, aside {
  padding: 2rem;
}
header {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.06);
}

aside {
  background: var(--secondary-500);
  &.dark {
    background: var(--p-zinc-800);
  }
}

main {
  padding-bottom: 2rem;
  margin: 2rem 2rem 0;
  position: relative;
  overflow: hidden;
}
</style>
