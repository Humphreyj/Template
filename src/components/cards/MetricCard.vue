<script setup>
// Components
import Card from '@/components/UI/Card.vue'
// Icons
import { Cog6ToothIcon } from '@heroicons/vue/24/outline'
// Utils
import { handleFormat } from '@/utils/formatText'
const props = defineProps({
    metricTitle: {
        type: String,
        default: 'Metric Title',
    },
    metricValue: {
        type: [String, Number],
        default: 'Metric Value',
    },
    metricType: {
        type: String,
        default: 'text',
    },
})
// const emit = defineEmits()
</script>

<template>
    <Card
        container-class="w-full cursor-pointer drop-shadow-md hover:drop-shadow-lg"
    >
        <section class="gap-2 py-4 pl-2 pr-1 min-h-32 min-w-40 flex-col-is-js">
            <div class="w-full flex-ic-jb">
                <h6 class="text-lg font-semibold font-display drop-shadow-sm">
                    {{ metricTitle }}
                </h6>
                <slot name="icon">
                    <Cog6ToothIcon class="-mt-1 cursor-pointer size-6" />
                </slot>
            </div>
            <p class="mb-1 text-3xl font-bold font-content">
                {{ handleFormat(metricValue, metricType) }}
            </p>
            <div class="p-1 text-xs text-white rounded-xl bg-primary-400">
                Status
            </div>
        </section>
    </Card>
</template>
