<script setup>
// Components
import { CheckCircleIcon } from '@heroicons/vue/20/solid'
const props = defineProps({
    message: {
        type: Object,
    },
})
// Utils
import { handleFormat } from '@/utils/formatText'
// const emit = defineEmits()

const gridClass =
    'relative grid items-center w-full h-16 grid-cols-2 grid-rows-2 px-2 py-4 mx-auto text-lg font-semibold border rounded-lg shadow md:gird-rows-1 box-shadow border-slate-500 md:py-2 font-content dark:bg-slate-700'
const subgrid =
    'grid row-span-2 md:grid-rows-auto md:row-span-1 grid-rows-subgrid'

const { from, subject, body, date } = props.message
</script>

<template>
    <div
        class="w-full p-2 shadow dark:shadow-slate-600 dark:shadow-sm flex-is-jb"
    >
        <div
            class="grid w-full grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-2"
        >
            <p class="font-bold">{{ from }}</p>
            <p class="row-start-2 w-max justify-self-start">
                {{ subject }}
            </p>
            <div
                class="col-span-2 row-start-3 md:col-start-2 md:col-end-4 md:row-start-2"
            >
                <p class="">
                    {{ `${body.substring(0, 25)}...` }}
                </p>
            </div>
        </div>
        <!-- <p class="hidden md:inline-block">{{ project }}</p> -->
        <p class="">{{ handleFormat(date, 'date') }}</p>
    </div>
</template>
