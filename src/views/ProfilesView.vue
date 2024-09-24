<script setup>
import { RouterView, useRoute } from 'vue-router'
import router from '@/router'
// Components
// Assets
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/solid'
// const props = defineProps({})
// const emit = defineEmits()
const route = useRoute()

const goBack = () => {
    router.push({ name: 'Manage Profiles' })
}
</script>

<template>
    <main class="relative">
        <ArrowLeftCircleIcon
            v-if="route.name !== 'Manage Profiles'"
            class="absolute mt-2 left-4 size-8 primary-text"
            @click="goBack"
        />
        <RouterView />
    </main>
</template>
