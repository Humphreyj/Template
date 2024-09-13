<script setup>
// Components
import MetricCard from '@/components/cards/MetricCard.vue'
import Card from '@/components/UI/Card.vue'

import MessagesList from '@/demo/MessagesList.vue'
// Pinia

// Utils
// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
    <section
        class="w-full max-w-[75rem] mx-auto primary-text px-2 font-display flex-col-ic-js"
    >
        <section class="grid w-full grid-cols-2 gap-2 mt-8 md:grid-cols-4">
            <MetricCard
                metric-title="Visitors"
                :metric-value="12078"
                metric-type="number"
            />
            <MetricCard
                metric-title="Revenue"
                :metric-value="12078"
                metric-type="currency"
            />
            <MetricCard
                metric-title="Active Users"
                :metric-value="1245"
                metric-type="number"
            />
            <MetricCard
                metric-title="New Accounts"
                :metric-value="53"
                metric-type="number"
            />
        </section>

        <Card container-class="mt-2">
            <section class="flex-col-is-js md:flex-ic-js md:flex-row">
                <MessagesList />
            </section>
        </Card>
    </section>
</template>
