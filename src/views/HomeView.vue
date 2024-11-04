<script setup>

import router from '@/router';
// Components

import Button from '@/components/UI/Button.vue'


const goToAdmin = () => {
    router.push('/dashboard'); // Replace '/admin' with the actual route path
}
const goToClient = () => {
    router.push('/client'); // Replace '/admin' with the actual route path
}
</script>

<template>
    <section
        class="w-full max-w-[75rem] mx-auto primary-text px-2 font-display flex-col-ic-js"
    >
        <section class="grid w-1/2 grid-cols-2 gap-2 mt-8">
            <Button text="Client" @click="goToClient"/>
            <Button text="Admin" @click="goToAdmin"/>
            
        </section>
        
    </section>
</template>
