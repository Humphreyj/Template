<script setup>
// Components
import Card from '@/components/UI/Card.vue'
// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
    <Card container-class="mt-2 shadow box-shadow">
        <section>
            <header class="px-3 border-b flex-ic-jb h-14">
                <h4 class="text-xl font-semibold font-display">
                    Recent Messages
                </h4>
                <p>View All</p>
            </header>
            <div class="w-full gap-2 pb-2 flex-col-ic-js">
                <div
                    class="relative grid items-center w-full h-16 grid-cols-5 px-3 mx-auto font-bold border-b border-slate-500 font-display"
                >
                    <p>From</p>
                    <p>Project</p>
                    <p>Subject</p>
                    <p>Date</p>
                    <p>Read</p>
                </div>
                <div
                    v-for="i in 3"
                    class="border shadow box-shadow text-lg border-slate-500 py-2 relative h-16 w-[99%] font-semibold font-content rounded-lg mx-auto grid grid-cols-5 items-center justify-between px-2 dark:bg-slate-700"
                >
                    <p>User Name</p>
                    <p>Project</p>
                    <p>Subject</p>
                    <p>Date</p>
                    <p>Read</p>
                    <input
                        type="checkbox"
                        name=""
                        id=""
                        class="absolute right-10"
                    />
                </div>
            </div>
        </section>
    </Card>
</template>
