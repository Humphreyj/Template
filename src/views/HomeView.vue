<script setup>
import { ref } from 'vue'
import { useToggle } from '@vueuse/core'
import { storeToRefs } from 'pinia'
// Components
import MetricCard from '@/components/cards/MetricCard.vue'
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
        class="w-full max-w-[75rem] mx-auto primary-text px-2 font-display flex-col-ic-js"
    >
        <section class="w-full gap-2 mt-8 flex-ic-je">
            <MetricCard />
            <MetricCard
                metric-title="Revenue"
                :metric-value="12078"
                metric-type="currency"
            />
        </section>
    </section>
</template>
