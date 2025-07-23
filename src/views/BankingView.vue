<script setup lang="ts">
import { onMounted } from 'vue'
// Components
// Pinia
import { useBankingStore } from '@/stores/bankingStore.ts'
import { useProfileStore } from '@/stores/profileStore'
import { storeToRefs } from 'pinia'
import MetricCard from '@/components/cards/MetricCard.vue'
//

const { selectedBankAccount } = storeToRefs(useBankingStore())
const { calculateAPY } = useBankingStore()
const { currentUser, selectedUser } = storeToRefs(useProfileStore())
const { getProfileById } = useProfileStore()

// Utils
// const props = defineProps({})
// const emit = defineEmits()

onMounted(async () => {
    if (currentUser.value && !selectedUser.value) {
        await getProfileById(currentUser.value)
        console.log('Current User Profile:', selectedUser.value)
    }
    if (selectedBankAccount.value.apy) {
        let apy = calculateAPY(
            selectedBankAccount.value.balance,
            selectedBankAccount.value.apy
        )
        console.log('Calculated APY:', apy)
    }
})
</script>

<template>
    <div
        class="w-full max-w-[75rem] mx-auto primary-text px-2 font-display flex-col-ic-js"
    >
        <h1 class="text-2xl font-bold">Banking Dashboard</h1>
        <p class="mt-2">Overview of your banking activities.</p>
        <MetricCard
            metric-title="Account Balance"
            :metric-value="(selectedBankAccount.balance / 100).toFixed(2)"
            metric-type="currency"
        >
            <div v-if="selectedBankAccount.apy" class="flex-col-is-js">
                <p>APY - {{ (selectedBankAccount.apy * 100).toFixed(2) }}%</p>
                <p>
                    Estimated Monthly Earnings -
                    {{
                        (
                            calculateAPY(
                                selectedBankAccount.balance,
                                selectedBankAccount.apy
                            ) / 12
                        ).toFixed(2)
                    }}
                </p>
            </div>
        </MetricCard>
    </div>
</template>
