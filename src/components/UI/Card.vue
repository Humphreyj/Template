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
        <div class="w-full">
            <header v-if="cardTitle" class="px-2">
                <h4 :class="classes.cardTitleClass">
                    {{ cardTitle }}
                </h4>
            </header>
            <slot> </slot>
        </div>
    </div>
</template>
