import { ref } from 'vue'
import { defineStore } from 'pinia'

import { useToggle } from '@vueuse/core'

export const useModalStore = defineStore('modalStore', () => {
  const showModal = ref(false)
  const toggleModal = useToggle(showModal)
  const dropdownModalContent = ref(
    [
        {
            titleText: 'Messages',
            content: 'You have 6 new messages'
        },
        {
            titleText: 'Orders',
            content: 'There are 3 new orders'
        }
      ]
  )
  const actions = {
    toggleModal,
  }
  const values = {
    showModal,
    dropdownModalContent
  }
  return { ...actions, ...values }
})