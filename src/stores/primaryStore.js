import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePrimaryStore = defineStore('primary', () => {
    const sampleUser = ref({
        name: 'Test Testman',
        address_line_1: '123 Test Drive',
        city: 'Testville',
        state: 'Tx',
        zip: '44343',
        email: 'testman@bestman.com',
        phone: '232-232-3333',
        ssn: '',
        created_at: '2024-08-30T18:14:55.119Z',
    })

    const actions = {}
    const values = {
        sampleUser,
    }
    return { ...actions, ...values }
})
