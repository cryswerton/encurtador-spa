<template>
    <h1>Dashboard</h1>
    <div v-if="name.length > 0">
        <p>You are logged in as {{ name }}</p>
        <button @click="logout">Log out</button>
    </div>
</template>

<script>
import { useAuth } from '@/stores/auth.js'
import { useRouter } from 'vue-router';

export default {
    data(){
        return {
            name: '',
            auth: useAuth()
        }
    },
    methods: {
        async logout(){
            this.auth.logout()
            this.auth.clear()
            this.$router.push('/');
        },
    },
    mounted() {
        const user = JSON.parse(this.auth.user)
        this.name = user.name
    }
}
</script>