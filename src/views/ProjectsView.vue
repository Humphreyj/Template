<script setup>
// Components
import Card from '@/components/UI/Card.vue'
import TeamList from '@/components/UI/TeamList.vue'
// const props = defineProps({})
// const emit = defineEmits()

</script>

<template>
    <section class="w-full h-screen flex-col-ic-js px-4">
        <Card>
            <template #card-content>
                <h4 class="w-fit text-2xl">This is the projects view.</h4>
            </template>
        </Card>
        <TeamList />
    </section>
</template>
