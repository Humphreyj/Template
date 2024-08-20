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
                <Card>
                    <template #card-content>
                        <h4 class="w-fit text-2xl">
                            This is the projects view.
                        </h4>
                    </template>
                </Card>
            </section>
        </template>
    </PageLayout>
</template>
