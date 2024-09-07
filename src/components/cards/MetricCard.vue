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
    <Card container-class="w-full drop-shadow-md hover:drop-shadow-xl">
        <section class="gap-2 px-2 py-4 min-h-32 min-w-40 flex-col-is-js">
            <div class="w-full flex-ic-jb">
                <h6 class="text-lg">{{ metricTitle }}</h6>
                <slot name="icon">
                    <Cog6ToothIcon class="-mt-1 cursor-pointer size-6" />
                </slot>
            </div>
            <p class="my-1 text-3xl">
                {{ handleFormat(metricValue, metricType) }}
            </p>
            <div class="p-1 text-sm text-white rounded-xl bg-primary-400">
                Status
            </div>
        </section>
    </Card>
</template>
