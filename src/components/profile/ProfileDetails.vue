<script setup>
import { onBeforeMount } from 'vue'
// Components
import ProfileDetailsCard from '@/components/profile/ProfileDetailsCard.vue'
// Pinia
import { storeToRefs } from 'pinia'
import { useProfileStore } from '../../stores/profileStore'
// Routing
import { useRoute } from 'vue-router'
// const props = defineProps({})
// const emit = defineEmits()
const route = useRoute()

const { selectedUser } = storeToRefs(useProfileStore())
const { getProfileById } = useProfileStore()

onBeforeMount(() => {
    if (!selectedUser.value) {
        getProfileById(route.params.id)
    }
})
</script>

<template>
    <div class="w-11/12 pt-12 mx-auto">
        <ProfileDetailsCard :user="selectedUser" />
    </div>
</template>
