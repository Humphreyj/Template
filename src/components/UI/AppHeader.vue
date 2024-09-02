<script setup>
import { watch } from 'vue'
import { getStyles } from '@/composables/getStyles'
import { useDark, useToggle, useWindowSize } from '@vueuse/core'
// Components
import Button from '@/components/UI/Button.vue'
// Pinia
import { storeToRefs } from 'pinia'
import { usePrimaryStore } from '@/stores/primaryStore'
const props = defineProps({
    textClass: {
        type: String,
        default: '',
    },
})
const isDark = useDark()
const toggleDark = useToggle(isDark)
const { showSidebar } = storeToRefs(usePrimaryStore())
const { toggleSidebar } = usePrimaryStore()
const { width, height } = useWindowSize()

watch(width, () => {
    console.log(width.value)
    if (width.value > 768) {
        showSidebar.value = true
    } else {
        showSidebar.value = false
    }
})
</script>

<template>
    <section class="flex-ic-jb p-2 border-b border-gray-600 shadow-md">
        <h3 class="primary-text font-bold w-full md:hidden text-xl">
            New Client
        </h3>
        <div class="flex-ic-jend w-full gap-1">
            <Button v-if="width < 768" @click="toggleSidebar()" text="Bar" />
            <Button
                @click="toggleDark()"
                :text="isDark ? '&#9788;' : '&#9789;'"
            />
        </div>
    </section>
</template>
