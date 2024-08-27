import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePrimaryStore = defineStore('primary', () => {
    const sampleUser = ref({
        name: 'Test Testman',
        address: '123 Test Drive',
    })

    const actions = {}
    const values = {
        sampleUser,
    }
    return { ...actions, ...values }
})
