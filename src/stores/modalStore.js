import { ref } from 'vue'
import { defineStore } from 'pinia'

import { useToggle } from '@vueuse/core'

export const useModalStore = defineStore('modalStore', () => {
  const showNotifModal = ref(false);
  //const toggleNotifModal = useToggle(showNotifModal);
  const toggleNotifModal = () => {
    showNotifModal.value = !showNotifModal.value  
  }
  const showSettingsModal = ref(false)
  //const toggleSettingsModal = useToggle(showSettingsModal)
  const toggleSettingsModal = () => {
    showSettingsModal.value = !showSettingsModal.value
  }
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

  const changeTeamMember = (member) => {
    console.log(member)
    selectedTeamMember.value.name = member.name
    selectedTeamMember.value.title = member.title
    console.log(selectedTeamMember.value)
  }
  const selectedTeamMember = ref({
    name: '',
    title: ''
  })
  const actions = {
    toggleNotifModal,
    toggleSettingsModal,
    changeTeamMember
  }
  const values = {
    showNotifModal,
    showSettingsModal,
    notificationModalContent, 
    selectedTeamMember
  }
  return { ...actions, ...values }
})