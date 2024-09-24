<script setup>
// Components
import MemberSettingsModal from '@/components/UI/Modals/MemberSettingsModal.vue'
// Pinia

// const props = defineProps({})

// const emit = defineEmits()
</script>

<template>
    <div class="absolute hidden">
        <Teleport to="#modals">
            <MemberSettingsModal />
        </Teleport>
    </div>
</template>
