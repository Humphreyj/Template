<script setup>
import { computed } from 'vue'
// Assets
import imageUpload from '@/assets/imageUpload.svg'

const props = defineProps({
    avatarImg: {
        type: String,
        default: '',
    },
    avatarClass: {
        type: String,
        default:
            'flex items-center justify-center mx-auto rounded-full shrink-0 ring-1 size-14 ring-gray-cool-300 dark:bg-gray-700',
    },
    avatarAlt: {
        type: String,
        default: 'profile picture',
    },
    username: {
        type: String,
        default: '',
    },
})

const avatarText = computed(() => {
    let result = ''
    let split = props.username?.split(' ')
    let first = split[0].charAt(0).toUpperCase()
    let last = split[1].charAt(0).toUpperCase()
    result = `${first}${last}`
    return result
})
</script>

<template>
    <section :class="avatarClass">
        <img
            v-if="avatarImg"
            :src="avatarImg"
            :alt="avatarAlt"
            class="w-full h-full rounded-full"
        />
        <h2
            v-else-if="!avatarImg && username"
            data-test="avatar-text"
            class="primary-text flex-ic-jc dark:bg-slate-800"
            :class="avatarClass"
        >
            {{ avatarText }}
        </h2>
        <img
            v-else
            :src="imageUpload"
            class="rounded-full"
            @error="handleImageError"
        />
    </section>
</template>
