<script setup>
import { ref } from 'vue'
import { getStyles } from '@/composables/getStyles'
// Components
const props = defineProps({
    label: {
        type: String,
        default: 'Input Label',
    },
    containerClass: {
        type: String,
        default: '',
    },
    labelClass: {
        type: String,
        default: '',
    },
    inputClass: {
        type: String,
        default: '',
    },
    inputName: {
        type: String,
        default: 'default-input',
    },
})
// const emit = defineEmits()
const classes = ref(getStyles(props, 'textInput'))
</script>

<template>
    <div :class="classes.containerClass">
        <label :for="inputName" :class="classes.labelClass">{{ label }}</label>
        <input
            :name="inputName"
            :v-model="modelValue"
            type="text"
            :class="classes.inputClass"
        />
    </div>
</template>
