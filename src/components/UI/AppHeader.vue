<script setup>
import { onMounted } from 'vue'
import { getStyles } from '@/composables/getStyles'
import { useDark, useToggle } from '@vueuse/core'
import { useRoute } from 'vue-router'

// Components
import Button from '@/components/UI/Button.vue'
// Routing
import { RouterLink } from 'vue-router'
const props = defineProps({
    textClass: {
        type: String,
        default: '',
    },
})
const route = useRoute()
const isDark = useDark()
const toggleDark = useToggle(isDark)
// const emit = defineEmits()
const classes = getStyles(props, 'navLink')

onMounted(() => {
    console.log(route)
})
</script>

<template>
    <section class="flex-ic-jb px-3 border-b border-gray-600 shadow-md">
        <div class="flex-ic-js gap-2">
            <RouterLink to="/" :class="classes.textClass">Home</RouterLink>
            <RouterLink to="/projects" :class="classes.textClass"
                >Projects</RouterLink
            >
        </div>
        <div>
            <Button
                @click="toggleDark()"
                :text="isDark ? '&#9788;' : '&#9789;'"
            />
        </div>
    </section>
</template>
