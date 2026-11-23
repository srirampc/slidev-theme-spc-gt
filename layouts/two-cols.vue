<!--
  Theme override of Slidev's built-in two-cols layout, adding
  background support. Markup mirrors the built-in.

  Usage:
```md
---
layout: two-cols
---

# Left

This shows on the left

::right::

# Right

This shows on the right
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
  <div class="slidev-layout two-columns w-full h-full grid grid-cols-2" :class="props.layoutClass" :style="style">
    <div class="col-left" :class="props.class">
      <slot />
      <slot name="left" />
    </div>
    <div class="col-right" :class="props.class">
      <slot name="right" />
    </div>
  </div>
</template>