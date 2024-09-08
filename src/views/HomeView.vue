<script setup>
import { ref } from 'vue'
import { useToggle } from '@vueuse/core'
import { storeToRefs } from 'pinia'
// Components
import MetricCard from '@/components/cards/MetricCard.vue'
import Card from '@/components/UI/Card.vue'
import Chart from '@/components/UI/Chart.vue'
// Pinia
import { usePrimaryStore } from '../stores/primaryStore'
// Utils
import { barChartOptions } from '@/utils/barGraph.js'
import { barSeries } from '@/utils/barGraph.js'
import { pieChartOptions } from '@/utils/pieGraph.js'
import { pieSeries } from '@/utils/pieGraph.js'

// const props = defineProps({})
// const emit = defineEmits()

const { sampleUser } = storeToRefs(usePrimaryStore())
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
            <section>
                <header class="px-2 border-b flex-ic-js h-14">
                    <h4 class="text-xl font-semibold font-display">
                        Recent Activity
                    </h4>
                </header>
                <div class="w-full gap-2 py-2 my-1 flex-col-ic-js">
                    <div
                        v-for="i in 5"
                        class="bg-gray-200 h-14 w-[98%] rounded-md mx-auto flex-ic-js dark:bg-slate-700"
                    ></div>
                </div>
            </section>
        </Card>
    </section>
</template>
