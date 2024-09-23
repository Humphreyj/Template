<script setup>
// Components
import Card from '@/components/UI/Card.vue'
import TextBlock from '@/components/UI/TextBlock.vue'
import Button from '@/components/UI/Button.vue'
import Avatar from '@/components/UI/Avatar.vue'
import Modal from  '@/components/UI/Modal.vue'
// Icons
import { Cog6ToothIcon } from '@heroicons/vue/24/outline'

// Utils
import { getStyles } from '@/composables/getStyles'

// Pinia
import { useModalStore } from '@/stores/modalStore';
import { storeToRefs } from 'pinia'
const { changeTeamMember } = useModalStore();
const {memberSettingsModal} = storeToRefs(useModalStore())

const props = defineProps({
    containerClass: {
        type: String,
        default: 'w-1/2',
    },
    iconClass: {
        type: String,
        default: '',
    },
}) 

const title = 'Team List'
const team = [
    {
        name: 'Dill',
        title: 'Dumbass',
        img: "https://fastly.picsum.photos/id/832/200/200.jpg?hmac=V4CRQyK7KVP2wBYsEhpcpP8wSdwyU5c-yTeMm37uOOo",
    },
    {
        name: 'Pickle',
        title: 'Trash Annihalator',
        img: "https://www.gravatar.com/avatar/3b3be63a4c2a439b013787725dfce802?d=identicon"
    },
    {
        name: 'Brandy',
        title: 'Goblin',
        img: "https://fastly.picsum.photos/id/832/200/200.jpg?hmac=V4CRQyK7KVP2wBYsEhpcpP8wSdwyU5c-yTeMm37uOOo"

    },
    
]
const openModal = (member) => {
    changeTeamMember(member)
    // toggleSettingsModal()
    memberSettingsModal.value.toggle()
}
const classes = getStyles(props, 'textBlock')
</script>
<template>
    <section class="w-100">
        <Card>
            <section class="m-2 flex-col-js w-100">
                <TextBlock 
                    :text-content="title" 
                    content-class="text-2xl font-bold text-left"
                />
                <section class="flex flex-row items-center h-20" v-for="member in team">
                    <Avatar 
                        :username="member.name"
                        :avatar-img="member.img"
                    />
                    <TextBlock
                        :label="member.name"
                        :text-content="member.title"
                        label-class="font-bold text-left text-black-600 opacity-1"
                        content-class="text-xs"
                    />
                    <div class="flex flex-row items-center justify-end">
                        
                        <Button 
                            text="&#x2709"
                        />
                        <slot name="icon">
                            <Cog6ToothIcon class="cursor-pointer size-6" @click="openModal(member)"/>
                        </slot>
                        
                    </div>
                </section>
                
            </section>
        </Card>
    </section>
</template>