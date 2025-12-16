<script setup lang="ts">
import logo from '@/assets/rahmat-logo.svg?raw';
import VIcon from '@/components/UI/VIcon.vue';
</script>

<template>
  <div class="app-inner">
    <header class="colspan-2">
      <VIcon :icon="logo" no-fill />
    </header>
    <aside>
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
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.06);
}

aside {
  background: var(--secondary-500);
}

main {
  padding-bottom: 2rem;
  margin: 2rem 2rem 0;
  position: relative;
  overflow: hidden;
}
</style>
