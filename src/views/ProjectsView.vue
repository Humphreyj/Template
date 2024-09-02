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
    <section class="w-11/12 lg:w-1/3 h-dvh flex-col-is-js gap-5">
        <Card>
            <template #card-content>
                <h4 class="w-fit text-2xl">This is the projects view.</h4>
            </template>
        </Card>
        <TeamList />
    </section>
</template>
