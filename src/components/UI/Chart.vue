<script setup>
import { ref } from 'vue'
import { getStyles } from '@/composables/getStyles'
import { Chart, Responsive, Pie, Tooltip } from 'vue3-charts'

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
})
const plByMonth = [
  { name: 'Jan', pl: 1000, avg: 500, inc: 300 },
  { name: 'Feb', pl: 2000, avg: 900, inc: 400 },
  { name: 'Apr', pl: 400, avg: 400, inc: 500 },
  { name: 'Mar', pl: 3100, avg: 1300, inc: 700 },
  { name: 'May', pl: 200, avg: 100, inc: 200 },
  { name: 'Jun', pl: 600, avg: 400, inc: 300 },
  { name: 'Jul', pl: 500, avg: 90, inc: 100 }
]

const classes = getStyles(props, 'cardStyles')
const title = "Pie Chart"
</script>

<template>
    <Card :cardTitleText="title">
        <Responsive class="w-full border p-2">
            <template #main="{ width }">
            <Chart
                direction="circular"
                :size="{ width: width, height: Math.min(width * 0.75, 400) }"
                :data="plByMonth"
                :margin="{
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }"
                
                :config="{ controlHover: false }"
                >
                <template #layers>
                    <Pie
                        :dataKeys="['name', 'pl']"
                        :pie-style="{ innerRadius: 55, padAngle: .02, cornerRadius: 2 }" 
                    />
                </template>
                <template #widgets>
                    <Tooltip
                        :config="{
                        name: { },
                        avg: { hide: true},
                        pl: { label: 'value' },
                        inc: { hide: true }
                        }"
                        hideLine
                    />
                </template>
            </Chart>
            </template>
        </Responsive>
    </Card>
</template>
