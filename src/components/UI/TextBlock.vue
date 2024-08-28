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
    labelClass: {
        type: String,
        default: 'font-bold text-gray-600 opacity-60'
    },
    contentClass: {
        type: String,
        default: 'font-semibold'
    }
})
// const emit = defineEmits()
</script>

<template>
    <div class="flex-col-is-js">
        <p :class="labelClass" v-if="label">
            {{ label }}
        </p>
        <div class="min-h-6">
            <p :class="contentClass">{{ textContent }}</p>
        </div>
    </div>
</template>
