<script setup>
import { ref } from 'vue'
// Components
import Card from '@/components/UI/Card.vue'
import TextInput from '@/components/inputs/TextInput.vue'
import Button from '@/components/UI/Button.vue'
const props = defineProps({
    formTitle: {
        type: String,
        default: 'Form Title',
    },
    data: {
        type: Object,
        default: {},
    },
})

const userData = ref(props.data)
// const emit = defineEmits()

const handleSubmit = (e) => {
    e.preventDefault()
    let currentDate = new Date()
    userData.value.created_at = currentDate.toISOString()
    console.log(userData.value)
}
</script>

<template>
    <Card>
        <section class="flex-col-ic-js w-full">
            <h4 class="font-bold text-xl">{{ formTitle }}</h4>
            <TextInput label="User Name" v-model="userData.name" />
            <TextInput
                label="Street Address"
                v-model="userData.address_line_1"
            />
            <TextInput label="City" v-model="userData.city" />
            <TextInput label="State" v-model="userData.state" />
            <TextInput label="Phone Number" v-model="userData.phone" />
            <TextInput label="SSN" v-model="userData.ssn" />
            <Button
                text="Submit"
                button-class="mt-6 bg-green-500"
                @click="($event) => handleSubmit($event)"
            />
        </section>
    </Card>
</template>
