<script setup>
import { watch, onMounted } from 'vue'
import { getStyles } from '@/composables/getStyles'
import { useDark, useToggle, useWindowSize } from '@vueuse/core'
// Components
import Button from '@/components/UI/Button.vue'
import Modal from '@/components/UI/Modal.vue'
// Pinia
import { storeToRefs } from 'pinia'
import { usePrimaryStore } from '@/stores/primaryStore'
import { useModalStore } from '@/stores/modalStore'
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
const { dropdownModalContent } = storeToRefs(useModalStore())
const { toggleModal } = useModalStore()
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
            <div>
                <Button 
                    text='&#128276;'
                    @click="toggleModal()"
                />
                <span
                    v-if="dropdownModalContent.length > 0"
                    class="absolute top-0 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full right-10"
                    >
                    {{ dropdownModalContent.length }}
                </span>
                <Modal 
                    container-class="-left-48"
                    modal-content-class="p-1 mb-2 border-b-2 rounded-md cursor-pointer hover:bg-black hover:bg-opacity-20 hover:dark:bg-white hover:dark:bg-opacity-20"
                    :modal-content="dropdownModalContent"
                />
            </div>
            <Button
                @click="toggleDark()"
                :text="isDark ? '&#9788;' : '&#9789;'"
            />
        </div>
        
    </section>
</template>
