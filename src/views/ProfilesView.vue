<script setup>
import { RouterView, useRoute } from 'vue-router'
import router from '@/router'
// Components
// Assets
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/outline'
// const props = defineProps({})
// const emit = defineEmits()
const route = useRoute()

const goBack = () => {
    router.push({ name: 'Manage Profiles' })
}
</script>

<template>
    <main class="relative w-full max-w-[75rem] px-2">
        <ArrowLeftCircleIcon
            v-if="route.name !== 'Manage Profiles'"
            class="absolute mt-2 cursor-pointer left-4 size-8 primary-text"
            @click="goBack"
        />
        <RouterView />
    </main>
</template>
