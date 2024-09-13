<script setup>
// Components
import ProfileDetailsCard from '@/components/profile/ProfileDetailsCard.vue'
// Pinia
import { storeToRefs } from 'pinia'
import { usePrimaryStore } from '../../stores/primaryStore'
// const props = defineProps({})
// const emit = defineEmits()

const { sampleUser } = storeToRefs(usePrimaryStore())
</script>

<template>
    <div class="w-full">
        <ProfileDetailsCard :user="sampleUser" />
    </div>
</template>
