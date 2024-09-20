<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

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
        default: 'text-left',
    },
    titleClass: {
        type: String,
        default: '',
    },
    titleText: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: ''
    },
    modalContentClass: {
        type: String,
        default: ''
    },
    modalContent: {
        type: Object,
        default: {}
    }
    
})
const classes = getStyles(props, 'modal')

</script>

<template>
    <section class="absolute w-max right-100">
        <div
            v-if="showModal"
            id="backdrop"
            :class="classes.backdropClass"
            @click="toggleModal()"
        ></div>
        <section v-if="showModal" :class="classes.containerClass" >
            <TextBlock v-for="item in modalContent"
                :label="item.titleText"
                :text-content="item.content"
                :label-class="titleClass"
                :container-class="modalContentClass"
                
            />
        </section>
    </section>
</template>