<script setup>
// Components
import Card from '@/components/UI/Card.vue'
import TextBlock from '@/components/UI/TextBlock.vue'
import Button from '@/components/UI/Button.vue'
// const props = defineProps({})
// const emit = defineEmits()

const title = 'Team List'
const team = [
    {
        name: 'Dill',
        title: 'Dumbass'
    },
    {
        name: 'Pickle',
        title: 'Trash Annihalator'
    },
    {
        name: 'Brandy',
        title: 'Goblin'
    },
    
]

</script>
<template>
    <section class="mt-8 w-100 h-dvh">
        <Card>
            <section class="flex-col w-1/2 text-left">
                <TextBlock 
                    :text-content="title" 
                    content-class="text-2xl font-bold"
                />
                <section class="flex flex-row items-center h-20" v-for="member in team">
                    <img 
                        src="https://fastly.picsum.photos/id/832/200/200.jpg?hmac=V4CRQyK7KVP2wBYsEhpcpP8wSdwyU5c-yTeMm37uOOo" 
                        alt="profile picture"
                        width="50"
                        height="50"
                        class="rounded-full mr-2"
                    >
                    <TextBlock
                        :label="member.name"
                        :text-content="member.title"
                        label-class="font-bold text-black-600 opacity-1"
                        content-class="text-xs"
                    />
                    <div class="flex flex-row w-4/5 justify-end">
                        
                        <Button 
                            text="&#x2709"
                        />
                        <Button
                            text="..." 
                        />
                    </div>
                </section>
                
            </section>
        </Card>
    </section>
</template>