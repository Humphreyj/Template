<script setup>
// Components

const props = defineProps({
    avatarImg: {
        type: String,
        default: '',
    },
    avatarClass: {
        type: String,
        default: 'rounded-full mr-2 bg-white w-20'
    }, 
    avatarAlt: {
        type: String,
        default: 'profile picture'
    },
    userName: {
        type: String,
        default: ''
    }
})


</script>

<template>
    <section class="mr-2 text-center text-black ">
        <img v-if="avatarImg"
            :src="avatarImg" 
            :alt="avatarAlt"
            :class="avatarClass"
        >
        <h2 v-else
         :class="avatarClass + ' text-black text-center w-14'"
        >
        NU
        </h2>
    </section>
</template>