<script setup>
// Components
import Card from '@/components/UI/Card.vue'
import TextBlock from '@/components/UI/TextBlock.vue'
import Button from '@/components/UI/Button.vue'
import Avatar from '@/components/UI/Avatar.vue'
// Icons
import { Cog6ToothIcon } from '@heroicons/vue/24/outline'



const title = 'Team List'
const team = [
    {
        name: 'Dill',
        title: 'Dumbass',
        img: "https://fastly.picsum.photos/id/832/200/200.jpg?hmac=V4CRQyK7KVP2wBYsEhpcpP8wSdwyU5c-yTeMm37uOOo"
    },
    {
        name: 'Pickle Man',
        title: 'Trash Annihalator',
        img: ""
    },
    {
        name: '',
        title: 'Goblin',
        img: ""

    },
    
]

</script>
<template>
    <section class="w-100">
        <Card>
            <section class="m-2 flex-col-js w-100">
                <TextBlock 
                    :text-content="title" 
                    content-class="text-2xl font-bold text-left"
                />
                <section class="flex flex-row items-center h-20 gap-3" v-for="member in team">
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
                    <div class="flex flex-row justify-end w-4/5">
                        
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