<script setup>
// Components
import PageLayout from '@/components/UI/PageLayout.vue'
import Card from '@/components/UI/Card.vue'
import TeamList from '@/components/UI/TeamList.vue'
// const props = defineProps({})
// const emit = defineEmits()

const text = 'poggers'
</script>

<template>
    <PageLayout>
        <template #main-content>
            <section class="mt-8 w-11/12 md:w-10/12 lg:w-5/12 flex-col-ic-js">
                <Card>
                    <template #card-content>
                        <h4 class="w-fit text-2xl">
                            This is the projects view.
                        </h4>
                    </template>
                </Card>
                <TeamList />
            </section>
        </template>
    </PageLayout>
</template>
