<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
// Components
import PageLayout from '@/components/UI/PageLayout.vue'
import Card from '@/components/UI/Card.vue'
import Button from '@/components/UI/Button.vue'
import TextInput from '@/components/inputs/TextInput.vue'
import TextBlock from '@/components/UI/TextBlock.vue'
// Pinia
import { usePrimaryStore } from '../stores/primaryStore'
// Utils
import { format } from '../utils/formatText'
// const props = defineProps({})
// const emit = defineEmits()

const { sampleUser } = storeToRefs(usePrimaryStore())

const handleFormat = () => {
    let f = format('Hello World')
    let title = f.title()
    let newDate = new Date()

    console.log(newDate.toISOString())
}
const output = ref('')
</script>

<template>
    <PageLayout>
        <template #main-content>
            <section class="mt-8 w-10/12 h-dvh">
                <Card containerClass="h-32" />
                <div class="flex-ic-jc mt-8 gap-4">
                    <TextInput label="Test Input" v-model="output" />
                    <div>
                        <TextBlock :text-content="output" />
                    </div>
                </div>
                <div class="flex-ic-jc mt-8 gap-4">
                    <Button @click="handleFormat" />
                    <Button button-type="disabledButton" :disabled="true" />
                    <Button button-type="dangerButton" />
                </div>
            </section>
        </template>
    </PageLayout>
</template>
