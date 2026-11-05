<!--
  Theme override of Slidev's built-in two-cols-header layout, adding
  background support (the built-in has none). Markup mirrors the built-in.

  Usage:
```md
---
layout: two-cols-header
background: /img/optional-override.png   # defaults to the theme asset
---
This spans both
::left::
# Left
::right::
# Right
::bottom::
This shows at the bottom
```
-->

<script setup lang="ts">
import { computed } from 'vue'
import { handleBackgroundNC } from '../layoutHelper'

const props = defineProps({
  background: {
    // Resolved by Vite via new URL so the theme-bundled asset is served correctly
    default: new URL('../assets/default-background.png', import.meta.url).href
  },
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
})
const style = computed(() => handleBackgroundNC(props.background, false))
</script>

<template>
  <div class="slidev-layout two-cols-header w-full h-full" :class="layoutClass" :style="style">
    <div class="col-header">
      <slot />
    </div>
    <div class="col-left" :class="props.class">
      <slot name="left" />
    </div>
    <div class="col-right" :class="props.class">
      <slot name="right" />
    </div>
    <div class="col-bottom" :class="props.class">
      <slot name="bottom" />
    </div>
  </div>
</template>

<style scoped>
.two-cols-header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr auto;
}

.col-header {
  grid-area: 1 / 1 / 2 / 3;
}
.col-left {
  grid-area: 2 / 1 / 3 / 2;
}
.col-right {
  grid-area: 2 / 2 / 3 / 3;
}
.col-bottom {
  align-self: end;
  grid-area: 3 / 1 / 3 / 3;
}
</style>
