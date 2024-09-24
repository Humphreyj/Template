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
const emit = defineEmits(['handle-submit'])

const handleSubmit = (e) => {
    e.preventDefault()
    let currentDate = new Date()
    userData.value.created_at = currentDate.toISOString()
    emit('handle-submit', userData.value)
}
</script>

<template>
    <Card container-class="w-11/12 gap-1 p-4 mx-auto min-w-60">
        <section class="w-full gap-1 p-4 mx-auto flex-col-ic-js">
            <h4 class="my-2 title-text">{{ formTitle }}</h4>
            <TextInput
                v-model="userData.name"
                label="User Name"
                input-class="min-w-60"
            />
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
