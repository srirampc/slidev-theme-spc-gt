<script setup lang="ts">
import { computed } from 'vue'
import { handleBackgroundNC } from '../layoutHelper'
const props = defineProps({
  background: {
    // Resolved by Vite via new URL so the theme-bundled asset is served correctly
    default: new URL('../assets/section-slide-background.jpg', import.meta.url).href
  },
})
const style = computed(() => handleBackgroundNC(props.background, false))
</script>

<template>
  <div class="slidev-layout intro" :style="style">
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>
