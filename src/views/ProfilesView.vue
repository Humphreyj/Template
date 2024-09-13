<script setup>
import { RouterView, RouterLink } from 'vue-router'
// Components
import Card from '@/components/UI/Card.vue'
import Button from '@/components/UI/Button.vue'
// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
    <div
        class="w-full max-w-[75rem] mx-auto primary-text px-2 pt-8 font-display flex-col-ic-js"
    >
        <Card>
            <section class="flex-ic-jc primary-text w-full">
                <RouterLink to="/profiles/new">
                    <Button text="New User" />
                </RouterLink>
            </section>
        </Card>
        <RouterView />
    </div>
</template>
