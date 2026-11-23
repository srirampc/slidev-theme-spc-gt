<script setup lang="ts">
import { computed } from 'vue'
import { handleBackgroundNC } from '../layoutHelper'

const props = defineProps({
  image: {
    type: String,
  },
  background: {
    // Resolved by Vite via new URL so the theme-bundled asset is served correctly
    default: new URL('../assets/default-background.png', import.meta.url).href
  },
  class: {
    type: String,
  },
  backgroundSize: {
    type: String,
    default: 'cover',
  },
})

const bgStyle = computed(() => handleBackgroundNC(props.background, false))
const imageStyle = computed(() => handleBackgroundNC(props.image, false, props.backgroundSize))
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full auto-rows-fr" :style="bgStyle">
    <div class="slidev-layout default" :class="props.class">
      <slot />
    </div>
    <div class="w-full h-full" :style="imageStyle" />
  </div>
</template>