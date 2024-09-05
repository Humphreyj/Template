<script setup>
import { ref } from 'vue'
import { getStyles } from '@/composables/getStyles'

// Components
import Card from '@/components/UI/Card.vue'
const props = defineProps({
    containerClass: {
        type: String,
        default: '',
    },
    cardTitleText: {
        type: String,
        default: '',
    },
    chartType: {
        type: String,
        default: 'bar'
    }
})

const chartOptions= {
    chart: {
        id: props.chartType
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        labels: {
            style: {
                colors: '#ffffff',
                fontSize: ''
            }
        }
    },
    dataLabels: {
        style: {
            colors: ['#ffffff']
        }
    }
}
const series = [{
    name: 'series-1',
    data: [30, 40, 45, 50, 49, 60, 70, 91]
}]

</script>

<template>
    <section class="w-100">
        <Card>
            <apexchart width="250" :type="chartType" :options="chartOptions" :series="series"></apexchart>
        </Card>
    </section>
</template>
