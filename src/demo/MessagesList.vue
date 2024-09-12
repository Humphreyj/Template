<script setup>
// Components
import ListCard from '@/demo/ListCard.vue'
import Card from '@/components/UI/Card.vue'
// Data
import { messages } from '@/demo/data/demoData'
// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
    <Card container-class="my-2 shadow box-shadow">
        <section>
            <header class="px-3 border-b flex-ic-jb h-14">
                <h4 class="text-xl font-semibold font-display">
                    Recent Messages
                </h4>
                <p>View All</p>
            </header>
            <div class="w-full gap-2 pb-2 flex-col-ic-js">
                <ListCard
                    v-for="message in messages"
                    :key="message.id"
                    :message="message"
                />
            </div>
        </section>
    </Card>
</template>
