<script setup>
// Components
import Modal from '@/components/UI/Modal.vue'
import TextBlock from '@/components/UI/TextBlock.vue'
// Pinia
import { storeToRefs } from 'pinia'
import { useModalStore } from '@/stores/modalStore'
const { selectedTeamMember, memberSettingsModal } = storeToRefs(useModalStore())

// Utils
</script>

<template>
    <Modal
        container-class="inset-80 absolute h-32 w-[20rem]"
        backdrop-class="w-screen bg-black opacity-50 "
        :show-modal="memberSettingsModal.showing"
        :toggle-modal="memberSettingsModal.toggle"
    >
        <TextBlock
            :label="'Name: ' + selectedTeamMember.name"
            :text-content="'Title: ' + selectedTeamMember.title"
            container-class=""
        />
    </Modal>
</template>
