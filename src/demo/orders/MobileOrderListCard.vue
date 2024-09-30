<script setup>
// Components
import ListCard from '@/components/UI/ListCard.vue'
import TextBlock from '@/components/UI/TextBlock.vue'

// Assets

// Utils
import { handleFormat } from '@/utils/formatText'
const props = defineProps({
    order: {
        type: Object,
        required: true,
    },
})
// const emit = defineEmits()
</script>

<template>
    <ListCard class="md:hidden">
        <div
            class="relative items-start w-full gap-3 flex-col-is-js font-content"
        >
            <div class="w-full flex-is-js">
                <TextBlock
                    label="Order"
                    :text-content="order.number"
                    label-class="font-bold text-left text-black-600 opacity-1"
                />
                <TextBlock
                    label="Date"
                    :text-content="
                        handleFormat(order.scheduled_delivery, 'date')
                    "
                    label-class="font-bold text-left text-black-600 opacity-1"
                />
            </div>

            <div class="w-full gap-1 flex-is-js">
                <TextBlock
                    label="Courier"
                    :text-content="order.courier.name"
                    label-class="font-bold text-left text-black-600 opacity-1"
                />
                <TextBlock
                    label="Destination"
                    :text-content="handleFormat(order.destination, 'address')"
                    label-class="font-bold text-left text-black-600 opacity-1"
                />
            </div>
            <div class="w-full gap-1 flex-is-js">
                <TextBlock
                    label="Status"
                    :text-content="handleFormat(order.status, 'title')"
                    label-class="font-bold text-left text-black-600 opacity-1"
                />
                <TextBlock
                    label="Total"
                    :text-content="handleFormat(order.order_total, 'currency')"
                    label-class="font-bold text-left text-black-600 opacity-1"
                />
            </div>
        </div>
    </ListCard>
</template>
