<script setup>
// Components
import PageLayout from '@/components/UI/PageLayout.vue'
import Card from '@/components/UI/Card.vue'
import Button from '@/components/UI/Button.vue'
// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
    <PageLayout>
        <template #main-content>
            <section class="mt-8 w-10/12 h-dvh">
                <Card containerClass="h-32" />
                <div class="flex-ic-jc mt-8 gap-4">
                    <Button />
                    <Button button-type="disabledButton" :disabled="true" />
                    <Button button-type="dangerButton" />
                </div>
                <div class="flex-ic-jc mt-8 gap-4">
                    <Button button-class="text-2xl" />
                    <Button
                        button-class="text-2xl"
                        button-type="disabledButton"
                        disabled
                    />
                    <Button
                        button-class="text-2xl"
                        button-type="dangerButton"
                    />
                </div>
            </section>
        </template>
    </PageLayout>
</template>
