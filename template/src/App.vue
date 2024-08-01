<script setup>
import { RouterView } from "vue-router";
import AppHeader from "@/components/UI/AppHeader.vue";
import PageLayout from "@/components/UI/PageLayout.vue";
</script>

<template>
  <div class="bg-gray-100">
    <AppHeader />
    <RouterView />
  </div>
</template>
