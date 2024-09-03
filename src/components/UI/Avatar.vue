<script setup>
// Components

const props = defineProps({
    avatarImg: {
        type: String,
        default: '',
    },
    avatarClass: {
        type: String,
        default: 'rounded-full mr-2 w-20 bg-white'
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
    <section class="m-2">
        <img v-if="avatarImg"
            :src="avatarImg" 
            :alt="avatarAlt"
            :class="avatarClass"
        >
        <h2 v-else
         :class="avatarClass + ' text-black p-3 w-10/12'"
        >
        NU
        </h2>
    </section>
</template>