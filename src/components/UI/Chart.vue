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
    },
    chartOptions: {
        type: Object,
        default: {}
    },
    chartSeries: {
        type: Object,
        default: {}
    }
})



</script>

<template>
    <section class="w-100">
        <Card>
            <apexchart width="280" 
                :type="chartType" 
                :options="chartOptions" 
                :series="chartSeries"
            >
            </apexchart>
        </Card>
    </section>
</template>
