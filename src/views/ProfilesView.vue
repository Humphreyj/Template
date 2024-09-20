<script setup>
import { RouterView, RouterLink } from 'vue-router'
// Components
import Card from '@/components/UI/Card.vue'
import Button from '@/components/UI/Button.vue'
// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
    <Card
        container-class="w-11/12 max-w-[75rem] mx-auto primary-text px-2 mt-8 font-display flex-col-ic-js"
    >
        <section class="w-full gap-8 py-8 flex-ic-jc primary-text">
            <RouterLink to="/profiles" class="border-none">
                <Button text="View List" />
            </RouterLink>
            <RouterLink to="/profiles/new" class="border-none">
                <Button text="New User" />
            </RouterLink>
        </section>
    </Card>
    <RouterView />
</template>
