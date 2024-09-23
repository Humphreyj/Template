import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modalStore', () => {
    const handleModal = (isShowing) => {
        const showing = ref(isShowing ?? false)
        const toggle = () => {
            showing.value = !showing.value
        }
        const show = () => {
            showing.value = true
        }
        const hide = () => {
            showing.value = false
        }

        return {
            showing,
            toggle,
            show,
            hide,
        }
    }

    const memberSettingsModal = ref(handleModal(false))
    const notificationModal = ref(handleModal(false))
    const showNotifModal = ref(false)

    // Array of objects to pass into the Modal component so that it can stay dynamic
    // This implementation of the modal is in AppHeader to handle the notification dropdown
    const notificationModalContent = ref([
        {
            titleText: 'Messages',
            content: 'You have 6 new messages',
        },
        {
            titleText: 'Orders',
            content: 'There are 3 new orders',
        },
    ])

    const changeTeamMember = (member) => {
        selectedTeamMember.value.name = member.name
        selectedTeamMember.value.title = member.title
    }
    const selectedTeamMember = ref({
        name: '',
        title: '',
    })
    const actions = {
        toggleNotifModal,
        toggleSettingsModal,
        changeTeamMember,
    }
    const values = {
        showNotifModal,
        showSettingsModal,
        notificationModalContent,
        memberSettingsModal,
        notificationModal,
        selectedTeamMember,
    }
    return { ...actions, ...values }
})
