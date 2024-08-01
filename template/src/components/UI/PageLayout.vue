<script setup>
// Components

// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
  <main class="flex-col-ic-jc w-screen">
    <slot name="top-content">
      <section class="w-11/12 mx-auto bg-gray-300"></section>
    </slot>
    <section class="flex-col-ic-js w-11/12 mx-auto h-dvh bg-gray-200">
      This is a main content section
    </section>
    <section class="flex-ic-jc w-full border-t h-28">
      This will be a footer
    </section>
  </main>
</template>
