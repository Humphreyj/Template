<script setup>
// Components
import Card from '@/components/UI/Card.vue'
import TeamList from '@/components/UI/TeamList.vue'
import Chart from '@/components/UI/Chart.vue'
// const props = defineProps({})
// const emit = defineEmits()
import { barChartOptions } from '@/utils/barGraph.js';
import { barSeries } from '@/utils/barGraph.js';
import { pieChartOptions } from '@/utils/pieGraph.js';
import { pieSeries } from '@/utils/pieGraph.js';
</script>

<template>
    <section 
        class="w-full max-w-[75rem] mx-auto primary-text px-2 font-display flex-col-ic-js"
    >
        <section class="grid w-full grid-cols-1 gap-2 mt-8 md:grid-cols-3">
            <TeamList />
            <Chart 
                chart-type="bar"
                :chart-options="barChartOptions"
                :chart-series="barSeries"
            />
            <Chart 
                chart-type="pie"
                :chart-options="pieChartOptions"
                :chart-series="pieSeries.data"
            />
        </section>
    </section>
</template>
