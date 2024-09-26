<script setup>
// Components
import Avatar from '@/components/UI/Avatar.vue'
import Card from '@/components/UI/Card.vue'
import ListCard from '@/components/UI/ListCard.vue'
import TextBlock from '@/components/UI/TextBlock.vue'
// Pinia
import { storeToRefs } from 'pinia'
import { useOrderStore } from '@/stores/ordersStore'
// Assets
import { EllipsisVerticalIcon } from '@heroicons/vue/24/solid'
// Utils
import { handleFormat } from '@/utils/formatText'
// const props = defineProps({})
// const emit = defineEmits()
const { activeOrders } = storeToRefs(useOrderStore())
console.log(activeOrders.value)
</script>

<template>
    <main
        class="relative w-full max-w-[75rem] primary-text mx-auto pt-8 px-2 flex-col-is-js gap-4"
    >
        <Card card-title="Active Orders">
            <header
                class="relative font-medium text-lg mb-2 items-center font-display w-full grid-cols-[0.5fr_1.5fr_1fr_1fr_1fr_1fr] px-2 hidden md:grid"
            >
                <p>Order</p>
                <p>Destination</p>
                <p>Courier</p>
                <p>Date</p>
                <p>Status</p>
                <p>Total</p>
            </header>
            <section class="w-full gap-3 flex-col-is-js">
                <ListCard
                    v-for="(order, i) in activeOrders"
                    :key="i"
                    class="hidden md:inline-block"
                >
                    <div
                        class="relative grid items-start font-content w-full grid-cols-[0.5fr_1.5fr_1fr_1fr_1fr_1fr]"
                    >
                        <p class="font-bold w-min">{{ order.number }}</p>
                        <p class="w-11/12">
                            {{ handleFormat(order.destination, 'address') }}
                        </p>
                        <div class="gap-1 flex-ic-js w-max">
                            <Avatar
                                :username="order.courier.name"
                                avatar-class="size-8"
                            />
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
                <ListCard
                    v-for="(order, i) in activeOrders"
                    :key="i"
                    class="md:hidden"
                >
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
                                    handleFormat(
                                        order.scheduled_delivery,
                                        'date'
                                    )
                                "
                                label-class="font-bold text-left text-black-600 opacity-1"
                            />
                        </div>

                        <div class="w-full gap-1 flex-is-js">
                            <TextBlock
                                label="Courier"
                                :text-content="
                                    handleFormat(order.destination, 'address')
                                "
                                label-class="font-bold text-left text-black-600 opacity-1"
                            >
                                <div class="gap-1 flex-ic-js">
                                    <Avatar
                                        :username="order.courier.name"
                                        avatar-class="size-8"
                                    />
                                    <p>{{ order.courier.name }}</p>
                                </div>
                            </TextBlock>
                            <TextBlock
                                label="Destination"
                                :text-content="
                                    handleFormat(order.destination, 'address')
                                "
                                label-class="font-bold text-left text-black-600 opacity-1"
                            />
                        </div>
                        <div class="w-full gap-1 flex-is-js">
                            <TextBlock
                                label="Status"
                                :text-content="
                                    handleFormat(order.status, 'title')
                                "
                                label-class="font-bold text-left text-black-600 opacity-1"
                            />
                            <TextBlock
                                label="Total"
                                :text-content="
                                    handleFormat(order.order_total, 'currency')
                                "
                                label-class="font-bold text-left text-black-600 opacity-1"
                            />
                        </div>
                    </div>
                </ListCard>
            </section>
        </Card>
    </main>
</template>
