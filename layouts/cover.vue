<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground, handleBackgroundNC, resolveAssetUrl } from '../layoutHelper'
import BottomLogoGtExt from '../components/bottom-logo-gt-ext.vue';
import LogoGtExt from '../components/logo-gt-ext.vue';

const props = defineProps({
  background: {
    // Resolved by Vite via new URL so the theme-bundled asset is served correctly
    default: new URL('../assets/cover-background.png', import.meta.url).href
  },
  presenterName: { type: String },
  affiliation: { type: String },
  extra: { type: String },
  coverMedia: { type: String, default: '' },
  coverMediaType: { type: String, default: '' },
  coverMediaAlt: { type: String, default: '' },
  coverMediaOpacity: { type: [String, Number], default: 1 },
  coverMediaPosition: { type: String, default: 'center' },
  coverMediaClipRadius: { type: String, default: '81%' },
})
// Left-weighted dim: the GT art's gold arc sweeps through the left half where
// the title sits, so fade that side harder (uniform dim left the arc visible
// through the title text). Right side keeps the artwork (and GT logo) visible.
const style = computed(() => ({
  ...handleBackgroundNC(props.background, false),
  //backgroundImage: `linear-gradient(to right, #000c 0%, #0008 45%, #0005 100%), url("${CSS.escape(resolveAssetUrl(props.background))}")`,
}))
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
      <bottom-logo-gt-ext />
    </div>
  </div>
</template>
