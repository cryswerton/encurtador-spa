<script>
import {useAuth} from '@/stores/auth.js'
import http from '@/services/http.js'

export default {
    name: 'Content',
    data(){
        return{
            links: [],
            auth: useAuth(),
        }
    },
    async mounted() {
        const data = await this.auth.getLinks()
        console.log(data)
        this.links = data
    },
    methods: {
        async deleteLink(id){
            if (confirm("Are you sure about this?")) {
                try {
                const auth = useAuth()
                const tokenAuth = 'Bearer ' + auth.token

                console.log(tokenAuth)

                const data = await http.delete(`/links/${id}`, {
                    headers: {
                        Authorization: tokenAuth
                    }
                })

                const links = await this.auth.getLinks()
                this.links = links
              } catch (error) { 
                console.log(error?.response?.data)
              }
            
            } else {
            // The user clicked Cancel
            }
        }
    }
}
</script>

<template>
    <h3>Links</h3>
    <div v-for="link in links" :key="link.id">
        <div>
            <div>{{ link.short_link }}</div>
            <div>{{ link.destination }}</div>
            <button @click="deleteLink(link.id)">Delete</button>
        </div>
    </div>
</template>
