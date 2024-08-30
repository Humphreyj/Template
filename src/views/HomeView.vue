<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
// Components
import PageLayout from '@/components/UI/PageLayout.vue'
import BasicForm from '@/components/forms/BasicForm.vue'
import ProfileDetailsCard from '@/components/profile/ProfileDetailsCard.vue'

// Pinia
import { usePrimaryStore } from '../stores/primaryStore'
// Utils

// const props = defineProps({})
// const emit = defineEmits()

const { sampleUser } = storeToRefs(usePrimaryStore())
</script>

<template>
    <PageLayout>
        <template #main-content>
            <section class="mt-8 w-10/12 h-dvh">
                <BasicForm form-title="Create User" :data="sampleUser" />
                <ProfileDetailsCard :user="sampleUser" />
            </section>
        </template>
    </PageLayout>
</template>
