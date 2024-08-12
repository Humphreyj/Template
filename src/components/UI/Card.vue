<script setup>
// Components
// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
  <div class="border bg-white rounded-lg border-gray-600 shadow w-full">
    <div class="flex-ic-jc p-2">
      <slot name="card-content">
        <h4 class="w-fit text-2xl">Card Content</h4>
      </slot>
    </div>
  </div>
</template>
