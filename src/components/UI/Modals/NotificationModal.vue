<script setup>
// Components
import Modal from '@/components/UI/Modal.vue'
import TextBlock from '@/components/UI/TextBlock.vue'
import Button from '@/components/UI/Button.vue'

// Pinia
import { storeToRefs } from 'pinia'
import { useModalStore } from '@/stores/modalStore'

// Modal Variables
const { notificationModalContent } = storeToRefs(useModalStore())
const { toggleModal } = useModalStore()
</script>

<template>
    <div>
        <Button 
            text='&#128276;'
            @click="toggleModal()"
        />
        <span
            v-if="notificationModalContent.length > 0"
            class="absolute top-0 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full right-10"
            >
            {{ notificationModalContent.length }}
        </span>
        <Modal 
            container-class="-left-48"
            
        >
            <TextBlock v-for="item in notificationModalContent"
                :label="item.titleText"
                :text-content="item.content"
                container-class="p-1 mb-2 border-b-2 rounded-md cursor-pointer hover:bg-black hover:bg-opacity-20 hover:dark:bg-white hover:dark:bg-opacity-20"
            /> 
        </Modal>
    </div>
</template>