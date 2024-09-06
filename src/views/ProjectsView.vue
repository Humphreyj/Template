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
    <section class="w-full h-screen px-4 flex-col-ic-js">
        <Card>
            <template #card-content>
                <h4 class="text-2xl w-fit">This is the projects view.</h4>
            </template>
        </Card>
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
</template>
