<script setup>
import { ref } from 'vue'
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

const classes = ref(getStyles(props, 'cardStyles'))
</script>

<template>
    <div :class="classes.containerClass">
        <div class="w-100 ">
            <slot>
                <h4 :class="classes.cardTitleText">{{ cardTitleText }}</h4>
            </slot>
        </div>
    </div>
</template>
