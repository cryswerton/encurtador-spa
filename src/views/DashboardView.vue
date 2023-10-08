<template>
    <h1>Dashboard</h1>
    <div v-if="name.length > 0">
        <p>You are logged in as {{ name }}</p>
    </div>
</template>

<script>
import { useAuth } from '@/stores/auth.js'

export default {
    data(){
        return {
            name: ''
        }
    },
    mounted() {
        const auth = useAuth()
        const user = JSON.parse(auth.user)
        this.name = user.name
    }
}
</script>