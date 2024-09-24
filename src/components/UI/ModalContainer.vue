<script setup>
// Components
import MemberSettingsModal from '@/components/UI/Modals/MemberSettingsModal.vue'
import ProfileFormModal from './Modals/ProfileFormModal.vue'
// Pinia

// const props = defineProps({})

// const emit = defineEmits()
</script>

<template>
    <div class="absolute hidden">
        <Teleport to="#modals">
            <MemberSettingsModal />
            <ProfileFormModal />
        </Teleport>
    </div>
</template>
