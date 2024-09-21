<script setup>
import { watch, onMounted } from 'vue'
import { getStyles } from '@/composables/getStyles'
import { useDark, useToggle, useWindowSize } from '@vueuse/core'
// Components
import Button from '@/components/UI/Button.vue'
import NotificationModal from '@/components/UI/Modals/NotificationModal.vue'
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
const { width } = useWindowSize()

watch(width, (newWidth) => {
    if (newWidth > 768) {
        showSidebar.value = true
    } else {
        showSidebar.value = false
    }
})

onMounted(() => {
    if (width.value > 768) {
        showSidebar.value = true
    } else {
        showSidebar.value = false
    }
})
</script>

<template>
    <section class="p-2 border-b border-gray-600 shadow-md flex-ic-jb">
        <h3 class="w-full text-xl font-bold primary-text md:hidden">
            New Client
        </h3>
        <div class="w-full gap-1 flex-ic-jend">
            <Button v-if="width < 768" @click="toggleSidebar()" text="Bar" />
            <NotificationModal />
            <Button
                @click="toggleDark()"
                :text="isDark ? '&#9788;' : '&#9789;'"
            />
        </div>
        
    </section>
</template>
