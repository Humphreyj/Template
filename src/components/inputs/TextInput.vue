<script setup>
import { ref } from 'vue'
import { getStyles } from '@/composables/getStyles'
// Components
const props = defineProps({
    modelValue: {
        type: String,
        default: 'Default Text',
    },
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
const emit = defineEmits(['update:modelValue'])
const classes = ref(getStyles(props, 'textInput'))
</script>

<template>
    <div :class="classes.containerClass">
        <label :for="inputName" :class="classes.labelClass">{{ label }}</label>
        <input
            :name="inputName"
            :value="modelValue"
            type="text"
            :class="classes.inputClass"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>
