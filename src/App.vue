<script setup>
import { RouterView } from 'vue-router'
import Sidedrawer from '@/components/UI/Sidedrawer.vue'
import AppHeader from '@/components/UI/AppHeader.vue'
import PageLayout from '@/components/UI/PageLayout.vue'
</script>

<template>
    <div
        class="bg-appBackground dark:bg-appBackgroundDark flex-is-js h-screen overflow-y-hidden"
    >
        <Sidedrawer />
        <section class="w-full">
            <AppHeader />
            <RouterView v-slot="{ Component, route }">
                <!-- Use a custom transition or fallback to `fade` -->
                <transition :name="route.meta.transition || 'fade'">
                    <component :is="Component" />
                </transition>
            </RouterView>
        </section>
    </div>
</template>

<style scoped></style>
