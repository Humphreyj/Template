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
        default: 'Card Content',
    },
})

const classes = getStyles(props, 'cardStyles')
</script>

<template>
    <div :class="classes.containerClass">
        <div class="flex-ic-jc p-2 w-full">
            <slot>
                <h4 :class="classes.cardTitleText">{{ cardTitleText }}</h4>
            </slot>
        </div>
    </div>
</template>
