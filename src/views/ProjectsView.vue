<script setup>
// Components
import Card from '@/components/UI/Card.vue'
import TeamList from '@/components/UI/TeamList.vue'
import Chart from '@/components/UI/Chart.vue'

// Charts/Graphs
import { barChartOptions } from '@/utils/barGraph.js';
import { barSeries } from '@/utils/barGraph.js';
import { pieChartOptions } from '@/utils/pieGraph.js';
import { pieSeries } from '@/utils/pieGraph.js';
import { progressGraphOptions } from '@/utils/progressGraph.js';
import { progressSeries } from '@/utils/progressGraph.js'
import { progressMethods } from '@/utils/progressGraph.js'
import { barMethods } from '@/utils/barGraph.js'
import { pieMethods } from '@/utils/pieGraph.js'
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
            <Chart 
                chart-type="radialBar"
                :chart-options="progressGraphOptions"
                :chart-series="progressSeries"
            />
            <button @click="progressMethods.update">Update Progress Bar</button>
            <button @click="barMethods.update">Update Bar Chart</button>
            <button @click="pieMethods.update">Update pie Chart</button>


        </section>
    </section>
</template>
