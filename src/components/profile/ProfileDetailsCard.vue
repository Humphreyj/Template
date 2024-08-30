<script setup>
import { ref, onMounted } from 'vue'
// Components
import Card from '@/components/UI/Card.vue'
import TextBlock from '@/components/UI/TextBlock.vue'
// Utils
import { handleFormat } from '@/utils/formatText'
const props = defineProps({
    user: {
        type: Object,
        default: {
            name: '',
            address_line_1: '',
            city: '',
            state: '',
            phone: '',
            ssn: '',
        },
    },
})
const address = ref('')
onMounted(() => {
    address.value = handleFormat(props.user, 'address')
})
</script>

<template>
    <Card container-class="md:w-1/2 lg:w-1/3">
        <section class="flex-col-ic-jc w-full">
            <div class="rounded-full size-20 bg-gray-400"></div>
            <TextBlock
                :text-content="user.name"
                content-class="text-2xl my-2"
            />
            <TextBlock label="Address" :text-content="address" />

            <TextBlock label="Phone Number" :text-content="user.phone" />
            <TextBlock
                label="Created"
                :text-content="handleFormat(user.created_at, 'date', false)"
            />
        </section>
    </Card>
</template>
