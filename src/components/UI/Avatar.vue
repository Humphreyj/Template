<script setup>
// Components

const props = defineProps({
    avatarImg: {
        type: String,
        default: 'https://fastly.picsum.photos/id/832/200/200.jpg?hmac=V4CRQyK7KVP2wBYsEhpcpP8wSdwyU5c-yTeMm37uOOo',
    },
    avatarClass: {
        type: String,
        default: 'rounded-full mr-2'
    }
})


</script>

<template>
    <section class="m-2">
        <img 
            :src="avatarImg" 
            alt="profile picture"
            width="50"
            height="50"
            :class="avatarClass"
        >
    </section>
</template>