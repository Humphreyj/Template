import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBankingStore = defineStore('banking', () => {
    const accountTypes = ['savings', 'checking', 'credit', 'loan'] as const
    type AccountType = (typeof accountTypes)[number]
    interface BankAccount {
        id: string
        accountNumber: string
        accountType: AccountType
        userId: string
        balance: number // Balance in cents
        apy?: number // Annual Percentage Yield, optional for some accounts
        createdAt: string
        updatedAt: string
    }

    const defaultAccount: BankAccount = {
        id: crypto.randomUUID(),
        accountNumber: crypto.randomUUID(),
        accountType: accountTypes[1],
        userId: 'c847868d-dffb-4d1e-a385-74dd578c46a7',
        balance: 1000000,
        apy: 0.06, // Example APY of 2%
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }

    const selectedBankAccount = ref<BankAccount>(defaultAccount)

    const calculateAPY = (
        balance: number,
        apy: number,
        increment: number = 12
    ) => {
        const monthlyRate = apy / increment
        const compoundInterest = balance * (1 + monthlyRate) ** increment
        return (compoundInterest - balance) / 100
    }
    const actions = {
        calculateAPY,
    }
    const values = {
        selectedBankAccount,
    }
    return { ...actions, ...values }
})
