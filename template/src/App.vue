<script setup>
import { RouterView } from "vue-router";
import AppHeader from "@/components/UI/AppHeader.vue";
import PageLayout from "@/components/UI/PageLayout.vue";
</script>

<template>
  <div class="bg-gray-100">
    <AppHeader />
    <RouterView v-slot="{ Component, route }">
      <!-- Use a custom transition or fallback to `fade` -->
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style scoped></style>
