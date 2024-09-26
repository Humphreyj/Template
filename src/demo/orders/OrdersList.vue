<script setup>
// Components
import Card from '@/components/UI/Card.vue'
import OrderListCard from './OrderListCard.vue'
import MobileOrderListCard from './MobileOrderListCard.vue'
// Pinia
import { storeToRefs } from 'pinia'
import { useOrderStore } from '@/stores/ordersStore'
// Assets
// Utils

// const props = defineProps({})
// const emit = defineEmits()
const { activeOrders } = storeToRefs(useOrderStore())
</script>

<template>
    <main class="relative w-full px-2 pt-8 mx-auto primary-text">
        <Card card-title="Active Orders">
            <header
                class="relative font-medium text-xl py-2 mb-2 items-center font-display w-full grid-cols-[0.5fr_1.5fr_1fr_1fr_1fr_1fr] px-2 hidden md:grid"
            >
                <p>Order</p>
                <p>Destination</p>
                <p>Courier</p>
                <p>Date</p>
                <p>Status</p>
                <p>Total</p>
            </header>
            <section class="w-full border-t">
                <OrderListCard
                    v-for="(order, i) in activeOrders"
                    :key="i"
                    :order="order"
                />
                <MobileOrderListCard
                    v-for="(order, i) in activeOrders"
                    :key="i"
                    :order="order"
                />
            </section>
        </Card>
    </main>
</template>
