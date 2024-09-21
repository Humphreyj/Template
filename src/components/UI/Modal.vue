<script setup>
// Pinia / Store data
import { useModalStore } from '@/stores/modalStore'
import { storeToRefs } from 'pinia'
const { showModal } = storeToRefs(useModalStore())
const { toggleModal } = useModalStore()

// Components
import TextBlock from './TextBlock.vue';
// Utils
import { getStyles } from '@/composables/getStyles'
const props = defineProps({
    textClass: {
        type: String,
        default: '',
    },
    backdropClass: {
        type: String,
        default: '',
    },
    containerClass: {
        type: String,
        default: 'mb-2',
    },
    titleClass: {
        type: String,
        default: '',
    },
    modalContent: {
        type: Object,
        default: {}
    },
    modalContentClass: {
        type: String,
        default: ''
    }
    
})
const classes = getStyles(props, 'modal')

</script>

<template>
    <section class="absolute">
        <div
            v-if="showModal"
            id="backdrop"
            :class="classes.backdropClass"
            @click="toggleModal()"
        ></div>
        <section v-if="showModal" :class="classes.containerClass" >
            <slot></slot>
        </section>
    </section>
</template>