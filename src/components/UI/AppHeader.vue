<script setup>
import { getStyles } from '@/composables/getStyles'
// Components
// Routing
import { RouterLink } from 'vue-router'
const props = defineProps({
    textClass: {
        type: String,
        default: '',
    },
})
// const emit = defineEmits()
const classes = getStyles(props, 'navLink')
</script>

<template>
    <section class="flex-ic-jb w-full p-3 border-b border-gray-600 shadow-md">
        <div>
            <div class="size-10 rounded-full bg-blue-500"></div>
        </div>
        <div class="flex-ic-js">
            <RouterLink to="/" :class="classes.textClass">Home</RouterLink>
            <RouterLink to="/projects">Projects</RouterLink>
        </div>
        <div>
            <div class="size-10 rounded-full bg-blue-500"></div>
        </div>
    </section>
</template>
