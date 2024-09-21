import { ref } from 'vue'
import { defineStore } from 'pinia'

import { useToggle } from '@vueuse/core'

export const useModalStore = defineStore('modalStore', () => {
  const showModal = ref(false)
  const toggleModal = useToggle(showModal)
  // Array of objects to pass into the Modal component so that it can stay dynamic
  // This implementation of the modal is in AppHeader to handle the notification dropdown
  const notificationModalContent = ref(
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
    notificationModalContent
  }
  return { ...actions, ...values }
})