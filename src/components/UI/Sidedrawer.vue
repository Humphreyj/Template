<script setup>
import { RouterLink } from 'vue-router'
// Components
const props = defineProps({
    textClass: {
        type: String,
        default: '',
    },
})
// const emit = defineEmits()
import { getStyles } from '@/composables/getStyles'
const classes = getStyles(props, 'navLink')
</script>

<template>
    <section class="w-1/4 h-screen bg-white p-2 z-10 border-r-2">
        <div>
            <div class="size-10 rounded-full bg-blue-500"></div>
        </div>
        <div class="flex-col-is-js">
            <RouterLink to="/" :class="classes.textClass">Home</RouterLink>
            <RouterLink to="/projects" :class="classes.textClass"
                >Projects</RouterLink
            >
        </div>
    </section>
</template>
