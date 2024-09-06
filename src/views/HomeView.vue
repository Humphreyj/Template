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
    <section
        class="w-full max-w-[75rem] mx-auto px-4 primary-text font-display flex-col-ic-js"
    >
        <section
            class="grid w-full grid-flow-row-dense grid-cols-2 gap-2 mt-8 md:grid-cols-3"
        >
            <Card>
                <section class="flex-col-ic-js">
                    <h6 class="text-lg">Open Issues</h6>
                    <p class="text-3xl">44</p>
                </section>
            </Card>
            <Card>
                <section class="flex-col-ic-js">
                    <h6 class="text-lg">In Progress</h6>
                    <p class="text-3xl">16</p>
                </section>
            </Card>
            <Card container-class="">
                <section class="flex-col-ic-js">
                    <h6 class="text-lg">Resolved</h6>
                    <p class="text-3xl">22</p>
                </section>
            </Card>
        </section>
    </section>
</template>
