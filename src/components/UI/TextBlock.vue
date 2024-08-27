<script setup>
// Components
const props = defineProps({
    label: {
        type: String,
        default: 'Label',
    },
    textContent: {
        type: String,
        default: 'Text Content',
    },
})
// const emit = defineEmits()
</script>

<template>
    <div class="flex-col-is-js">
        <p>{{ label }}</p>
        <p>{{ textContent }}</p>
    </div>
</template>
