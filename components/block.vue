<script setup lang="ts">
const props = defineProps({
    title: { type: String },
})
</script>

<template>
    <div class="block">
    <span v-if="title" class="block-title">{{ title }}</span>
        <slot></slot>
    </div>
</template>