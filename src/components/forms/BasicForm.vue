<script setup>
import { ref } from 'vue'
// Components
import Card from '@/components/UI/Card.vue'
import TextInput from '@/components/inputs/TextInput.vue'
import Button from '@/components/UI/Button.vue'
import BasicSelect from '@/components/inputs/BasicSelect.vue'
// Data
import states from '@/constants/states'
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
        <section class="w-full gap-1 p-4 flex-col-ic-js">
            <h4 class="my-2 title-text">{{ formTitle }}</h4>
            <TextInput label="User Name" v-model="userData.name" />
            <TextInput
                label="Street Address"
                v-model="userData.address_line_1"
            />
            <TextInput label="City" v-model="userData.city" />
            <BasicSelect
                v-model="userData.state"
                label="State"
                :options="states"
            />
            <TextInput label="Zip" v-model="userData.zip" max-length="5" />
            <TextInput label="Email" v-model="userData.email" />
            <TextInput
                label="Phone Number"
                v-model="userData.phone"
                format="phone"
                max-length="12"
            />
            <Button
                text="Submit"
                button-class="mt-6 bg-green-500"
                @click="($event) => handleSubmit($event)"
            />
        </section>
    </Card>
</template>
