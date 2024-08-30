<script setup>
import { ref } from 'vue'
import { useToggle } from '@vueuse/core'
import { storeToRefs } from 'pinia'
// Components
import PageLayout from '@/components/UI/PageLayout.vue'
import BasicForm from '@/components/forms/BasicForm.vue'
import Button from '@/components/UI/Button.vue'
import ProfileDetailsCard from '@/components/profile/ProfileDetailsCard.vue'

// Pinia
import { usePrimaryStore } from '../stores/primaryStore'
// Utils

// const props = defineProps({})
// const emit = defineEmits()
const editingProfile = ref(false)
const toggleEditing = useToggle(editingProfile)

const { sampleUser } = storeToRefs(usePrimaryStore())
</script>

<template>
    <PageLayout>
        <template #main-content>
            <section class="mt-8 w-11/12 h-dvh flex-col-ic-js gap-5">
                <Button @click="toggleEditing()" text="Toggle Edit" />
                <BasicForm v-if="editingProfile" :data="sampleUser" />
                <ProfileDetailsCard v-else :user="sampleUser" />
            </section>
        </template>
    </PageLayout>
</template>
