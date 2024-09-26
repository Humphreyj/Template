<script setup>
// Components
import ListCard from '@/components/UI/ListCard.vue'
import TextBlock from '@/components/UI/TextBlock.vue'
import Avatar from '@/components/UI/Avatar.vue'
// Assets
import { EllipsisVerticalIcon } from '@heroicons/vue/24/solid'
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
    <main></main>
    <ListCard class="hidden md:inline-block">
        <div
            class="relative grid items-baseline font-content w-full grid-cols-[0.5fr_1.5fr_1fr_1fr_1fr_1fr]"
        >
            <p class="font-bold w-min">{{ order.number }}</p>
            <p class="w-11/12">
                {{ handleFormat(order.destination, 'address') }}
            </p>
            <div class="gap-1 flex-ic-js w-max">
                <Avatar :username="order.courier.name" avatar-class="size-8" />
                <p>{{ order.courier.name }}</p>
            </div>
            <p>
                {{ handleFormat(order.scheduled_delivery, 'date') }}
            </p>
            <p>{{ handleFormat(order.status, 'title') }}</p>
            <p>
                {{ handleFormat(order.order_total, 'currency') }}
            </p>

            <EllipsisVerticalIcon
                class="absolute primary-text size-8 right-2"
            />
        </div>
    </ListCard>
</template>
