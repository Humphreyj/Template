<script setup>
// Components
import ListCard from '@/demo/ListCard.vue'
import Card from '@/components/UI/Card.vue'
// Data
import { messages } from '@/demo/data/demoData'
// Utils
import { handleFormat } from '@/utils/formatText'
// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
    <Card container-class="px-2 my-2 border-none shadow box-shadow">
        <section class="primary-text">
            <header class="px-3 border-b flex-ic-jb h-14">
                <h4 class="text-xl font-semibold font-display">
                    Manage Profiles
                </h4>
                <p>View All</p>
            </header>
            <div class="w-full gap-2 py-3 flex-col-ic-js">
                <ListCard
                    v-for="message in messages"
                    :key="message.id"
                    :message="message"
                >
                    <div
                        class="w-full px-3 py-2 shadow dark:shadow-slate-600 dark:shadow-sm flex-is-jb"
                    >
                        <div
                            class="grid w-full grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-2"
                        >
                            <p class="font-bold">{{ message.from }}</p>
                            <p class="row-start-2 w-max justify-self-start">
                                {{ message.subject }}
                            </p>
                            <div
                                class="col-span-2 row-start-3 md:col-start-2 md:col-end-4 md:row-start-2"
                            >
                                <p class="">
                                    {{ `${message.body.substring(0, 25)}...` }}
                                </p>
                            </div>
                        </div>
                        <!-- <p class="hidden md:inline-block">{{ project }}</p> -->
                        <p class="">{{ handleFormat(message.date, 'date') }}</p>
                    </div>
                </ListCard>
            </div>
        </section>
    </Card>
</template>
