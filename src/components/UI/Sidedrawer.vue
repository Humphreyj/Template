<script setup>
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
// Components
// Pinia
import { usePrimaryStore } from '@/stores/primaryStore'
const props = defineProps({
    textClass: {
        type: String,
        default: '',
    },
})
const { showSidebar } = storeToRefs(usePrimaryStore())
const { toggleSidebar } = usePrimaryStore()
const { width } = useWindowSize()

// const emit = defineEmits()
import { getStyles } from '@/composables/getStyles'
const classes = getStyles(props, 'navLink')

const handleNavigation = () => {
    if (width.value < 768) {
        toggleSidebar()
    }
}
watch(width, (newWidth) => {
    if (newWidth > 768) {
        showSidebar.value = true
    } else {
        showSidebar.value = false
    }
})
</script>

<template>
    <transition name="fade">
        <section class="w-max">
            <div
                v-if="showSidebar"
                id="backdrop"
                class="absolute w-screen h-screen md:hidden z-[5] bg-black opacity-45"
                @click="toggleSidebar()"
            ></div>

            <section
                v-if="showSidebar"
                class="w-max h-screen absolute md:relative bg-white dark:bg-sidebarBackgroundDark py-3 px-2 z-10 border-r"
            >
                <h3 class="primary-text font-bold text-xl mb-4">New Client</h3>
                <div class="flex-col-is-js gap-2">
                    <RouterLink
                        to="/"
                        :class="classes.textClass"
                        @click="handleNavigation"
                        >Home</RouterLink
                    >
                    <RouterLink
                        to="/projects"
                        :class="classes.textClass"
                        @click="handleNavigation"
                        >Projects</RouterLink
                    >
                </div>
            </section>
        </section>
    </transition>
</template>
