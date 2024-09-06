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
        default: '',
    },
})

const classes = ref(getStyles(props, 'cardStyles'))
</script>

<template>
    <div :class="classes.containerClass">
        <div class="w-full">
            <slot>
                <h4 :class="classes.cardTitleText">Card Content</h4>
            </slot>
        </div>
    </div>
</template>
