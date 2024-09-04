<script setup>
import { ref } from 'vue'
import { useToggle } from '@vueuse/core'
import { storeToRefs } from 'pinia'
// Components
import Card from '@/components/UI/Card.vue'

// Pinia
import { usePrimaryStore } from '../stores/primaryStore'
// Utils

// const props = defineProps({})
// const emit = defineEmits()

const { sampleUser } = storeToRefs(usePrimaryStore())
</script>

<template>
    <section class="w-full px-4 primary-text font-display">
        <section class="w-full grid gap-2 grid-cols-3 mt-8">
            <Card>
                <section class="flex-col-ic-js">
                    <h6 class="">Balance</h6>
                    <p class="text-2xl">400.50</p>
                </section>
            </Card>
            <Card>
                <section class="flex-col-ic-js">
                    <h6>Shields</h6>
                    <p class="text-2xl">80%</p>
                </section>
            </Card>
            <Card>
                <section class="flex-col-ic-js">
                    <h6>Current Users</h6>
                    <p class="text-2xl">12</p>
                </section>
            </Card>
        </section>
    </section>
</template>
