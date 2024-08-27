<script setup>
import { storeToRefs } from 'pinia'
// Components
import PageLayout from '@/components/UI/PageLayout.vue'
import Card from '@/components/UI/Card.vue'
import Button from '@/components/UI/Button.vue'
import BasicForm from '@/components/forms/BasicForm.vue'
import TextBlock from '@/components/UI/TextBlock.vue'

// Pinia
import { usePrimaryStore } from '../stores/primaryStore'
// Utils

// const props = defineProps({})
// const emit = defineEmits()

const { sampleUser } = storeToRefs(usePrimaryStore())

const handleFormat = () => {
    let f = format('Hello_World')
    let title = f.title()
    
    let newDate = new Date()
    let d = format(newDate)
    let date = d.date()
    let p = format('1234567890')
    let phone = p.phone()
    let s = format('123456789')
    s.ssn()
}
const output = ref('')
</script>

<template>
    <PageLayout>
        <template #main-content>
            <section class="mt-8 w-10/12 h-dvh">
                <BasicForm form-title="Create User" :data="sampleUser" />
                <Card>
                    <section class="flex-col-ic-js">
                        <TextBlock :text-content="sampleUser.name" />
                        <TextBlock
                            label="Street Address"
                            :text-content="sampleUser.address_line_1"
                        />
                        <TextBlock
                            label="City"
                            :text-content="sampleUser.city"
                        />
                        <TextBlock
                            label="State"
                            :text-content="sampleUser.state"
                        />
                        <TextBlock
                            label="Phone Number"
                            :text-content="sampleUser.phone"
                        />
                        <TextBlock label="SSN" :text-content="sampleUser.ssn" />
                    </section>
                </Card>
            </section>
        </template>
    </PageLayout>
</template>
