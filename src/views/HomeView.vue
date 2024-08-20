<script setup>
// Components
import PageLayout from '@/components/UI/PageLayout.vue'
import Card from '@/components/UI/Card.vue'
// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
    <PageLayout>
        <template #main-content>
            <section class="mt-8 w-10/12 h-dvh">
                <Card containerClass="bg-red-500" />
            </section>
        </template>
    </PageLayout>
</template>
