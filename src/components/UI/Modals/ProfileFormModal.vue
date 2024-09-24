<script setup>
import { ref } from 'vue'
// Components
import Modal from '../Modal.vue'
import BasicForm from '@/components/forms/BasicForm.vue'
// const props = defineProps({})
// const emit = defineEmits()
const newUser = ref({
    name: '',
    address_line_1: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    phone: '',
    created_at: '',
})
// Pinia
import { storeToRefs } from 'pinia'
import { useModalStore } from '@/stores/modalStore'
const { profileFormModal } = storeToRefs(useModalStore())

// Utils
</script>

<template>
    <Modal
        container-class="absolute h-[44rem] left-1/3 top-10 w-1/2 p-0"
        backdrop-class="w-screen bg-black opacity-50 "
        :show-modal="profileFormModal.showing"
        :toggle-modal="profileFormModal.toggle"
    >
        <BasicForm form-title="Add User" :data="newUser" />
    </Modal>
</template>
