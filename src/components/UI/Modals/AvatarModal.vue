<script setup>
import { getStyles } from '@/composables/getStyles'
import router from '@/router'
// Components
import Modal from '@/components/UI/Modal.vue'
import TextBlock from '@/components/UI/TextBlock.vue'

// Pinia
import { storeToRefs } from 'pinia'
import { useModalStore } from '@/stores/modalStore'

// Modal Store

const { avatarModalContent, avatarModal } = storeToRefs(
    useModalStore()
)

// Props
const props = defineProps({
    containerClass: {
        type: String,
        default: '',
    },
})
// Utils
const classes = getStyles(props, 'notificationModal')

// Have this hard coded for now as a proof of concept
const handleNav = (path) => {
    console.log(path)
    router.push('/profiles/details/c847868d-dffb-4d1e-a385-74dd578c46a7')
    
}
</script>

<template>
    <div class="relative">
        <Modal
            container-class="right-12 top-12"
            backdrop-class="w-screen"
            :show-modal="avatarModal.showing"
            :toggle-modal="avatarModal.toggle"
        >
            <TextBlock
                v-for="item in avatarModalContent"
                :text-content="item.content"
                :container-class="classes.containerClass"
                @click="handleNav(item.content)"
            />
        </Modal>
    </div>
</template>
