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
        <section class="w-full gap-2 flex-ic-je mt-8">
            <Card>
                <section class="flex-col-ic-js">
                    <h6 class="text-lg">Ammunition</h6>
                    <p class="text-3xl">54%</p>
                </section>
            </Card>
            <Card>
                <section class="flex-col-ic-js">
                    <h6 class="text-lg">Shields</h6>
                    <p class="text-3xl">80%</p>
                </section>
            </Card>
            <Card>
                <section class="flex-col-ic-js">
                    <h6 class="text-lg">Fuel</h6>
                    <p class="text-3xl">44%</p>
                </section>
            </Card>
        </section>
        <Card container-class="w-full mt-2">
            <section class="flex-col-ic-js">
                <h6 class="text-lg">Snacks</h6>
                <p class="text-3xl">4</p>
            </section>
        </Card>
    </section>
</template>
