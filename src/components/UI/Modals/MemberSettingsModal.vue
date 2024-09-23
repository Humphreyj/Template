<script setup>
// Components
import Modal from  '@/components/UI/Modal.vue'
import TextBlock from '@/components/UI/TextBlock.vue'

// Pinia
import { storeToRefs } from 'pinia';
import { useModalStore } from '@/stores/modalStore';
const modalStore = useModalStore();
const { toggleSettingsModal } = modalStore;
const { showSettingsModal } = storeToRefs(modalStore)
const { selectedTeamMember } = storeToRefs(modalStore)

// Utils
</script>

<template>
    <div class="">
        <Modal 
            container-class="-left-32 -ml-8 mt-10 h-32 w-[20rem]"
            backdrop-class="w-screen h-[200rem] bg-black opacity-50 lg:-inset-x-96 -ml-[11.75rem] md:-inset-x-[27]"
            :show-modal="showSettingsModal"
            :toggle-modal="toggleSettingsModal"
        >
            <TextBlock
                :label="'Name: ' + selectedTeamMember.name"
                :text-content="'Title: ' + selectedTeamMember.title"
                container-class=""
            /> 
        </Modal>
    </div>
</template>