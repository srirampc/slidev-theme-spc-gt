<script setup lang="ts">
import { computed } from 'vue'
import { handleBackgroundNC } from '../layoutHelper'

const props = defineProps({
  background: {
    // Resolved by Vite via new URL so the theme-bundled asset is served correctly
    default: new URL('../assets/cover-background.png', import.meta.url).href
  },
  presenterName: { type: String },
  affiliation: { type: String },
  extra: { type: String },
})
const style = computed(() => handleBackgroundNC(props.background, false))
</script>

<template>
  <div class="slidev-layout cover" :style="style">
    <!-- GT cover art has a horizontal rule ~10% from the top; anchor content
         below it (py-10 + mt-16) instead of my-auto centering, so a long
         title never overlaps the line. -->
    <div class="mt-16 w-full pl-70 text-right">
      <slot />

      <h4 class="mt-8">{{ presenterName }}</h4>
      <div class="opacity-50" style="font-size: 15px;">
        {{ affiliation }}
      </div>
      <div class="mt-8" style="font-size: 15px;">
        <slot name="extra">{{ extra }}</slot>
      </div>
    </div>
  </div>
</template>
