import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePrimaryStore = defineStore('primary', () => {
    const sampleUser = ref({
        name: 'Test Testman',
        address_line_1: '123 Test Drive',
        city: '',
        state: '',
        phone: '',
        ssn: '',
        created_at: null,
    })

    const actions = {}
    const values = {
        sampleUser,
    }
    return { ...actions, ...values }
})
