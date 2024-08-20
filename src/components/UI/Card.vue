<script setup>
import { getStyles } from '@/composables/getStyles'
// Components
const props = defineProps({
    containerClass: {
        type: String,
        default: '',
    },
    cardTitleText: {
        type: String,
        default: '',
    },
})
// const emit = defineEmits()

const classes = getStyles(props, 'cardStyles')
</script>

<template>
    <div :class="classes.containerClass">
        <div class="flex-ic-jc p-2">
            <slot name="card-content">
                <h4 :class="classes.cardTitleText">Card Content</h4>
            </slot>
        </div>
    </div>
</template>
