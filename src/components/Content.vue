<script>
import {useAuth} from '@/stores/auth.js'

export default {
    name: 'Content',
    data(){
        return{
            links: [
                'link1', 
                'link2',
                'link3',
            ],
            auth: useAuth(),
        }
    },
    async mounted() {
        const data = await this.auth.getLinks()
            console.log(data)
            this.links = data
    },
}
</script>

<template>
    <h3>Links</h3>
    <div v-for="link in links" :key="link.id">
        <div>
            <div>{{ link.short_link }}</div>
            <div>{{ link.destination }}</div>
        </div>
    </div>
</template>
