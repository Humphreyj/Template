<script setup>
// Components
import Card from '@/components/UI/Card.vue'
import OrderListCard from './OrderListCard.vue'
import MobileOrderListCard from './MobileOrderListCard.vue'
import OrderForm from './OrderForm.vue'
// Pinia
import { storeToRefs } from 'pinia'
import { useOrderStore } from '@/stores/ordersStore'
// Assets
// Utils

// const props = defineProps({})
// const emit = defineEmits()
const { activeOrders, selectedOrder } = storeToRefs(useOrderStore())
const { handleOrderSelect } = useOrderStore()

const selectOrder = (order) => {
    selectOrder.value = null
    handleOrderSelect(order)
}
</script>

<template>
    <main
        class="relative grid w-full gap-4 px-2 pt-8 mx-auto md:grid-cols-3 primary-text"
    >
        <Card card-title="Active Orders" container-class="md:col-span-2">
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
                    v-for="order in activeOrders"
                    :key="order.id"
                    :order="order"
                    @select-order="selectOrder"
                />
                <MobileOrderListCard
                    v-for="(order, i) in activeOrders"
                    :key="i"
                    :order="order"
                />
            </section>
        </Card>
        <Card
            card-title="Order Details"
            container-class="hidden md:inline-block "
        >
            <section class="flex-col-ic-js">
                <OrderForm
                    v-if="selectedOrder"
                    :selectedOrder="selectedOrder"
                />
                <h3 v-else class="primary-text">
                    Select an order to view details
                </h3>
            </section>
        </Card>
    </main>
</template>
