<script setup>
// Components
const props = defineProps({
    label: {
        type: String,
        default: null,
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
        <p class="font-bold text-gray-600 opacity-60" v-if="label">
            {{ label }}
        </p>
        <div class="min-h-6">
            <p class="font-semibold">{{ textContent }}</p>
        </div>
    </div>
</template>
